import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f9fd]">
      {/* Hero Section */}
      <div className="w-full bg-[url('https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
        <div className="w-full min-h-[70vh] bg-black/20 flex flex-col items-center justify-center px-4 py-16">
          <img 
            src="https://i.imgur.com/cvbvd4d.png" 
            alt="HUB-Environnement Logo" 
            className="w-72 mb-16 animate-fade-in filter brightness-0 invert"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 animate-slide-up tracking-tight text-shadow-lg">
            Notre nouveau site arrive bientôt !
          </h1>
          <p className="text-xl text-white text-center max-w-2xl animate-slide-up-delayed leading-relaxed text-shadow-lg">
            Nous travaillons actuellement à la création d'un site plus moderne et intuitif 
            pour mieux répondre à vos besoins.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <p className="text-2xl text-[#34519e] text-center mb-16 font-medium">
          En attendant, contactez-nous pour toute demande :
        </p>
        
        <div className="grid md:grid-cols-3 gap-10">
          <a href="tel:0952811474" className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="w-16 h-16 bg-[#34519e]/10 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-[#34519e]" />
            </div>
            <p className="text-lg font-medium text-gray-900 mb-3">Téléphone</p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-600 hover:text-[#34519e] transition-colors">
                09 52 81 14 74
              </p>
              <p className="text-gray-600 hover:text-[#34519e] transition-colors">
                06 77 35 04 00
              </p>
            </div>
          </a>

          <a href="mailto:contact@hub-environnement.com" className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="w-16 h-16 bg-[#34519e]/10 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-[#34519e]" />
            </div>
            <p className="text-lg font-medium text-gray-900 mb-3">E-mail</p>
            <p className="text-gray-600 hover:text-[#34519e] transition-colors">
              contact@hub-environnement.com
            </p>
          </a>

          <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#34519e]/10 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-[#34519e]" />
            </div>
            <p className="text-lg font-medium text-gray-900 mb-3">Adresse</p>
            <p className="text-gray-600 text-center">
              3 rue des Entrepôts,<br />69014 Lyon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
