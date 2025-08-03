import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container, Card, CardContent } from '@/components/ui';
import { useLanguage } from '@/hooks';
import type { FAQ as FAQType } from '@/types';


interface FAQItemProps {
  faq: FAQType;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <Card className="border border-blue-100">
      <CardContent className="p-0">
        <button
          onClick={onToggle}
          className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-bold text-gray-900 pr-4">
            {faq.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqData: FAQType[] = [
    {
      id: '1',
      question: t('faq.item1.question'),
      answer: t('faq.item1.answer'),
    },
    {
      id: '2',
      question: t('faq.item2.question'),
      answer: t('faq.item2.answer'),
    },
    {
      id: '3',
      question: t('faq.item3.question'),
      answer: t('faq.item3.answer'),
    },
    {
      id: '4',
      question: t('faq.item4.question'),
      answer: t('faq.item4.answer'),
    },
    {
      id: '5',
      question: t('faq.item5.question'),
      answer: t('faq.item5.answer'),
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-20">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQItem
                faq={faq}
                isOpen={openItem === faq.id}
                onToggle={() => toggleItem(faq.id)}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};