import React from 'react';
import { motion } from 'framer-motion';
import { Play, Phone } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { useLanguage } from '@/hooks';

interface FinalCTAProps {
  onDemoClick: () => void;
  onCallClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onDemoClick, onCallClick }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            {t('finalCTA.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('finalCTA.subtitle')}
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              size="lg"
              leftIcon={<Play className="w-6 h-6" />}
              onClick={onDemoClick}
              className="bg-white text-blue-600 hover:shadow-xl transform hover:scale-105"
            >
              {t('finalCTA.demoButton')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<Phone className="w-6 h-6" />}
              onClick={onCallClick}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              {t('finalCTA.callButton')}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-100 text-sm"
          >
            {t('finalCTA.guarantees')}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};