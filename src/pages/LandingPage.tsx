import React from 'react';
import { useModal } from '@/hooks';
import { Navigation, Footer } from '@/components/layout';
import {
  Hero,
  Stats,
  Benefits,
  Products,
  Services,
  Testimonials,
  FAQ,
  LeadMagnet,
  ContactForm,
  FinalCTA,
} from '@/features/landing/components';

export const LandingPage: React.FC = () => {
  const contactModal = useModal();

  const handleDemoClick = () => {
    contactModal.open();
  };

  const handleDownloadClick = () => {
    contactModal.open();
  };

  const handleServiceClick = (serviceId: string) => {
    console.log('Service clicked:', serviceId);
    contactModal.open();
  };

  const handleCallClick = () => {
    // In a real app, this might open a phone dialer or contact modal
    window.location.href = 'tel:+541140000000';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation onDemoClick={handleDemoClick} />
      
      <main>
        <Hero 
          onDemoClick={handleDemoClick}
          onDownloadClick={handleDownloadClick}
        />
        
        <Stats />
        
        <section id="about">
          <Benefits />
        </section>
        
        <section id="products">
          <Products />
        </section>
        
        <LeadMagnet onDownloadClick={handleDownloadClick} />
        
        <section id="services">
          <Services onServiceClick={handleServiceClick} />
        </section>
        
        <Testimonials />
        
        <FAQ />

        <section id="support">
          {/* Support section placeholder */}
        </section>

        <section id="blog">
          {/* Blog section placeholder */}
        </section>
        
        <section id="contact">
          <FinalCTA 
            onDemoClick={handleDemoClick}
            onCallClick={handleCallClick}
          />
        </section>
      </main>
      
      <Footer />
      
      <ContactForm
        isOpen={contactModal.isOpen}
        onClose={contactModal.close}
      />
    </div>
  );
};