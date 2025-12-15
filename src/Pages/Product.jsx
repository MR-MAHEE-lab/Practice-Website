import React from "react";
import { useCart } from "../context/CartContext";

// Full list of 20 products
const products = [
  { id: 1, name: "Wireless Headphone", price: 120, oldPrice: 150, description: "High-quality wireless headphone with noise cancellation.", image: "https://picsum.photos/300/300?1", sale: true, rating: 4.5 },
  { id: 2, name: "Smart Watch", price: 90, oldPrice: null, description: "Track your fitness and notifications easily.", image: "https://picsum.photos/300/300?2", sale: false, rating: 4.2 },
  { id: 3, name: "Gaming Mouse", price: 45, oldPrice: 60, description: "Ergonomic gaming mouse with RGB lighting.", image: "https://picsum.photos/300/300?3", sale: true, rating: 4.7 },
  { id: 4, name: "Mechanical Keyboard", price: 150, oldPrice: null, description: "Durable keyboard with tactile switches.", image: "https://picsum.photos/300/300?4", sale: false, rating: 4.8 },
  { id: 5, name: "Bluetooth Speaker", price: 80, oldPrice: 100, description: "Portable speaker with excellent bass.", image: "https://picsum.photos/300/300?5", sale: true, rating: 4.6 },
  { id: 6, name: "VR Headset", price: 220, oldPrice: 250, description: "Immersive VR experience with high resolution.", image: "https://picsum.photos/300/300?6", sale: true, rating: 4.9 },
  { id: 7, name: "DSLR Camera", price: 450, oldPrice: null, description: "Capture stunning photos with 24MP sensor.", image: "https://picsum.photos/300/300?7", sale: false, rating: 4.7 },
  { id: 8, name: "Laptop Stand", price: 35, oldPrice: 50, description: "Adjustable stand for better ergonomics.", image: "https://picsum.photos/300/300?8", sale: true, rating: 4.3 },
  { id: 9, name: "External Hard Drive", price: 70, oldPrice: 90, description: "1TB external hard drive for all your files.", image: "https://picsum.photos/300/300?9", sale: true, rating: 4.4 },
  { id: 10, name: "Portable Charger", price: 25, oldPrice: 40, description: "Power bank with fast charging support.", image: "https://picsum.photos/300/300?10", sale: true, rating: 4.2 },
  { id: 11, name: "Smartphone Gimbal", price: 120, oldPrice: 150, description: "Stabilize your videos for smooth filming.", image: "https://picsum.photos/300/300?11", sale: true, rating: 4.5 },
  { id: 12, name: "Action Camera", price: 200, oldPrice: 250, description: "Waterproof camera for adventure enthusiasts.", image: "https://picsum.photos/300/300?12", sale: true, rating: 4.6 },
  { id: 13, name: "Wireless Charger", price: 40, oldPrice: 55, description: "Fast wireless charging for your devices.", image: "https://picsum.photos/300/300?13", sale: true, rating: 4.3 },
  { id: 14, name: "Noise Cancelling Earbuds", price: 60, oldPrice: 80, description: "Compact earbuds with noise cancellation.", image: "https://picsum.photos/300/300?14", sale: true, rating: 4.5 },
  { id: 15, name: "LED Desk Lamp", price: 30, oldPrice: 45, description: "Energy-saving LED lamp with adjustable brightness.", image: "https://picsum.photos/300/300?15", sale: true, rating: 4.4 },
  { id: 16, name: "Smart Thermostat", price: 130, oldPrice: 160, description: "Control your home's temperature smartly.", image: "https://picsum.photos/300/300?16", sale: true, rating: 4.6 },
  { id: 17, name: "Tablet", price: 250, oldPrice: 300, description: "10-inch tablet for work and entertainment.", image: "https://picsum.photos/300/300?17", sale: true, rating: 4.5 },
  { id: 18, name: "Fitness Tracker", price: 55, oldPrice: 70, description: "Monitor your health and activities easily.", image: "https://picsum.photos/300/300?18", sale: true, rating: 4.4 },
  { id: 19, name: "Smart Door Lock", price: 180, oldPrice: 220, description: "Secure your home with a smart lock.", image: "https://picsum.photos/300/300?19", sale: true, rating: 4.7 },
  { id: 20, name: "Gaming Chair", price: 300, oldPrice: 350, description: "Comfortable chair for long gaming sessions.", image: "https://picsum.photos/300/300?20", sale: true, rating: 4.8 },
];

export default function Product() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">🛍️ Our Products</h1>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden group transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.sale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </span>
              )}
            </div>

            <div className="p-4 flex flex-col justify-between">
              <h2 className="text-sm md:text-base font-semibold mb-1 truncate">
                {product.name}
              </h2>

              <p className="text-gray-500 text-xs mb-1 truncate">{product.description}</p>

              <div className="flex items-center gap-2 mb-2">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                )}
                <span className="text-gray-900 font-bold">${product.price}</span>
              </div>

              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-yellow-400 text-xs`}>
                    {i < Math.floor(product.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>

              <button
                className="btn btn-primary btn-sm w-full transition-transform duration-200 hover:scale-105"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
