import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import { storefront } from "../utils";

const staticProducts = [
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    price: "$13",
    description: "3 sizes available",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Focus Card Holder",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
];

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Layout>
        <Hero products={products} />
      </Layout>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery);
  return {
    props: {
      products: data.products,
    },
  };
}

const productsQuery = `
  query Products {
    products(first: 10) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;
