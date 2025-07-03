import React, { useState } from 'react';

const ConformiteFloatingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔘 Bouton flottant en bas à droite */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-white text-pink-800 border border-pink-800 rounded-full shadow-lg hover:bg-orange-50 transition-all duration-300 animate-fade-in-right"
      >
        Politique de conformité
      </button>

      {/* 🪟 Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 animate-fade-in">
          <div className="bg-gradient-to-b from-pink-200 to-orange-100 rounded-xl shadow-xl max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-[#AE3D7D]">
              Politique de Conformité – BBS INVEST GROUP LTD
            </h2>
            <div className="text-sm text-gray-800 space-y-4 text-justify">
              <p><strong>1. Introduction et déclaration d’engagement</strong><br />
                BBS INVEST GROUP LTD, société réglementée par le Centre d’analyse des opérations et déclarations financières du Canada (CANAFE) et enregistrée comme entreprise de services monétaires (MSB) sous le numéro M23496431 auprès de la Banque du Canada, publie la présente déclaration afin de réaffirmer son engagement ferme envers la conformité réglementaire, la lutte contre le blanchiment d’argent et la corruption, ainsi que le respect des normes internationales.
              </p>
              <p><strong>2. Cadre réglementaire applicable</strong><br />
                BBS INVEST GROUP LTD opère dans le strict respect de la législation canadienne et internationale :
                <ul className="list-disc ml-5 mt-1">
                  <li>Loi sur le recyclage des produits de la criminalité et le financement des activités terroristes (LRPCFAT) ;</li>
                  <li>Règlement sur les entreprises de services monétaires ;</li>
                  <li>Code criminel du Canada (Partie XII.2 – Infractions liées au blanchiment d’argent) ;</li>
                  <li>Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) ;</li>
                  <li>Directives et lignes directrices du CANAFE.</li>
                  <li>Foreign Corrupt Practices Act (FCPA – États-Unis) ;</li>
                  <li>UK Bribery Act 2010 (Royaume-Uni) ;</li>
                  <li>Recommandations du Groupe d’action financière (GAFI / FATF) ;</li>
                  <li>Convention des Nations Unies contre la corruption (CNUCC).</li>
                </ul>
              </p>
              <p><strong>3. Engagement de conformité</strong><br />
                BBS INVEST GROUP LTD s’engage à exercer ses activités dans le strict respect des législations et réglementations en vigueur dans les juridictions où elle opère, en particulier celles relatives :
                <ul className="list-disc ml-5 mt-1">
                  <li>À la lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB/FT) ;</li>
                  <li>À la protection des données personnelles et au respect de la vie privée ;</li>
                  <li>À la transparence fiscale et aux obligations de déclaration financière ;</li>
                  <li>À la supervision des opérations financières transfrontalières et locales.</li>
                </ul>
                Un departement de conformité indépendant est établi au sein du groupe afin d’assurer une veille réglementaire, une mise en œuvre efficace des procédures internes, ainsi qu’une supervision des contrôles.
              </p>
              <p><strong>4. Politique de tolérance zéro contre la corruption</strong><br />
                BBS INVEST INVEST GROUP LTD adopte une politique de tolérance zéro à l'égard de toute forme de corruption, y compris mais sans s'y limiter :
                <ul className="list-disc ml-5 mt-1">
                  <li>La Corruption active ou passive, publique ou privée ;</li>
                  <li>Le trafic d'influence ou les cadeaux non autorisés ;</li>
                  <li>Le blanchiment d'argent issu d'activités illicites ;</li>
                </ul>
                Tous les collaborateurs, prestataires, distributeurs et partenaires doivent respecter cette politique. Toute infraction avérée pourra faire l’objet de mesures disciplinaires, résiliation de contrat, ou signalement aux autorités compétentes. 
              </p>
              <p><strong>5. Dispositifs de contrôle et de prévention</strong><br />
                Pour garantir l’effectivité de son engagement, BBS INVEST GROUP LTD a mis en place les mesures suivantes :
                <ul className="list-disc ml-5 mt-1">
                  <li><strong>Un programme de conformité structuré</strong>, incluant le filtrage des clients, la vérification documentaire (KYC/KYB), la surveillance automatisée des transactions, le filtrage des listes de sanctions (ONU, OFAC, UE, etc.) ;</li>
                  <li><strong>Un plan de formation continue</strong> obligatoire pour tous les employés exposés aux risques de LCB/FT et de corruption </li>
                  <li><strong>Un canal confidentiel de signalement (whistleblowing)</strong> accessible aux employés et tiers, garantissant l’anonymat et la non-représaille ;</li>
                  <li><strong>Des audits internes réguliers </strong>et des évaluations indépendantes de l’efficacité du dispositif de conformité ;</li>
                  <li><strong>Une cartographie des risques </strong>mise à jour annuellement pour prioriser les zones de vigilance et ajuster les mesures de contrôle.</li>
                </ul>
              </p>
              <p><strong>6. Coopération avec les autorités et transparence</strong><br />
              BBS INVEST GROUP LTD :
                <ul className="list-disc ml-5 mt-1">
                  <li>coopère pleinement avec le CANAFE, la GRC, l’ARC, les régulateurs étrangers ou toute autre autorité compétente </li>
                  <li>s’engage à déclarer sans délai toute opération douteuse (DOD / STR) via les canaux réglementaires ;</li>
                  <li>respecte les exigences de conservation des documents, de traçabilité des flux, et de partage transfrontalier d’informations dans le cadre des accords internationaux.</li>
                </ul>
              </p>
              <p><strong>7. Révision, gouvernance et amélioration continue</strong><br />
                Cette politique est :
                <ul className="list-disc ml-5 mt-1">
                  <li><strong>révisée au moins une fois par an,</strong> ou à chaque changement majeur du cadre légal ;</li>
                  <li><strong>diffusée auprès de l’ensemble des collaborateurs,</strong>partenaires et distributeurs de BBS INVEST GROUP LTD ;</li>
                  <li>intégrée à notre <strong>plan de conformité global</strong> et évaluée régulièrement à l’aune des meilleures pratiques du secteur.</li>
                </ul>
                BBS INVEST GROUP LTD s’engage à améliorer en permanence son dispositif de conformité, en
              </p>
              <p><strong>Contact :</strong><br />
                Pour toute question ou signalement relatif à la conformité ou à la présente politique, veuillez contacter :
compliance@bbsmastergroup.com 
 : <a href="mailto:contact@bbsmastergroup.com" className="text-[#AE3D7D] hover:underline ml-1">contact@bbsmastergroup.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConformiteFloatingModal;
