import React from 'react'
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      price: 3000,
      href: '#',
      imageSrc: 'https://cpimg.tistatic.com/00638453/b/9/Centrifugal-Monoblock-Pumpsets.jpg',
      imageAlt: 'Pump',
    },
    {
      id: 2,
      name: '',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'XYZ',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'ABC',
      href: '#',

      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

export default function Products() {
  return (
    <div>
        <div className='container m-8 text-center'>
        <span className="bg-clip-text text-[60px] text-transparent bg-gradient-to-r from-cyan-500 to-violet-500">
             Our Products
        </span>
        <h1 className="text-4xl text-centre pt-10 font-normal leading-normal mt-0 mb-2">
          Monoblock Pumps
        </h1>
        </div>
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-8 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-4">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="max-w-full h-auto rounded-lg border-4"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
