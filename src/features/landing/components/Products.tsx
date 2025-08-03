import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Bed, 
  Users, 
  Building2, 
  CreditCard, 
  Shield, 
  CheckSquare, 
  Pill, 
  UserCheck, 
  Calculator, 
  Building,
  Bot,
  MessageCircle,
  Smartphone,
  Hotel,
  Zap
} from 'lucide-react';
import { GlassCard } from '@/components/ui/Glass';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { HoverReveal } from '@/components/ui/HoverReveal';
import { useLanguage } from '@/hooks';

interface Product {
  id: number;
  name: string;
  categoryKey: string;
  category: string;
  descriptionKey: string;
  description: string;
  fullDescriptionKey: string;
  fullDescription: string;
  icon: React.ReactNode;
  featuresKey: string;
  benefitsKey: string;
  benefits: string[];
  targetAudienceKey: string;
  targetAudience: string;
  color: string;
  popular?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'AI MedAssist',
    categoryKey: 'aiCategory',
    category: 'Inteligencia Artificial',
    descriptionKey: 'aiMedAssist',
    description: 'Asistente médico con IA conversacional para atención 24/7',
    fullDescriptionKey: 'aiMedAssist',
    fullDescription: 'Revolucionario asistente de inteligencia artificial que brinda soporte médico conversacional, responde consultas, programa citas y asiste en diagnósticos preliminares las 24 horas.',
    icon: <Bot className="w-8 h-8" />,
    featuresKey: 'aiMedAssist',
    benefitsKey: 'aiMedAssist',
    benefits: [
      'Reduce carga de trabajo médico en 60%',
      'Atención 24/7 sin interrupciones',
      'Mejora accesibilidad para pacientes',
      'Acelera procesos de diagnóstico'
    ],
    targetAudienceKey: 'aiMedAssist',
    targetAudience: 'Hospitales, Clínicas, Telemedicina',
    color: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    id: 2,
    name: 'WhatsApp MedBot',
    categoryKey: 'aiCategory',
    category: 'Inteligencia Artificial',
    descriptionKey: 'whatsappMedBot',
    description: 'Asistente médico inteligente integrado con WhatsApp',
    fullDescriptionKey: 'whatsappMedBot',
    fullDescription: 'Asistente de IA que opera directamente en WhatsApp, permitiendo consultas médicas, recordatorios de medicamentos y seguimiento de tratamientos a través de la app más usada.',
    icon: <MessageCircle className="w-8 h-8" />,
    featuresKey: 'whatsappMedBot',
    benefitsKey: 'whatsappMedBot',
    benefits: [
      'Aumenta adherencia a tratamientos',
      'Reduce consultas presenciales innecesarias',
      'Mejora comunicación médico-paciente',
      'Acceso inmediato desde cualquier lugar'
    ],
    targetAudienceKey: 'whatsappMedBot',
    targetAudience: 'Consultorios, Médicos Independientes, Clínicas',
    color: 'from-green-500 to-emerald-500',
    popular: true
  },
  {
    id: 3,
    name: 'TurnoBot WhatsApp',
    categoryKey: 'aiCategory',
    category: 'Inteligencia Artificial',
    descriptionKey: 'turnoBotWhatsApp',
    description: 'Reserva de turnos por WhatsApp en lenguaje natural',
    fullDescriptionKey: 'turnoBotWhatsApp',
    fullDescription: 'Sistema inteligente que permite a los pacientes reservar turnos médicos conversando naturalmente por WhatsApp, sin formularios ni aplicaciones adicionales.',
    icon: <Smartphone className="w-8 h-8" />,
    featuresKey: 'turnoBotWhatsApp',
    benefitsKey: 'turnoBotWhatsApp',
    benefits: [
      'Elimina barreras tecnológicas',
      'Reserva de turnos en segundos',
      'Reduce abandonos del proceso',
      'Mayor satisfacción del paciente'
    ],
    targetAudienceKey: 'turnoBotWhatsApp',
    targetAudience: 'Centros Médicos, Consultorios, Clínicas',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 4,
    name: 'TurMedica',
    categoryKey: 'appointmentsCategory',
    category: 'Gestión de Turnos',
    descriptionKey: 'turMedica',
    description: 'Sistema inteligente de reserva de citas médicas online',
    fullDescriptionKey: 'turMedica',
    fullDescription: 'Plataforma completa que revoluciona la gestión de turnos médicos, permitiendo a los pacientes reservar citas online 24/7 mientras optimiza la agenda de los profesionales.',
    icon: <Calendar className="w-8 h-8" />,
    featuresKey: 'turMedica',
    benefitsKey: 'turMedica',
    benefits: [
      'Reduce llamadas telefónicas en 80%',
      'Aumenta ocupación de agenda',
      'Mejora satisfacción del paciente',
      'Elimina turnos perdidos'
    ],
    targetAudienceKey: 'turMedica',
    targetAudience: 'Consultorios, Clínicas, Centros Médicos',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 5,
    name: 'InRoom',
    category: 'Hotelería',
    description: 'Software moderno para gestión de hoteles y moteles',
    fullDescription: 'Plataforma integral diseñada específicamente para la industria hotelera moderna, optimizando la gestión de habitaciones, huéspedes y servicios con tecnología de vanguardia.',
    icon: <Hotel className="w-8 h-8" />,
    featuresKey: 'inRoom',
    benefits: [
      'Reduce tiempo de check-in en 70%',
      'Optimiza ocupación hotelera',
      'Mejora experiencia del huésped',
      'Automatiza procesos operativos'
    ],
    targetAudience: 'Hoteles, Moteles, Apart Hoteles, Hostales',
    color: 'from-orange-500 to-red-500',
    popular: true
  },
  {
    id: 6,
    name: 'LumenAI',
    category: 'Servicios Públicos',
    description: 'Gestión inteligente de energía con IA para empresas eléctricas',
    fullDescription: 'Sistema integral con IA que revoluciona la gestión de servicios eléctricos, automatizando facturación, reclamos y consultas mediante asistente inteligente con lenguaje natural.',
    icon: <Zap className="w-8 h-8" />,
    featuresKey: 'lumenAI',
    benefits: [
      'Reduce reclamos manuales en 85%',
      'Atención automatizada 24/7',
      'Mejora satisfacción del cliente',
      'Optimiza gestión de cobranzas'
    ],
    targetAudience: 'Empresas Eléctricas, Cooperativas, Distribuidoras',
    color: 'from-yellow-500 to-amber-500',
    popular: true
  },
  {
    id: 7,
    name: 'MediFlow',
    category: 'Gestión Hospitalaria',
    description: 'Sistema avanzado de gestión de pacientes hospitalizados',
    fullDescription: 'Solución integral para el control y seguimiento de pacientes internados, optimizando la ocupación de camas y mejorando la calidad de atención.',
    icon: <Bed className="w-8 h-8" />,
    featuresKey: 'mediFlow',
    benefits: [
      'Optimiza ocupación hospitalaria',
      'Reduce tiempos de espera',
      'Mejora flujo de pacientes',
      'Aumenta eficiencia operativa'
    ],
    targetAudience: 'Hospitales, Sanatorios, Clínicas',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 8,
    name: 'Aclimed',
    category: 'Gestión Integral',
    description: 'Plataforma completa de administración médica',
    fullDescription: 'Sistema integral que centraliza toda la gestión administrativa médica, desde turnos hasta tratamientos, en una sola plataforma intuitiva.',
    icon: <Users className="w-8 h-8" />,
    featuresKey: 'aclimed',
    benefits: [
      'Centraliza toda la información',
      'Reduce errores administrativos',
      'Mejora control de ingresos',
      'Facilita toma de decisiones'
    ],
    targetAudience: 'Centros Médicos, Clínicas, Obras Sociales',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 9,
    name: 'Zismed',
    category: 'Hospitalización',
    description: 'Optimización de recursos hospitalarios públicos',
    fullDescription: 'Especializado en la gestión eficiente de recursos en hospitales públicos, mejorando la asignación de camas y el seguimiento de pacientes.',
    icon: <Building2 className="w-8 h-8" />,
    featuresKey: 'zismed',
    benefits: [
      'Mejora atención en hospitales públicos',
      'Optimiza recursos limitados',
      'Reduce tiempos de espera',
      'Facilita reporting gubernamental'
    ],
    targetAudience: 'Hospitales Públicos, Ministerios de Salud',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 10,
    name: 'MedicPay',
    category: 'Facturación',
    description: 'Sistema integral de facturación y cobranza médica',
    fullDescription: 'Automatiza todo el proceso de facturación médica, desde la prestación hasta el cobro, integrándose con obras sociales y prepagas.',
    icon: <CreditCard className="w-8 h-8" />,
    featuresKey: 'medicPay',
    benefits: [
      'Acelera proceso de cobranza',
      'Reduce errores de facturación',
      'Mejora flujo de caja',
      'Automatiza reconciliaciones'
    ],
    targetAudience: 'Clínicas, Consultorios, Centros Médicos',
    color: 'from-green-500 to-emerald-500',
    popular: true
  },
  {
    id: 11,
    name: 'FinFlow',
    category: 'Administración',
    description: 'Gestión administrativa para prestadores de salud',
    fullDescription: 'Plataforma especializada en la administración de servicios de salud, optimizando la gestión de afiliados y prestaciones.',
    icon: <Shield className="w-8 h-8" />,
    featuresKey: 'finFlow',
    benefits: [
      'Optimiza gestión de afiliados',
      'Controla costos de prestaciones',
      'Mejora experiencia del usuario',
      'Facilita cumplimiento normativo'
    ],
    targetAudience: 'Obras Sociales, Prepagas, Mutuales',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 12,
    name: 'Validtek',
    category: 'Validación',
    description: 'Sistema de validación y autorización de prácticas médicas',
    fullDescription: 'Herramienta especializada en la verificación y autorización de prácticas médicas, asegurando cumplimiento y calidad.',
    icon: <CheckSquare className="w-8 h-8" />,
    featuresKey: 'validtek',
    benefits: [
      'Asegura calidad de servicios',
      'Reduce riesgos de cumplimiento',
      'Automatiza autorizaciones',
      'Mejora control de calidad'
    ],
    targetAudience: 'Reguladores, Obras Sociales, Instituciones',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 13,
    name: 'Farmatek',
    category: 'Farmacia',
    description: 'Validación de recetas con IVAF y Colmed',
    fullDescription: 'Sistema especializado en la validación de prescripciones médicas, integrándose con IVAF y Colegio Médico para garantizar autenticidad.',
    icon: <Pill className="w-8 h-8" />,
    featuresKey: 'farmatek',
    benefits: [
      'Previene fraudes de recetas',
      'Asegura prescripciones válidas',
      'Mejora seguridad del paciente',
      'Cumple normativas farmacéuticas'
    ],
    targetAudience: 'Farmacias, Droguerías, Cadenas Farmacéuticas',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 14,
    name: 'DocAlliance',
    category: 'Profesionales',
    description: 'Gestión para kinesiólogos y fonoaudiólogos',
    fullDescription: 'Plataforma especializada en la administración de profesionales de la salud, optimizando la gestión de tratamientos y registros.',
    icon: <UserCheck className="w-8 h-8" />,
    featuresKey: 'docAlliance',
    benefits: [
      'Optimiza práctica profesional',
      'Mejora seguimiento de tratamientos',
      'Facilita facturación',
      'Centraliza información clínica'
    ],
    targetAudience: 'Kinesiólogos, Fonoaudiólogos, Terapeutas',
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 15,
    name: 'BalanceWeb',
    category: 'Contabilidad',
    description: 'Sistema automatizado de contabilidad empresarial',
    fullDescription: 'Solución contable integral que automatiza procesos financieros y genera reportes de cumplimiento para empresas del sector salud.',
    icon: <Calculator className="w-8 h-8" />,
    featuresKey: 'balanceWeb',
    benefits: [
      'Automatiza procesos contables',
      'Reduce errores financieros',
      'Mejora control de costos',
      'Facilita cumplimiento fiscal'
    ],
    targetAudience: 'Empresas de Salud, Clínicas, Centros Médicos',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 16,
    name: 'GremioCash',
    category: 'Sindical',
    description: 'Administración de servicios para afiliados UPCN',
    fullDescription: 'Sistema especializado en la gestión de beneficios y servicios para afiliados sindicales, optimizando la administración gremial.',
    icon: <Building className="w-8 h-8" />,
    featuresKey: 'gremioCash',
    benefits: [
      'Optimiza gestión sindical',
      'Mejora servicios a afiliados',
      'Centraliza información gremial',
      'Facilita control de beneficios'
    ],
    targetAudience: 'UPCN, Sindicatos, Organizaciones Gremiales',
    color: 'from-slate-500 to-gray-500'
  }
];


export const Products: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t('products.categories.all'));
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Reset selected category when language changes
  useEffect(() => {
    setSelectedCategory(t('products.categories.all'));
  }, [language, t]);

  const categories = [
    t('products.categories.all'),
    t('products.categories.ai'),
    t('products.categories.appointments'),
    t('products.categories.hospital'),
    t('products.categories.management'),
    t('products.categories.hotel'),
    t('products.categories.utilities'),
    t('products.categories.billing'),
    t('products.categories.validation'),
    t('products.categories.professionals')
  ];

  const filteredProducts = selectedCategory === t('products.categories.all') 
    ? products 
    : products.filter(product => {
        // Map English category names back to check against product.category
        const categoryMap: Record<string, string> = {
          [t('products.categories.ai')]: 'Inteligencia Artificial',
          [t('products.categories.appointments')]: 'Gestión de Turnos',
          [t('products.categories.hospital')]: 'Gestión Hospitalaria',
          [t('products.categories.management')]: 'Gestión Integral',
          [t('products.categories.hotel')]: 'Hotelería',
          [t('products.categories.utilities')]: 'Servicios Públicos',
          [t('products.categories.billing')]: 'Facturación',
          [t('products.categories.validation')]: 'Validación',
          [t('products.categories.professionals')]: 'Profesionales'
        };
        return product.category === categoryMap[selectedCategory];
      });


  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            {t('products.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('products.title1')}
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('products.title2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white/90 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {(filteredProducts.length > 0 ? filteredProducts : products).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <HoverReveal
                className="h-full"
                revealContent={
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-white font-bold text-lg">Click to Explore</div>
                  </div>
                }
              >
                <GlassCard 
                  className="h-full cursor-pointer group transition-all duration-300 p-6"
                  onClick={() => setSelectedProduct(product)}
                  data-cursor="card"
                >
                <div className="relative">
                  {product.popular && (
                    <Badge 
                      variant="primary" 
                      className="absolute -top-2 -right-2 z-10 text-xs px-2 py-1"
                    >
                      {t('products.popular')}
                    </Badge>
                  )}
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-6 h-6">
                      {React.cloneElement(product.icon as React.ReactElement, { className: "w-6 h-6" })}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <Badge variant="outline" className="text-xs mb-3 px-2 py-0.5">
                      {t(`products.productCategories.${product.categoryKey}`) || product.category}
                    </Badge>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {t(`products.productDescriptions.${product.descriptionKey}`) || product.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">{t('products.features')}</h4>
                    <ul className="space-y-1">
                      {Array.from({ length: Math.min(3, 6) }, (_, idx) => {
                        const featureKey = `products.productFeatures.${product.featuresKey}.${idx}`;
                        const feature = t(featureKey);
                        return feature !== featureKey ? (
                          <li key={idx} className="text-xs text-gray-600 flex items-start">
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${product.color} mr-2 mt-1.5 flex-shrink-0`} />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ) : null;
                      }).filter(Boolean).slice(0, 3)}
                      {Array.from({ length: 6 }, (_, idx) => {
                        const featureKey = `products.productFeatures.${product.featuresKey}.${idx}`;
                        return t(featureKey) !== featureKey;
                      }).filter(Boolean).length > 3 && (
                        <li className="text-xs text-gray-500 font-medium">
                          +{Array.from({ length: 6 }, (_, idx) => {
                            const featureKey = `products.productFeatures.${product.featuresKey}.${idx}`;
                            return t(featureKey) !== featureKey;
                          }).filter(Boolean).length - 3} {t('products.moreFeatures')}
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary-50 text-sm py-2"
                  >
                    {t('products.viewDetails')}
                  </Button>
                </div>
                </GlassCard>
              </HoverReveal>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <GlassCard className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('products.needCustom')}
              </h3>
              <p className="text-gray-600 mb-8">
                {t('products.customText')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  {t('products.requestCustomDemo')}
                </Button>
                <Button variant="outline" size="lg">
                  {t('products.checkPrices')}
                </Button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </Container>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedProduct.color} flex items-center justify-center text-white`}>
                  {selectedProduct.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedProduct.name}
                  </h2>
                  <Badge variant="outline" className="mt-1">
                    {t(`products.productCategories.${selectedProduct.categoryKey}`) || selectedProduct.category}
                  </Badge>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('products.description')}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`products.productFullDescriptions.${selectedProduct.fullDescriptionKey}`) || selectedProduct.fullDescription}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('products.targetAudience')}</h3>
                <p className="text-gray-600 mb-6">
                  {t(`products.productTargetAudience.${selectedProduct.targetAudienceKey}`) || selectedProduct.targetAudience}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('products.mainFeatures')}</h3>
                <ul className="space-y-3 mb-6">
                  {Array.from({ length: 6 }, (_, idx) => {
                    const featureKey = `products.productFeatures.${selectedProduct.featuresKey}.${idx}`;
                    const feature = t(featureKey);
                    return feature !== featureKey ? (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProduct.color} mt-2 flex-shrink-0`} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ) : null;
                  }).filter(Boolean)}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('products.keyBenefits')}</h3>
                <ul className="space-y-3">
                  {Array.from({ length: 4 }, (_, idx) => {
                    const benefitKey = `products.productBenefits.${selectedProduct.benefitsKey}.${idx}`;
                    const benefit = t(benefitKey);
                    return benefit !== benefitKey ? (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckSquare className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ) : null;
                  }).filter(Boolean)}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
              <Button className="flex-1">
                {t('products.requestDemo')}
              </Button>
              <Button variant="outline" className="flex-1">
                {t('products.moreInfo')}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};