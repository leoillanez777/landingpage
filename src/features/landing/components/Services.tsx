import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { Container, Card, CardContent, Button, GlassPanel } from '@/components/ui';
import { useLanguage } from '@/hooks';
import type { Service } from '@/types';


const iconMap = {
  Users,
  Shield,
  Clock,
};

interface ServicesProps {
  onServiceClick: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const { t } = useLanguage();

  const servicesData: Service[] = [
    {
      id: '1',
      title: t('services.item1.title'),
      description: t('services.item1.description'),
      icon: 'Users',
      features: [
        t('services.item1.features.0'),
        t('services.item1.features.1'),
        t('services.item1.features.2'),
        t('services.item1.features.3'),
      ],
      ctaText: t('services.item1.ctaText'),
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      id: '2',
      title: t('services.item2.title'),
      description: t('services.item2.description'),
      icon: 'Shield',
      features: [
        t('services.item2.features.0'),
        t('services.item2.features.1'),
        t('services.item2.features.2'),
        t('services.item2.features.3'),
      ],
      ctaText: t('services.item2.ctaText'),
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      id: '3',
      title: t('services.item3.title'),
      description: t('services.item3.description'),
      icon: 'Clock',
      features: [
        t('services.item3.features.0'),
        t('services.item3.features.1'),
        t('services.item3.features.2'),
        t('services.item3.features.3'),
      ],
      ctaText: t('services.item3.ctaText'),
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section id="servicios" className="relative py-20 overflow-hidden">
      {/* Background glass panels */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <GlassPanel className="p-4 inline-block">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-semibold text-gray-700 text-shadow-glass">
                  {t('services.badge')}
                </span>
              </div>
            </GlassPanel>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 text-shadow-glass">
            {t('services.title1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {t('services.title2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-shadow-glass">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="relative z-10 grid lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group"
              >
                <Card 
                  variant="elevated" 
                  hover 
                  glassIntensity="medium"
                  className="h-full relative overflow-hidden border border-white/30 shadow-glass"
                >
                  {/* Gradient overlay based on service type */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-5 pointer-events-none ${service.gradient}`} />
                  
                  <CardContent className="relative z-10">
                    <div className="text-center mb-6">
                      <motion.div 
                        className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Glass shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
                        <IconComponent className="relative z-10 w-8 h-8 text-white drop-shadow-lg" />
                        
                        {/* Floating particles */}
                        <motion.div
                          className="absolute w-1 h-1 bg-white/60 rounded-full"
                          style={{ top: '20%', right: '20%' }}
                          animate={{
                            y: [0, -4, 0],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 text-shadow-glass"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>
                    
                    <motion.p
                      className="text-gray-600 text-center mb-6 text-shadow-glass"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.5 + index * 0.1 + featureIndex * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          </motion.div>
                          <span className="text-shadow-glass">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Button
                        variant={service.gradient.includes('blue') ? 'primary' : 
                                service.gradient.includes('green') ? 'secondary' : 'primary'}
                        fullWidth
                        onClick={() => onServiceClick(service.id)}
                        className={`shadow-glass-sm ${service.gradient.includes('purple') ? 'bg-gradient-to-r from-purple-600/80 to-pink-600/80' : ''}`}
                      >
                        {service.ctaText}
                      </Button>
                    </motion.div>
                  </CardContent>

                  {/* Hover shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ 
                      x: '100%', 
                      opacity: [0, 1, 0],
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};