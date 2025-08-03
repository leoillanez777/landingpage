import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle, Star, Users, Clock, Shield, Download, Play, Phone, Mail, MapPin, Award } from 'lucide-react';

const ExcelenciaDigitalLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Anime.js animations
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.onload = () => {
      // Hero animation
      window.anime({
        targets: '.hero-content',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 300
      });

      // Benefits cards animation
      window.anime({
        targets: '.benefit-card',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart',
        delay: window.anime.stagger(200, {start: 600})
      });

      // Services animation
      window.anime({
        targets: '.service-card',
        scale: [0.95, 1],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuart',
        delay: window.anime.stagger(150, {start: 1000})
      });

      // Testimonials animation
      window.anime({
        targets: '.testimonial-card',
        translateX: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart',
        delay: window.anime.stagger(200, {start: 1200})
      });

      // Stats animation
      window.anime({
        targets: '.stat-number',
        innerHTML: [0, (el) => el.getAttribute('data-value')],
        duration: 2000,
        easing: 'easeOutQuart',
        delay: 1500,
        round: 1
      });
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleCTAClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg mr-3"></div>
                <span className="text-xl font-bold text-gray-900">Excelencia Digital</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#servicios" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Servicios</a>
                <a href="#testimonios" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonios</a>
                <button 
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Demo Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content opacity-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                28 años transformando la salud digital en Argentina
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Reduce <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">70% el Tiempo</span> Administrativo en tu Centro Médico
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Software médico integral que mejora la atención al paciente y optimiza la gestión. 
                Más de 500 centros médicos ya confían en nosotros.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo en Vivo
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descarga Caso de Éxito
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Setup en 24 horas
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Soporte 24/7
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Sin permanencia
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Panel de Control</h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700">Pacientes Hoy</span>
                      <span className="font-bold text-green-600">47</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">Citas Pendientes</span>
                      <span className="font-bold text-blue-600">12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-700">Eficiencia</span>
                      <span className="font-bold text-purple-600">94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number text-4xl font-bold text-white mb-2" data-value="500">0</div>
              <div className="text-blue-100">Centros Médicos</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold text-white mb-2" data-value="28">0</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold text-white mb-2" data-value="70">0</div>
              <div className="text-blue-100">% Reducción Tiempo</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold text-white mb-2" data-value="24">0</div>
              <div className="text-blue-100">Horas Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excelencia Digital?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformamos la gestión médica con tecnología probada que genera resultados inmediatos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="benefit-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ahorro de Tiempo Real</h3>
              <p className="text-gray-600 mb-6">
                Reduce hasta 70% el tiempo administrativo. Los médicos pueden dedicar más tiempo a lo que realmente importa: sus pacientes.
              </p>
              <div className="text-sm text-blue-600 font-semibold">
                Casos reales: 3-4 horas diarias ahorradas
              </div>
            </div>

            <div className="benefit-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mejor Experiencia del Paciente</h3>
              <p className="text-gray-600 mb-6">
                Citas online, recordatorios automáticos y acceso inmediato al historial médico. Tus pacientes notarán la diferencia.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                95% de satisfacción del paciente
              </div>
            </div>

            <div className="benefit-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seguridad Garantizada</h3>
              <p className="text-gray-600 mb-6">
                Cumplimos con todas las normativas de salud argentinas. Tus datos y los de tus pacientes están 100% protegidos.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Certificación ANMAT completa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Download className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Descarga GRATIS: "Guía Completa para Digitalizar tu Centro Médico"
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Descubre los 7 pasos exactos que han usado +500 centros médicos para aumentar su eficiencia y mejorar la atención al paciente.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Incluye:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Checklist de implementación paso a paso</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Casos de éxito reales con métricas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Template de ROI personalizable</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Lista de requisitos técnicos</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <Download className="w-6 h-6 mr-3" />
              Descargar Guía Gratuita
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              ✓ Sin spam ✓ Sin vendedores insistentes ✓ Descarga inmediata
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Soluciones</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para modernizar tu centro médico en una sola plataforma
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="service-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Gestión de Pacientes</h3>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Historiales clínicos digitales
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Agenda de turnos inteligente
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Recordatorios automáticos
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Portal del paciente
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Conocer Más
              </button>
            </div>

            <div className="service-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Facturación Automática</h3>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Integración con obras sociales
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Autorizaciones online
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Reportes financieros
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Control de cobranzas
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Ver Demo
              </button>
            </div>

            <div className="service-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Soporte 24/7</h3>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Técnicos especializados
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Mantenimiento preventivo
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Actualizaciones automáticas
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Capacitación continua
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Contactar Soporte
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">clientes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Más de 500 centros médicos han transformado su gestión con nosotros
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="testimonial-card opacity-0 bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">DM</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. María González</h4>
                  <p className="text-gray-600 text-sm">Directora - Clínica San Rafael</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Desde que implementamos Excelencia Digital, reducimos 4 horas diarias de trabajo administrativo. Nuestros pacientes están más satisfechos y nosotros podemos enfocarnos en la medicina."
              </p>
            </div>

            <div className="testimonial-card opacity-0 bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JL</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Juan López</h4>
                  <p className="text-gray-600 text-sm">Cardiólogo - Centro Médico Integral</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "La integración con obras sociales es perfecta. Ya no perdemos tiempo con autorizaciones manuales. El sistema se paga solo con el ahorro de tiempo."
              </p>
            </div>

            <div className="testimonial-card opacity-0 bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ana Sánchez</h4>
                  <p className="text-gray-600 text-sm">Administradora - Hospital Regional</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "El soporte 24/7 es real. Cada vez que necesitamos ayuda, responden inmediatamente. La implementación fue súper rápida y sin complicaciones."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes sobre nuestra solución
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Qué pasa con nuestros datos actuales durante la migración?",
                a: "Garantizamos migración 100% segura de todos tus datos. Nuestro equipo se encarga de transferir historiales, pacientes y citas sin pérdida de información. El proceso incluye verificación completa y backup de seguridad."
              },
              {
                q: "¿Cuánto tiempo toma la implementación completa?",
                a: "La implementación básica se completa en 24-48 horas. La capacitación del equipo toma 1 semana adicional. En total, en 2 semanas tu centro estará funcionando al 100% con el nuevo sistema."
              },
              {
                q: "¿El sistema funciona sin internet?",
                a: "Sí, nuestro sistema tiene modo offline para consultas y cargas básicas. Cuando se restaura la conexión, todos los datos se sincronizan automáticamente. Nunca pierdes información."
              },
              {
                q: "¿Incluye integración con obras sociales argentinas?",
                a: "Completamente. Tenemos integración directa con +95% de las obras sociales del país. Autorizaciones automáticas, facturación electrónica y validación de afiliados en tiempo real."
              },
              {
                q: "¿Qué soporte técnico incluye?",
                a: "Soporte 24/7/365 con técnicos especializados en salud. Incluye: instalación, capacitación, mantenimiento, actualizaciones y resolución de incidencias. Sin costos adicionales."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tu centro médico?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a los +500 centros médicos que ya optimizaron su gestión con nosotros
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleCTAClick}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Play className="w-6 h-6 mr-3" />
              Ver Demo Personalizada
            </button>
            <button 
              onClick={handleCTAClick}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              Llamar Ahora
            </button>
          </div>

          <p className="text-blue-100 text-sm">
            ⚡ Configuración en 24 horas • 🛡️ Datos 100% seguros • 🎯 Sin permanencia mínima
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg mr-3"></div>
                <span className="text-xl font-bold">Excelencia Digital</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                28 años transformando la gestión médica en Argentina. Software confiable para centros que buscan excelencia.
              </p>
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
              <h3 className="font-bold mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">+54 11 4000-0000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">info@excelenciadigital.net</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6">Enlaces</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Servicios</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Testimonios</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Política de Calidad</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Soporte 24/7</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Excelencia Digital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🎯 Acceso Exclusivo
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Completa el formulario y recibe tu demo personalizada + guía gratuita en menos de 2 minutos
            </p>
            
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Nombre completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="email" 
                placeholder="Email profesional"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                type="tel" 
                placeholder="Teléfono"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Tipo de centro médico</option>
                <option>Clínica privada</option>
                <option>Hospital</option>
                <option>Centro médico</option>
                <option>Consultorio</option>
                <option>Otro</option>
              </select>
              
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  alert('¡Gracias! Te contactaremos en las próximas 2 horas para coordinar tu demo personalizada.');
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
              >
                🚀 Enviar y Recibir Demo Gratis
              </button>
            </div>

            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              ✓ Información 100% confidencial ✓ Sin spam ✓ Respuesta en 2 horas
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelenciaDigitalLanding;