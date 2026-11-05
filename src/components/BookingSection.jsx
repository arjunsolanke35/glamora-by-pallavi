import React, { useState } from 'react';
import { salonInfo, signatureServices } from '../data/salonData';
import { Calendar, Clock, User, Phone, Sparkles, Send, CheckCircle2, MessageCircle, AlertCircle, RefreshCw } from 'lucide-react';

export default function BookingSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: preselectedService || 'Bridal Makeup',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Time slot options
  const timeSlots = [
    'Morning (10:00 AM - 1:00 PM)',
    'Afternoon (1:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 7:30 PM)',
    'Early Bridal Slot (6:00 AM - 9:00 AM)'
  ];

  // Today's date in YYYY-MM-DD format for min date
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else {
      // Allow Indian mobile numbers (10 digits, optionally starting with +91 or 0)
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
      if (!phoneRegex.test(cleanPhone)) {
        errs.phone = 'Please enter a valid 10-digit Indian phone number (e.g. 9699439655).';
      }
    }

    if (!formData.service) {
      errs.service = 'Please choose a desired service.';
    }

    if (!formData.date) {
      errs.date = 'Please select a preferred date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      service: 'Bridal Makeup',
      date: '',
      timeSlot: 'Morning (10:00 AM - 1:00 PM)',
      message: ''
    });
    setErrors({});
  };

  // Generate WhatsApp prefilled message
  const createWhatsAppUrl = () => {
    if (!submittedData) return `https://wa.me/${salonInfo.whatsappNumber}`;
    const text = `Hello Pallavi, I would like to book an appointment at Glamora:%0A%0A` +
      `*Name:* ${encodeURIComponent(submittedData.fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(submittedData.phone)}%0A` +
      `*Service:* ${encodeURIComponent(submittedData.service)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(submittedData.date)}%0A` +
      `*Preferred Slot:* ${encodeURIComponent(submittedData.timeSlot)}%0A` +
      (submittedData.message ? `*Notes:* ${encodeURIComponent(submittedData.message)}%0A` : '');
    
    return `https://wa.me/${salonInfo.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 border border-champagne/30 text-burgundy text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span>Appointment Reservation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
            Begin Your <span className="italic font-normal text-burgundy font-serif">Beauty Transformation</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-chocolate/75 max-w-xl mx-auto">
            Schedule your personalized session with certified artist Pallavi Umale. We will confirm your preferred timing promptly.
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-ivory rounded-3xl p-6 sm:p-10 lg:p-12 shadow-luxury border border-champagne/40">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80">
                    Full Name <span className="text-rose">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-chocolate/40">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-rose/30 transition-all ${
                        errors.fullName ? 'border-rose ring-1 ring-rose/40' : 'border-blush/80 focus:border-champagne'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80">
                    Phone / WhatsApp Number <span className="text-rose">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-chocolate/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      placeholder="e.g. 9699439655"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-rose/30 transition-all ${
                        errors.phone ? 'border-rose ring-1 ring-rose/40' : 'border-blush/80 focus:border-champagne'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80">
                  Desired Beauty Service <span className="text-rose">*</span>
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-blush/80 text-sm text-chocolate focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-champagne transition-all"
                >
                  {signatureServices.map((svc) => (
                    <option key={svc.id} value={svc.name}>
                      {svc.name} ({svc.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80">
                    Preferred Date <span className="text-rose">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-chocolate/40">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: null });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-chocolate focus:outline-none focus:ring-2 focus:ring-rose/30 transition-all ${
                        errors.date ? 'border-rose ring-1 ring-rose/40' : 'border-blush/80 focus:border-champagne'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-rose flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.date}
                    </p>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-1.5">
                  <label htmlFor="timeSlot" className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-chocolate/40">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-blush/80 text-sm text-chocolate focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-champagne transition-all"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Message / Special Requests */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80">
                  Special Notes or Event Details (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your occasion, skin preferences, or bridal requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-blush/80 text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-champagne transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full text-sm font-semibold text-white bg-burgundy hover:bg-rose transition-all duration-300 shadow-luxury hover:shadow-burgundy-glow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-champagne" />
                  <span>Request Appointment</span>
                </button>
              </div>

              <p className="text-center text-xs text-chocolate/60">
                Prefer immediate booking? Reach Pallavi directly at{' '}
                <a href={`tel:${salonInfo.rawPhone}`} className="text-burgundy font-semibold underline">
                  {salonInfo.phone}
                </a>
              </p>

            </form>
          ) : (
            /* Attractive Confirmation State */
            <div className="text-center py-6 sm:py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-chocolate">
                  Appointment Request Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-chocolate/70 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-burgundy">{submittedData.fullName}</span>! Your booking request for <span className="font-semibold">{submittedData.service}</span> on <span className="font-semibold">{submittedData.date}</span> ({submittedData.timeSlot}) is ready.
                </p>
              </div>

              {/* Demo Notice Banner */}
              <div className="p-4 rounded-xl bg-blush/50 border border-champagne/40 text-xs text-chocolate/80 max-w-lg mx-auto">
                <p className="font-semibold text-burgundy mb-1">
                  Frontend Demo Notice
                </p>
                <p>
                  This website operates on the frontend only. No data was sent to an external server. You can instantly send these details to Pallavi's WhatsApp below!
                </p>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send to WhatsApp ({salonInfo.phone})</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold text-chocolate bg-white border border-champagne/40 hover:bg-blush/30 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-rose" />
                  <span>Make Another Request</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
