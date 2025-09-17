import { MapPin, Shield, Award } from 'lucide-react';
import { LocationMap } from './LocationMap';

export function ProductDescription() {
  const scrollToForm = () => {
    const formElement = document.getElementById('client-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12">
      {/* Product Video - Moved to top */}
      <div className="text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Découvrez Votre Futur Investissement Terrain</h2>
          <p className="text-gray-700">
            Regardez notre visite détaillée du terrain agricole à Sfax, Tanyour klm 24, et découvrez son potentiel pour la plantation d'oliviers.
          </p>
        </div>
        
        {/* Location Map */}
        <div className="max-w-4xl mx-auto">
          <LocationMap 
            latitude={34.9375278}
            longitude={10.6767778}
            googleMapsUrl="https://www.google.com/maps?q=34.9375278,10.6767778&entry=gps&lucs=,94284487,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjM1LjAuNzk5MDg4MzU1MBgAINeCAypjLDk0Mjg0NDg3LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJUTg%3D%3D&skid=40203e5a-0f81-4f37-8c8e-8436da22dea2&g_st=ipc"
          />
        </div>
        
        <div className="rounded-xl overflow-hidden max-w-4xl mx-auto mt-8 shadow-lg">
          <img
            src="/POST 2.png"
            alt="Terrain Agricole avec Oliviers à Sfax Tanyour"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Land Overview - Reduced to 2 paragraphs */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">À Propos d'ARDHI Terrain Premium</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Assurez votre avenir avec une opportunité d'investissement agricole unique. ARDHI Terrain Premium propose 
          une parcelle d'exception à Sfax, Tanyour km 24, idéale pour la plantation d'oliviers. Ce terrain a été 
          soigneusement sélectionné pour son potentiel agricole et son emplacement stratégique.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Investissez dès aujourd'hui dans la prospérité de demain. Nos parcelles premium bénéficient de titres 
          clairs, d'une accessibilité optimale, et sont situées dans des zones à fort développement avec un potentiel 
          d'appréciation important.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Chaque réservation vous donne également une chance exclusive de gagner une parcelle supplémentaire 
          de 2 000 m² grâce à notre loterie spéciale. Ne manquez pas cette opportunité de sécuriser un investissement 
          durable et rentable.
        </p>
        
        {/* Basic Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 bg-gray-50 rounded-lg p-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Emplacement & Superficie</span>
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>Superficie : 400 m² (Emplacement Premium)</p>
              <p>Zonage : Agriculture</p>
              <p>Accès : Route Tanyour klm 24</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Légal & Caractéristiques</span>
            </h3>
            <div className="text-gray-700 space-y-1">
              <p>Titre : Clair & Enregistré</p>
              <p>Services : Disponibles à Proximité</p>
              <p>Développement : زراعة زياتين</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lottery Section with Reservation Button */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <Award className="w-8 h-8 text-yellow-600" />
            <h2 className="text-2xl font-semibold text-yellow-800">🎉 Tirage au Sort Spécial !</h2>
          </div>
          <p className="text-yellow-700 text-lg max-w-3xl mx-auto">
            Chaque réservation vous inscrit automatiquement à notre tirage au sort exclusif pour gagner un 
            <strong> terrain supplémentaire de 2 000 m² entièrement GRATUIT !</strong>
          </p>
          <p className="text-yellow-600 text-sm">Tirage mensuel. Conditions générales applicables.</p>
          
          {/* Reservation Button */}
          <div className="pt-4">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#76B935] to-[#4D8F1C] hover:from-[#6DAD30] hover:to-[#427A17] text-white font-semibold py-3 sm:py-4 px-4 sm:px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-base sm:text-lg"
            >
              <>
                <span className="block sm:hidden">Réserver - 4 500 TND</span>
                <span className="hidden sm:block">Réserver Maintenant - 4 500 TND</span>
              </>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
