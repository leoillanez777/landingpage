import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Container, Card, CardContent } from '@/components/ui';
import { useLanguage } from '@/hooks';
import type { Testimonial } from '@/types';


const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-green-500 to-emerald-600',
    'from-purple-500 to-pink-600',
  ];

  const testimonialsData: Testimonial[] = [
    {
      id: '1',
      name: t('testimonials.item1.name'),
      role: t('testimonials.item1.role'),
      company: t('testimonials.item1.company'),
      avatar: 'DM',
      rating: 5,
      content: t('testimonials.item1.content'),
    },
    {
      id: '2',
      name: t('testimonials.item2.name'),
      role: t('testimonials.item2.role'),
      company: t('testimonials.item2.company'),
      avatar: 'JL',
      rating: 5,
      content: t('testimonials.item2.content'),
    },
    {
      id: '3',
      name: t('testimonials.item3.name'),
      role: t('testimonials.item3.role'),
      company: t('testimonials.item3.company'),
      avatar: 'AS',
      rating: 5,
      content: t('testimonials.item3.content'),
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {t('testimonials.title2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="h-full">
                <CardContent>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role} - {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <StarRating rating={testimonial.rating} />
                  
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};