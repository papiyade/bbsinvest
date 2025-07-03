import React from 'react';
import { Globe, Mail, MapPin, Shield } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const countries = ['Sénégal', 'Côte d\'Ivoire', 'Guinée Conakry', 'Mali', 'Cameroun', 'Sierra Leone'];

  return (
    <footer className=" bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-2 py-2">
                <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
              Solution digitale de paiements internationaux pour les entreprises d'Afrique de l'Ouest. 
              Payez vos fournisseurs à l'étranger en toute sécurité et conformité avec la réglementation BCEAO.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-5 h-5 text-[#E46E2F]" />
                <span className="text-sm">Conforme BCEAO</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="w-5 h-5 text-[#E46E2F]" />
                <span className="text-sm">6 Pays couverts</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Paiements internationaux</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Virements SWIFT</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Change de devises</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Accompagnement</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#E46E2F] mt-0.5" />
                <div>
                  <a href="mailto:contact@bbsmastergroup.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@bbsmastergroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E46E2F] mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Présence locale dans</p>
                  <p className="text-gray-300 text-sm">6 pays d'Afrique de l'Ouest</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Pays couverts</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {countries.map((country) => (
                <span key={country} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BBS Invest Group. Tous droits réservés. | Conforme à la réglementation BCEAO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;