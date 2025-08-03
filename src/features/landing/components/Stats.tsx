import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/ui';
import { formatNumber } from '@/lib/utils';
import { useLanguage } from '@/hooks';
import type { Stat } from '@/types';


const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev >= value) {
            clearInterval(timer);
            return value;
          }
          return prev + Math.ceil(value / 50);
        });
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {formatNumber(Math.min(count, value))}{suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const { t } = useLanguage();

  const statsData: Stat[] = [
    { id: '1', value: 500, label: t('stats.centers'), suffix: '+' },
    { id: '2', value: 40, label: t('stats.years'), suffix: '+' },
    { id: '3', value: 70, label: t('stats.reduction'), suffix: '%' },
    { id: '4', value: 24, label: t('stats.support'), suffix: '/7' },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};