import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

// Product Card Component
const ProductCard = ({ 
  id, 
  title, 
  price, 
  size, 
  location, 
  image, 
  discount 
}: {
  id: number;
  title: string;
  price: string;
  size: string;
  location: string;
  image: string;
  discount?: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 sm:h-64 object-cover" />
          {discount && (
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-500 text-white px-2 py-1 rounded text-xs sm:text-sm">
              {discount}
            </div>
          )}
        </div>
        <div className="p-3 sm:p-5">
          <h3 className="text-base sm:text-xl font-semibold mb-2">{title}</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-base sm:text-lg font-bold text-green-800">{price}</span>
            <span className="text-xs sm:text-sm text-gray-500">{size}</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">{location}</p>
          <div className="mt-3">
            <button className="w-full bg-gradient-to-r from-[#76B935] to-[#4D8F1C] hover:from-[#6DAD30] hover:to-[#427A17] text-white font-semibold py-2 px-4 rounded-lg transition-all text-sm sm:text-base">
              Voir détails
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const MainPage = () => {
  // Products data - add new products here in the future
  const products = [
    {
      id: 1,
      title: "ARDHI Terrain Agricole - Sfax Tanyour",
      price: "4 500 TND",
      size: "400 m²",
      location: "Sfax, Tanyour km 24",
      image: "/POST 2.png",
      discount: "-17%"
    },
    // Add future products below by uncommenting and modifying this template
    /*
    {
      id: 2,
      title: "Title of New Product",
      price: "X XXX TND",
      size: "XXX m²",
      location: "Location",
      image: "/path-to-image.jpg",
      discount: "Optional Discount Tag"
    },
    */
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-8 text-center">Nos Terrains Disponibles</h2>
        
        {/* Grid with 2 columns on mobile, more on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              size={product.size}
              location={product.location}
              image={product.image}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">ARDHI Premium Terrains</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Votre partenaire de confiance pour l'investissement immobilier en Tunisie
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact</h3>
              <p className="text-gray-300 text-sm sm:text-base">+216 57 037 136</p>
              <p className="text-gray-300 text-sm sm:text-base">info@ardhi-terrains.com</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} ARDHI Premium Terrains. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
