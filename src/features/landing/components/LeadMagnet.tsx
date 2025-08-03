import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';
import { Container, Card, CardContent, Button } from '@/components/ui';
import { useLanguage } from '@/hooks';

interface LeadMagnetProps {
  onDownloadClick: () => void;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ onDownloadClick }) => {
  const { t } = useLanguage();

  const features = [
    t('leadMagnet.features.0'),
    t('leadMagnet.features.1'),
    t('leadMagnet.features.2'),
    t('leadMagnet.features.3'),
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card variant="elevated" className="p-12 shadow-2xl">
            <CardContent>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <Download className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              >
                {t('leadMagnet.title')}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 mb-8"
              >
                {t('leadMagnet.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-6 mb-8"
              >
                <h3 className="font-bold text-gray-900 mb-4">{t('leadMagnet.includes')}:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  leftIcon={<Download className="w-6 h-6" />}
                  onClick={onDownloadClick}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-xl transform hover:scale-105 text-lg px-10 py-4"
                >
                  {t('leadMagnet.ctaButton')}
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  {t('leadMagnet.guarantees')}
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};