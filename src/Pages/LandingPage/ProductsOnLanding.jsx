import React from "react";

function ProductsOnLanding() {
  const products = [
    {
      id: 1,
      name: "Our Cloth Demo",
      price: "₹2,499",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjmtEi4lUICAqvDvPizPmb9yfcPb_EPq4GQ&s",
    },
    {
      id: 2,
      name: "Our Cloth Demo",
      price: "₹5,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5AI6DssHyXzoHlQlmZddHBoy5aN73_nThA&s",
    },
    {
      id: 3,
      name: "Our Cloth Demo",
      price: "₹3,299",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ll1cmtjzSWJW8KbE8iKxg56sANngzUt0EQ&s",
    },
    {
      id: 4,
      name: "Our Cloth Demo",
      price: "₹1,899",
      image:
        "https://m.media-amazon.com/images/I/71cZW9pN1BL._UY1100_.jpg",
    },
    {
      id: 5,
      name: "Our Cloth Demo",
      price: "₹1,899",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMuahariMwOA5hvr4EzghrgyjkLJdxOtw2A&s",
    },
    {
      id: 6,
      name: "Our Cloth Demo",
      price: "₹1,899",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcOewK-XdnE6YD_K2-xdPx8PrImYY9XDqDw&s",
    },
  ];

  return (
    <section className="w-full py-12 px-6 md:mt-0 sm:mt-[80%]   mt-[180%] bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        {/* Flexbox Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-contain"
              />
              <div className="p-5 flex flex-col items-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-red-600 font-bold mt-2">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsOnLanding;
