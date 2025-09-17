import { Header } from './components/Header';
import { ProductImage } from './components/ProductImage';
import { ProductDetails } from './components/ProductDetails';
import { ProductDescription } from './components/ProductDescription';
import { ClientForm } from './components/ClientForm';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CountdownTimer } from './components/CountdownTimer';
import { MapPin } from 'lucide-react';

export default function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('client-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // Using POST 2.png as the main image
  const mainProductImage = "/POST 2.png";
  
  // Using the thumbnails from imgbb with POST 2.png as first image
  const thumbnailImages = [
    "/POST 2.png", // POST 2.png as first thumbnail
    "https://i.ibb.co/chrnjvTY/process-planting-olive-trees-1.jpg", // Olive tree planting process
    "https://i.ibb.co/FbTykfs0/stock-vector-olive-tree-growing-stages-froom-seed-seedling-sprout-flowering-ripe-olive-fruits-green.jpg", // Olive tree growth stages
    "https://i.ibb.co/jkT16hvx/olive-branch-roots-held-by-260nw-2405641351.webp", // Olive branch with roots
    "https://i.ibb.co/Q74gnqd5/Designer-29-300x300.png", // Designer olive tree
    "https://i.ibb.co/zMDJ5Q0/Olive-tree-seedling-planted-in-a-hole.jpg", // Seedling in hole
    "https://i.ibb.co/KjzfK2h6/olive-tree-help-v0-ygyi9r350voe1.webp", // Olive tree help
    "https://i.ibb.co/PZ2T3sQn/Olive-Tree-Soil.jpg", // Olive tree soil
    "https://i.ibb.co/4RsZv8m6/Planting-Olive-Trees.jpg", // Planting olive trees
    "https://i.ibb.co/FL5b3XGm/images-2.jpg" // Additional olive tree image
  ];

  return (
    <div className="min-h-screen bg-white">
      <CountdownTimer />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-start">
          {/* Product image - centered alignment */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-lg">
              <ProductImage 
                mainImage={mainProductImage}
                thumbnails={thumbnailImages}
              />
            </div>
          </div>

          {/* Product details - centered alignment */}
          <div className="flex justify-center lg:justify-start">
            <ProductDetails />
          </div>
        </div>

        {/* Product description section */}
        <div className="border-t border-gray-200 pt-16">
          <ProductDescription />
        </div>

        {/* Client Form Section - At the bottom */}
        <div className="border-t border-gray-200 pt-16 mt-16">
          <ClientForm />
        </div>
      </div>
      
      {/* WhatsApp Button - Fixed in bottom right corner */}
      <WhatsAppButton />
      
      {/* Floating Visit Reservation Button */}
      <div className="fixed bottom-4 left-4 z-50 md:left-1/2 md:transform md:-translate-x-1/2">
        <button
          onClick={scrollToForm}
          className="bg-gradient-to-r from-[#76B935] to-[#4D8F1C] hover:from-[#6DAD30] hover:to-[#427A17] text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 transition-transform hover:scale-105 animate-pulse"
        >
          <MapPin className="w-5 h-5" />
          <span className="whitespace-nowrap">Réserver un rendez-vous pour visite</span>
        </button>
      </div>
    </div>
  );
}
