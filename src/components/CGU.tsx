import React from 'react';
import { Link } from 'react-router-dom';

const CGU = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 bg-pink-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Conditions Générales – BBS INVEST GROUP LTD</h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. PRÉAMBULE</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation et de Service (CGU) régissent les relations contractuelles entre
            <strong> BBS INVEST GROUP LTD</strong>, enregistrée en Ontario sous le n° 1522333-4, et toute personne utilisant ses services.
            BBS INVEST est également réglementée par le CANAFE. Ces CGU définissent les droits, obligations et responsabilités des parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. DÉFINITIONS</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Client</strong> : Personne souscrivant aux services de BBS INVEST.</li>
            <li><strong>Utilisateur</strong> : Toute personne accédant à la plateforme.</li>
            <li><strong>Plateforme</strong> : Sites, applications, API et interfaces de BBS INVEST.</li>
            <li><strong>Services</strong> : Paiement, change, monnaie virtuelle, API.</li>
            <li><strong>Conditions Générales</strong> : Présentes CGU et tout document rattaché.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. OBJET DES SERVICES</h2>
          <p>
            BBS INVEST propose des services financiers sécurisés : transferts d’argent, change de devises, gestion de monnaie virtuelle
            et intégration d’API de paiement, dans un cadre réglementaire strict.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. ADHÉSION AUX SERVICES</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Création de compte</strong> avec données exactes.</li>
            <li><strong>Processus KYC/KYB</strong> : vérification d'identité.</li>
            <li><strong>Acceptation</strong> des CGU obligatoire.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. RESPONSABILITÉS DU CLIENT</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fournir des données exactes et à jour.</li>
            <li>Respecter la loi dans l’utilisation des services.</li>
            <li>Protéger ses identifiants et accéder aux services de manière sécurisée.</li>
            <li>Coopérer avec les vérifications de conformité.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. CONDITIONS TARIFAIRES</h2>
          <p>
            Les frais sont communiqués en toute transparence avant chaque opération. Toute modification est notifiée avec un préavis
            raisonnable. Le client peut se désengager si nécessaire.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. DONNÉES PERSONNELLES</h2>
          <p>
            Les données sont traitées selon la loi LPRPDE/PIPEDA et notre politique de confidentialité. Le client dispose de droits
            d’accès, de rectification et de suppression.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. CONFORMITÉ ET LUTTE CONTRE LE BLANCHIMENT</h2>
          <p>
            BBS INVEST met en place un dispositif conforme au CANAFE. Les opérations peuvent être suspendues, analysées ou signalées
            si une activité illicite est suspectée.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. LIMITATION DE RESPONSABILITÉ</h2>
          <p>
            BBS INVEST décline toute responsabilité en cas de pertes indirectes, force majeure ou manquement du client à ses obligations.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. SUSPENSION ET RÉSILIATION</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Suspension</strong> possible en cas de suspicion ou d’enquête.</li>
            <li><strong>Résiliation</strong> possible à tout moment par le client, après régularisation des obligations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. MODIFICATIONS DES CONDITIONS</h2>
          <p>
            Les CGU peuvent évoluer selon la loi ou les opérations. Une notification est envoyée. Sans opposition du client dans un délai
            donné, elles sont considérées comme acceptées.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. LOI APPLICABLE ET JURIDICTION</h2>
          <p>
            Les CGU sont régies par le droit canadien. Les tribunaux du siège social sont compétents sauf disposition contraire obligatoire.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. CONTACT</h2>
          <p>
            Pour toute question ou réclamation, contactez :{" "}
            <a
              href="mailto:contact@bbsmastergroup.com"
              className="text-pink-800 underline"
            >
              contact@bbsmastergroup.com
            </a>
          </p>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link to="/" className="text-pink-800 hover:underline text-sm">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default CGU;
