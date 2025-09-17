import { Star, MapPin, Award } from 'lucide-react';
import { useEffect } from 'react';
import { AvailableLandCounter } from './AvailableLandCounter';

export function ProductDetails() {
  const scrollToForm = () => {
    const formElement = document.getElementById('client-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
      {/* Product header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>Terrain Agricole - Sfax, Tanyour km 24</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-black">ARDHI Terrain Premium</h1>
        
        {/* Rating and testimonials */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <span className="text-sm">4.9</span>
          <span className="text-sm text-gray-600">500+ Investisseurs Satisfaits</span>
        </div>

        {/* Special offer badge */}
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-green-600" />
          <span className="text-green-600 font-medium">Offre de Lancement Spéciale + Entrée Loterie</span>
        </div>
        
        {/* Available land counter */}
        <div className="mt-1">
          <AvailableLandCounter count={49} />
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-4">
          <span className="text-2xl md:text-3xl font-semibold text-black">4 500 TND</span>
          <span className="text-lg text-gray-500 line-through">5 000 TND</span>
          <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">-17%</span>
          </div>
          <div className="mt-2 bg-blue-50 border-l-4 border-blue-500 px-4 py-2 rounded">
            <p className="font-semibold text-blue-800">Plan de paiement:</p>
            <p className="text-blue-700 text-lg">• Avance: <span className="font-bold">1 500 TND</span></p>
            <p className="text-blue-700 text-lg">• Mensualité: <span className="font-bold">70 TND/mois</span></p>
          </div>
        </div>
        
        {/* Compact counter for medium/large screens */}
        <div className="hidden md:block">
          <AvailableLandCounter count={49} variant="compact" />
        </div>
      </div>

      {/* Land size */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-green-800 font-medium">Superficie du Terrain :</span>
          <span className="text-green-900 font-semibold text-lg">400 m²</span>
        </div>
        <p className="text-green-700 text-sm mt-1">Parfait pour l'agriculture, idéal pour زراعة زياتين</p>
      </div>

      {/* Lottery announcement */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">🎉 Tirage au Sort Spécial !</h3>
        <p className="text-yellow-700 text-sm">
          Chaque achat vous inscrit automatiquement à notre tirage au sort exclusif pour gagner un 
          <strong> terrain supplémentaire de 2 000 m² entièrement GRATUIT !</strong>
        </p>
        <p className="text-yellow-600 text-xs mt-2">Tirage mensuel. Conditions générales applicables.</p>
      </div>

      {/* Button that leads to form */}
      <div className="mt-6 text-center">
        <button
          onClick={scrollToForm}
          className="bg-gradient-to-r from-[#76B935] to-[#4D8F1C] hover:from-[#6DAD30] hover:to-[#427A17] text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg w-full"
        >
          <span className="whitespace-nowrap">Réserver votre parcelle maintenant</span>
        </button>
      </div>
    </div>
  );
}
