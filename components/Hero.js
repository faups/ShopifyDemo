import Link from "next/link";

import { formatPrice } from "../utils";

export default function Hero({ products }) {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="inline">Glacial</span>{" "}
          <span className="inline text-indigo-600">Clothing</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          For those that do it all.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 divide-x divide-gray-600 hover:bg-gray-700 md:text-lg"
            >
              <span className="pr-6">Glacial Hoodie</span>
              <span className="pl-6">$70</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products.edges.map((item) => {
            const product = item.node;
            const image = product.images.edges[0].node;
            return (
              <Link key={product.handle} href={`/products/${product.handle}`}>
                <a className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                    <img
                      src={image.transformedSrc}
                      alt={image.altText}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                    <h3>{product.title}</h3>
                    <p>
                      {formatPrice(product.priceRange.minVariantPrice.amount)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-500">
                    {product.tags[0]}
                  </p>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
