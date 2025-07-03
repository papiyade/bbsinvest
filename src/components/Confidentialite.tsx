import React from 'react';
import { Link } from 'react-router-dom';

const Confidentialite = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 bg-pink-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Politique de Confidentialité – BBS INVEST GROUP LTD</h1>

      <section className="space-y-8 text-justify leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Objet de la politique</h2>
          <p>
            Cette politique explique comment BBS INVEST GROUP LTD collecte, utilise, conserve, partage et protège les données personnelles. 
            Elle respecte les lois canadiennes (LPRPDE / PIPEDA) et les normes internationales comme le RGPD.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Champ d'application</h2>
          <p>
            Elle s’applique à toutes les personnes interagissant avec BBS INVEST, en ligne ou hors ligne, y compris partenaires, clients, employés, et filiales.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Principes fondamentaux</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Transparence, licéité, loyauté</li>
            <li>Finalités limitées et légitimes</li>
            <li>Minimisation et exactitude des données</li>
            <li>Durée limitée de conservation</li>
            <li>Sécurité et confidentialité des traitements</li>
            <li>Responsabilité démontrable</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Données collectées</h2>
          <p>
            Données d'identité, de contact, financières, professionnelles et techniques (ex : adresse IP, cookies, navigation).
            Certaines sont indirectement collectées pour améliorer les services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Finalités de traitement</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fournir et gérer les services financiers</li>
            <li>Respecter les obligations réglementaires</li>
            <li>Vérifier l'identité et prévenir la fraude</li>
            <li>Répondre aux autorités</li>
            <li>Améliorer les services et la sécurité</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Consentement</h2>
          <p>
            Le consentement explicite ou implicite est requis sauf obligation légale. L’utilisateur peut le retirer à tout moment, dans les limites prévues par la loi.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Conservation des données</h2>
          <p>
            Les données sont conservées selon les finalités définies, puis supprimées ou anonymisées. Conservation légale minimale : 5 ans après fin de relation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Accès, modification et suppression</h2>
          <p>
            Vous pouvez exercer vos droits en écrivant à :{" "}
            <a href="mailto:privacy@bbsmastergroup.com" className="text-pink-800 underline">privacy@bbsmastergroup.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Mesures de sécurité</h2>
          <p>
            Des contrôles d'accès, de cryptage, de journalisation et d'audits sont mis en œuvre pour prévenir toute violation, perte ou altération des données.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Partage des données</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Jamais vendues</li>
            <li>Partagées avec autorités réglementaires et partenaires techniques sous conditions strictes</li>
            <li>Possibles partages internes au sein du groupe</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Transfert transfrontalier</h2>
          <p>
            Les transferts hors Canada sont soumis à des garanties (pays adéquat, clauses contractuelles) pour assurer une protection équivalente.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Mise à jour de la politique</h2>
          <p>
            Mise à jour annuelle ou en cas de changement juridique. Toute modification majeure sera notifiée à l’utilisateur.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. Contact</h2>
          <p>
            Pour toute question, écrivez à :{" "}
            <a href="mailto:privacy@bbsmastergroup.com" className="text-pink-800 underline">
              privacy@bbsmastergroup.com
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

export default Confidentialite;
