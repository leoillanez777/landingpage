import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Shield } from 'lucide-react';
import { Container, Card, CardContent, TextReveal, ScrollReveal, ISO9001Badge } from '@/components/ui';
import { useLanguage } from '@/hooks';
import type { Benefit } from '@/types';


const iconMap = {
  Clock,
  Users,
  Shield,
};

export const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefitsData: Benefit[] = [
    {
      id: '1',
      title: t('benefits.item1.title'),
      description: t('benefits.item1.description'),
      icon: 'Clock',
      gradient: 'from-blue-500 to-indigo-600',
      metric: t('benefits.item1.metric'),
    },
    {
      id: '2',
      title: t('benefits.item2.title'),
      description: t('benefits.item2.description'),
      icon: 'Users',
      gradient: 'from-green-500 to-emerald-600',
      metric: t('benefits.item2.metric'),
    },
    {
      id: '3',
      title: t('benefits.item3.title'),
      description: t('benefits.item3.description'),
      icon: 'Shield',
      gradient: 'from-purple-500 to-pink-600',
      metric: t('benefits.item3.metric'),
    },
  ];
  return (
    <section className="py-20">
      <Container>
        <ScrollReveal direction="up" delay={0.2} className="text-center mb-16">
          <TextReveal className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('benefits.title1')}
          </TextReveal>
          <TextReveal 
            delay={0.3}
            className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6"
          >
            {t('benefits.title2')}
          </TextReveal>
          <ScrollReveal direction="fade" delay={0.6}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </ScrollReveal>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            
            return (
              <ScrollReveal
                key={benefit.id}
                direction="up"
                delay={index * 0.2 + 0.8}
                className="h-full"
              >
                <Card variant="elevated" hover className="h-full border border-blue-100 cursor-card">
                  <CardContent>
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {benefit.description}
                    </p>
                    <div className="text-sm font-semibold" style={{ color: benefit.gradient.includes('blue') ? '#2563eb' : benefit.gradient.includes('green') ? '#059669' : '#9333ea' }}>
                      {benefit.metric}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ISO 9001 Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <ISO9001Badge 
            size="lg" 
            variant="detailed" 
            className="cursor-card"
          />
        </motion.div>
      </Container>
    </section>
  );
};