import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container, ISO9001Badge } from '@/components/ui';
import { useLanguage } from '@/hooks';
import { logo } from '@/assets';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-20 h-12 mr-3 rounded-lg overflow-hidden">
                <img
                  src={logo}
                  alt="Excelencia Digital Logo"
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>

            <div className="mb-6">
              <ISO9001Badge
                size="sm"
                variant="minimal"
                showText={false}
                className="inline-block"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+54 264 447-2515</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">
                  info@excelenciadigital.net
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">San Juan, Argentina</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6">{t('footer.links')}</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.linkItems.services')}
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.linkItems.testimonials')}
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.linkItems.qualityPolicy')}
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors font-medium"
              >
                {t('footer.linkItems.isoCertification')}
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.linkItems.support')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Excelencia Digital. {t('footer.copyright')}
          </p>
        </div>
      </Container>
    </footer>
  );
};

