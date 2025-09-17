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
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          {discount && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded">
              {discount}
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-bold text-green-800">{price}</span>
            <span className="text-sm text-gray-500">{size}</span>
          </div>
          <p className="text-gray-600 text-sm">{location}</p>
          <div className="mt-4">
            <button className="w-full bg-gradient-to-r from-[#76B935] to-[#4D8F1C] hover:from-[#6DAD30] hover:to-[#427A17] text-white font-semibold py-2 px-4 rounded-lg transition-all">
              Voir détails
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const MainPage = () => {
  // Sample products data - in a real app, this would come from an API
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
    {
      id: 2,
      title: "ARDHI Terrain Résidentiel",
      price: "75 000 TND",
      size: "800 m²",
      location: "Sousse, Zone Touristique",
      image: "https://i.ibb.co/chrnjvTY/process-planting-olive-trees-1.jpg"
    },
    {
      id: 3,
      title: "ARDHI Terrain Commercial",
      price: "120 000 TND",
      size: "1 200 m²",
      location: "Tunis, Centre Ville",
      image: "https://i.ibb.co/4RsZv8m6/Planting-Olive-Trees.jpg"
    },
    {
      id: 4,
      title: "ARDHI Terrain Agricole - Olive Premium",
      price: "8 500 TND",
      size: "600 m²",
      location: "Sfax, Mahdia",
      image: "https://i.ibb.co/FbTykfs0/stock-vector-olive-tree-growing-stages-froom-seed-seedling-sprout-flowering-ripe-olive-fruits-green.jpg",
      discount: "Nouveau"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#76B935] to-[#4D8F1C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ARDHI Premium Terrains</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Découvrez notre sélection de terrains premium pour votre investissement idéal
            </p>
            <Link 
              to="/product/1"
              className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              Notre Offre Spéciale
            </Link>
          </div>
        </div>
      </div>
      
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nos Terrains Disponibles</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Prêt à investir dans votre avenir?</h2>
            <p className="text-lg mb-8 text-gray-600 max-w-3xl mx-auto">
              Contactez notre équipe dès aujourd'hui pour plus d'informations sur nos terrains premium et nos offres spéciales.
            </p>
            <Link 
              to="/product/1"
              className="inline-block bg-gradient-to-r from-[#76B935] to-[#4D8F1C] hover:from-[#6DAD30] hover:to-[#427A17] text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-md"
            >
              Découvrir Nos Terrains
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ARDHI Premium Terrains</h3>
              <p className="text-gray-300">
                Votre partenaire de confiance pour l'investissement immobilier en Tunisie
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">+216 57 037 136</p>
              <p className="text-gray-300">info@ardhi-terrains.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ARDHI Premium Terrains. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
