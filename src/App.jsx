import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BridalSpotlight from './components/BridalSpotlight';
import GallerySection from './components/GallerySection';
import PromoBanner from './components/PromoBanner';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Bridal Makeup');

  const handleOpenBooking = (service = 'Bridal Makeup') => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-ivory text-chocolate flex flex-col font-sans selection:bg-rose/25 selection:text-burgundy">
      {/* 1. Slim Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Glass Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking('Bridal Makeup')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking('Bridal Makeup')} />

        {/* 4. Trust & Highlights Strip */}
        <TrustStrip />

        {/* 5. About Glamora & Certified Artist Pallavi Umale */}
        <AboutSection onOpenBooking={() => handleOpenBooking('Bridal Makeup')} />

        {/* 6. 10 Signature Beauty & Grooming Services */}
        <ServicesSection onOpenBookingWithService={(svc) => handleOpenBooking(svc)} />

        {/* 7. Dedicated Royal Bridal Spotlight */}
        <BridalSpotlight onOpenBookingWithService={(svc) => handleOpenBooking(svc)} />

        {/* 8. Portfolio Gallery & Lightbox */}
        <GallerySection />

        {/* 9. Experience / Special Offer Banner */}
        <PromoBanner onOpenBooking={() => handleOpenBooking('Bridal Makeup')} />

        {/* 10. Why Choose Us / Salon Sanctuary Principles */}
        <ExperienceSection />

        {/* 11. Client Testimonials Carousel */}
        <TestimonialsSection />

        {/* 12. Full Appointment Booking Section */}
        <BookingSection preselectedService={selectedService} />

        {/* 13. Contact & Studio Map Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking('Bridal Makeup')} />
      </main>

      {/* 14. Luxury Dark Chocolate / Burgundy Footer */}
      <Footer />

      {/* 15. Persistent Floating WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* 16. Global Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}
