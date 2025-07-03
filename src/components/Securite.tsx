import React from "react";
import { Link } from "react-router-dom";

const Securite = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 bg-pink-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Politique de Sécurité – BBS INVEST GROUP LTD</h1>

      <section className="space-y-8 text-justify leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Objet de la politique</h2>
          <p>
            La présente politique définit les principes, responsabilités et dispositifs mis en place par BBS INVEST GROUP LTD afin de garantir la sécurité, la confidentialité, l'intégrité et la disponibilité des informations traitées dans le cadre de ses activités. Elle assure la conformité aux exigences légales et réglementaires.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Portée</h2>
          <p>
            Cette politique couvre les données personnelles et confidentielles, les ressources informatiques, les applications, plateformes, services cloud ainsi que les processus métiers et procédures opérationnelles.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Principes directeurs</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Confidentialité : accès strictement contrôlé et authentification forte.</li>
            <li>Intégrité : prévention des modifications non autorisées.</li>
            <li>Disponibilité : accès continu via PCA et PRA.</li>
            <li>Traçabilité : journalisation et surveillance des systèmes critiques.</li>
            <li>Conformité : respect des lois, audits réguliers.</li>
            <li>Amélioration continue : évolution des dispositifs et formation.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Gouvernance de la sécurité</h2>
          <p>
            Un Responsable de la sécurité de l'information (RSI/CISO) est désigné pour définir la stratégie, superviser les incidents, former les collaborateurs et réaliser les audits internes.
            Tous les collaborateurs signent une charte informatique définissant leurs responsabilités.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Classification et gestion des informations</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Confidentielles</strong> : données clients et accès sécurisés, protégées par chiffrement et MFA.</li>
            <li><strong>Internes</strong> : procédures et documentation accessibles uniquement aux employés autorisés.</li>
            <li><strong>Publiques</strong> : informations marketing accessibles au public.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Accès aux systèmes</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Contrôle d’accès basé sur les rôles (RBAC).</li>
            <li>Authentification forte (2FA) sur systèmes sensibles.</li>
            <li>Révocation immédiate des accès en cas de changement.</li>
            <li>Revue périodique des droits d’accès.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Sécurité réseau et logicielle</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Mises à jour régulières et correctifs de sécurité.</li>
            <li>Pare-feu, antivirus, systèmes de détection d’intrusion (IDS).</li>
            <li>Chiffrement des données en transit (TLS/HTTPS) et au repos.</li>
            <li>Séparation stricte des environnements développement, test, production.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Sauvegarde et reprise d’activité</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Sauvegardes automatiques quotidiennes.</li>
            <li>Plan de continuité d’activité (PCA) et plan de reprise après sinistre (PRA).</li>
            <li>Redondance des infrastructures critiques (cloud, data centers).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Gestion des incidents</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Registre des incidents de sécurité tenu à jour.</li>
            <li>Procédure claire de réponse aux incidents.</li>
            <li>Déclaration obligatoire aux autorités compétentes en cas de fuite.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Formation et sensibilisation</h2>
          <p>
            Formations régulières et campagnes de sensibilisation sur la cybersécurité et les risques numériques, incluant simulations d’attaques et tests.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Évaluation et audit</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Audits de sécurité internes et externes annuels.</li>
            <li>Tests d’intrusion (pentests) réguliers.</li>
            <li>Revue périodique de la politique de sécurité.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Responsabilité</h2>
          <p>
            Chaque employé est responsable de la sécurité des informations qu’il traite. Toute violation entraîne des sanctions disciplinaires ou légales.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. Mise à jour de la politique</h2>
          <p>
            Révisions annuelles, après incidents majeurs ou changements réglementaires pour garantir pertinence et conformité.
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

export default Securite;
