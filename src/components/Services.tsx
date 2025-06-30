import React from 'react';
import { CreditCard, Banknote, TrendingUp, FileText, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: 'Paiement en devise étrangère',
      description: 'EUR, USD, CNY et autres devises principales acceptées',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Banknote,
      title: 'Virements internationaux',
      description: 'SWIFT, SEPA, IBAN - Tous les standards bancaires',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Taux compétitifs',
      description: 'Taux de change transparents et avantageux du marché',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Gestion documentaire',
      description: 'Justificatifs douaniers et factures fournisseurs',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Présence locale',
      description: 'Agences physiques dans tous les pays couverts'
    },
    {
      icon: Clock,
      title: 'Conformité BCEAO',
      description: 'Respect total de la réglementation locale'
    },
    {
      icon: CreditCard,
      title: 'Accompagnement 24/7',
      description: 'Support personnalisé pour chaque transaction'
    },
    {
      icon: FileText,
      title: 'Plateforme sécurisée',
      description: 'Interface digitale avec accès permanent'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Un service pensé pour les entreprises en{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Afrique de l'Ouest
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre solution digitale vous permet d'effectuer des paiements internationaux 
            rapides et conformes pour régler vos fournisseurs partout dans le monde.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir pour vos paiements à l'international ?
            </h3>
            <p className="text-lg text-gray-600">
              Une expertise locale combinée à une technologie de pointe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;