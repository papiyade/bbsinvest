import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 w-full bg-gradient-to-b from-bg-pink-50 to bg-orange-50 shadow-md border-t z-50 p-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <span className="text-sm text-gray-700">
            Ce site utilise des cookies pour améliorer votre expérience.
          </span>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <button
              onClick={() => setShowModal(true)}
              className="text-sm text-[#AE3D7D] underline hover:text-[#A46E2F] transition-colors"
            >
              En savoir plus
            </button>
            <button
              onClick={acceptCookies}
              className="bg-[#AE3D7D] text-white px-4 py-1.5 rounded hover:bg-[#E46E2F] text-sm"
            >
              Accepter
            </button>
          </div>
        </div>
      )}

      {/* Modal de politique */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-4">Politique de Cookies – BBS MASTER GROUP LTD</h2>
            <div className="text-sm text-gray-700 space-y-4 text-justify">
              {/* Place ici le contenu HTML de ta politique (avec <p>, <ul>, etc.) */}
              <p><strong>1. Introduction</strong><br />
              La présente politique de cookies explique comment BBS MASTER GROUP LTD utilise des cookies et technologies similaires sur ses sites web, applications mobiles et plateformes numériques (ci-après « la Plateforme »). En utilisant notre Plateforme, vous acceptez l'utilisation des cookies telle que décrite ci-dessous.</p>

              <p><strong>2. Qu’est-ce qu’un cookie ?</strong><br />
              Un cookie est un petit fichier texte enregistré sur votre appareil (ordinateur, tablette, smartphone) lors de la consultation d’un site web. Il permet de reconnaître votre appareil et de collecter certaines informations sur votre navigation. Les cookies sont largement utilisés pour assurer le bon fonctionnement des sites, améliorer l’expérience utilisateur et fournir des données aux exploitants du site.</p>

            <p><strong>3. Types de cookies utilisés</strong></p>
                <ul className="list-disc pl-5">
                    <li><strong>Cookies strictement nécessaires :</strong> Indispensables au bon fonctionnement du site (ex. : sécurité, gestion de session). Sans ces cookies, certains services ne peuvent fonctionner correctement.</li>
                    <li><strong>Cookies de performance et d’analyse :</strong> Utilisés pour recueillir des informations anonymes sur l’utilisation du site (pages visitées, durée de visite, erreurs éventuelles) afin d’améliorer les performances et l’expérience utilisateur.</li>
                    <li><strong>Cookies de fonctionnalité :</strong> Permettent de mémoriser vos préférences (langue, région, etc.) afin de personnaliser votre navigation.</li>
                    <li><strong>Cookies publicitaires et de suivi :</strong> Placés par des partenaires tiers pour afficher des publicités pertinentes en fonction de votre profil et de votre comportement de navigation.</li>
                </ul>
            <p><strong>4. Finalités de l'utilisation</strong></p>
            <span className='pl-1'></span>Nous utilisons les cookies pour les finalités suivantes :
                <ul className="list-disc pl-5"></ul>
                    <li>Garantir le bon fonctionnement et la sécurité de notre Plateforme ;</li>
                    <li>Analyser le trafic et les comportements de navigation ;</li>
                    <li>Améliorer l’expérience utilisateur ;</li>
                    <li>Mesurer la performance de nos campagnes marketing.</li>
            <p><strong>5. Gestion des cookies</strong></p>
            <ul className="list-disc pl-5">
                <li>Afficher la liste des cookies utilisés ;</li>
                <li>Supprimer tout ou partie des cookies ;</li>
                <li>Bloquer les cookies de certains sites.</li>
            </ul>
            <p><strong>Attention : </strong>Vous pouvez à tout moment configurer ou désactiver les cookies via les paramètres de votre navigateur. Vous pouvez :</p>

            <p><strong>6. Cookies Tiers</strong></p>
            <p>Nous autorisons certains services tiers à placer des cookies sur votre appareil à des fins statistiques, publicitaires ou sociales. Ces cookies sont soumis aux politiques de confidentialité de ces tiers.</p>
            Exemples de services utilisés :
            <ul className="list-disc pl-5">
                <li>Google Analytics</li>
                <li>Facebook Pixel</li>
                <li>LinkedIn Insight Tag</li>
            </ul>

            <p><strong>7. Consentement et mises à jour</strong></p>
            <p>Lors de votre première visite, un bandeau de cookies vous informe de notre politique et vous invite à accepter ou configurer vos préférences. Vous pouvez modifier votre consentement à tout moment. <br />
                Cette politique peut être mise à jour pour refléter tout changement technologique, réglementaire ou fonctionnel. La date de mise à jour sera indiquée en haut du document.</p>

            <p><strong>8. Contact</strong></p>
            <p>Pour toute question concernant notre politique de cookies, vous pouvez nous contacter à l'adresse suivante :
                <a href="mailto:contact@bbsmastergroup.com" className="text-[#AE3D7D] hover:underline ml-1">
                contact@bbsmastergroup.com
            </a>
            </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
