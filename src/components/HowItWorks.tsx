import React from 'react';
import { UserPlus, FileText, CheckCircle, Eye } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Ouverture de compte',
      description: 'Créez votre compte entreprise en ligne ou via nos agences locales. Un conseiller vous accompagne pour vérifier vos documents (RC, NINEA, pièces d\'identité, etc.).',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      icon: FileText,
      title: 'Soumission de la demande',
      description: 'Transmettez votre facture fournisseur, les coordonnées bancaires du bénéficiaire à l\'étranger, et les justificatifs douaniers si nécessaires.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Validation et taux de change',
      description: 'Nous validons ensemble la transaction et vous proposons le meilleur taux de change du marché. Dès validation, nous lançons le paiement.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '04',
      icon: Eye,
      title: 'Suivi en temps réel',
      description: 'Suivez l\'exécution de votre virement international via votre espace client. Vous recevez une confirmation et preuve de virement (Swift copy) dès que les fonds sont envoyés.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En 4 étapes simples, payez vos fournisseurs à l'international depuis le Sénégal, 
            la Côte d'Ivoire, la Guinée Conakry, le Mali, le Cameroun ou la Sierra Leone
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline connector - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 w-0.5 h-20 bg-gray-200"></div>
                )}

                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Un processus rapide, sécurisé et conforme
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Tous nos paiements sont conformes à la réglementation BCEAO. Nous nous assurons que 
            chaque opération est traçable, auditée, et réalisée dans les délais impartis.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Commencer le processus
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;