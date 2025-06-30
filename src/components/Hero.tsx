import { ArrowRight, Shield, Clock, Globe2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#39;60&#39; height=&#39;60&#39; viewBox=&#39;0 0 60 60&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39;%3E%3Cg fill=&#39;none&#39; fill-rule=&#39;evenodd&#39;%3E%3Cg fill=&#39;%239C92AC&#39; fill-opacity=&#39;0.03&#39;%3E%3Ccircle cx=&#39;30&#39; cy=&#39;30&#39; r=&#39;2&#39;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Globe2 className="w-4 h-4 mr-2" />
            Paiements internationaux depuis l'Afrique de l'Ouest
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Payez vos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              fournisseurs
            </span>
            <br />
            internationaux en toute sécurité
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Solution digitale pour les entreprises en Afrique de l'Ouest. 
            Effectuez des paiements internationaux rapides et conformes depuis le Sénégal, 
            la Côte d'Ivoire et 4 autres pays.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-blue-900" />
              <span className="font-medium">100% Sécurisé</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Paiement 24/7</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Globe2 className="w-5 h-5 text-purple-500" />
              <span className="font-medium">6 Pays couverts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-blue-600 to-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
            >
              Découvrir nos services
            </a>
          </div>
        </div>

        {/* Countries strip */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-4 font-medium">Disponible dans 6 pays d'Afrique de l'Ouest</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {['Sénégal', 'Côte d\'Ivoire', 'Guinée Conakry', 'Mali', 'Cameroun', 'Sierra Leone'].map((country) => (
              <span key={country} className="px-3 py-1 bg-white rounded-full shadow-sm border">{country}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;