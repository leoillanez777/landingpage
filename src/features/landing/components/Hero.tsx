import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, CheckCircle, Award, Sparkles } from 'lucide-react';
import { Container, Button, Badge, GlassPanel, GlassCard, MagneticButton } from '@/components/ui';
import { useLanguage } from '@/hooks';
import { backgroundImage } from '@/assets';

interface HeroProps {
  onDemoClick: () => void;
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDemoClick, onDownloadClick }) => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-cyan-50/80"></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge
                variant="info"
                icon={<Award className="w-4 h-4" />}
                className="inline-flex bg-white/20 backdrop-blur-lg border border-white/30 shadow-glass-sm"
              >
                <span className="text-shadow-glass">{t('hero.badge')}</span>
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-shadow-glass"
            >
              {t('hero.title1')}{' '}
              <motion.span 
                className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {t('hero.title2')}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </motion.span>{' '}
              {t('hero.title3')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 leading-relaxed text-shadow-glass"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                onClick={onDemoClick}
                strength={0.4}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  {t('hero.cta1')}
                </div>
              </MagneticButton>
              <MagneticButton
                onClick={onDownloadClick}
                strength={0.3}
                className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-gray-900 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  {t('hero.cta2')}
                </div>
              </MagneticButton>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
            >
              {[
                t('hero.feature1'),
                t('hero.feature2'),
                t('hero.feature3')
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-2 rounded-lg bg-white/20 backdrop-blur-lg border border-white/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-shadow-glass">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Glass panel for the dashboard mockup */}
            <GlassPanel className="p-8 shadow-glass-lg">
              <div className="relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-cyan-500/20 rounded-xl"></div>
                
                <GlassCard className="relative z-10 p-6 space-y-4 bg-white/30">
                  <div className="flex items-center justify-between">
                    <motion.h3 
                      className="font-semibold text-gray-900 text-shadow-glass"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      {t('hero.dashboard')}
                    </motion.h3>
                    <div className="flex space-x-1">
                      {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((color, i) => (
                        <motion.div 
                          key={i}
                          className={`w-3 h-3 ${color} rounded-full shadow-sm`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.1 + i * 0.1, type: "spring" }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: t('hero.appointments'), value: '47', color: 'green', delay: 1.2 },
                      { label: t('hero.patients'), value: '12', color: 'blue', delay: 1.4 },
                      { label: t('hero.efficiency'), value: '94%', color: 'purple', delay: 1.6 }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: '100%', opacity: 1 }}
                        transition={{ duration: 0.8, delay: stat.delay }}
                        className={`flex items-center justify-between p-3 bg-white/40 backdrop-blur-lg rounded-lg border border-white/30 shadow-glass-sm`}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgba(255, 255, 255, 0.5)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="text-sm text-gray-700 text-shadow-glass">{stat.label}</span>
                        <motion.span 
                          className={`font-bold text-${stat.color}-600 text-shadow-glass`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: stat.delay + 0.2, type: "spring" }}
                        >
                          {stat.value}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-sm opacity-60"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-sm opacity-60"
                  animate={{ 
                    y: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};