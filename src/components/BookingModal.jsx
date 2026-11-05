import React, { useState, useEffect } from 'react';
import { salonInfo, signatureServices } from '../data/salonData';
import { X, Calendar, Clock, User, Phone, Sparkles, Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: initialService || 'Bridal Makeup',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    'Morning (10:00 AM - 1:00 PM)',
    'Afternoon (1:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 7:30 PM)',
    'Early Bridal Slot (6:00 AM - 9:00 AM)'
  ];

  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else {
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
      if (!phoneRegex.test(cleanPhone)) {
        errs.phone = 'Please enter a valid 10-digit Indian phone number.';
      }
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

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

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
    <div
      className="fixed inset-0 z-50 bg-chocolate/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-xl bg-ivory rounded-3xl p-6 sm:p-8 shadow-2xl border border-champagne/40 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-chocolate/70 hover:text-burgundy border border-blush transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left pr-8 mb-6">
          <div className="flex items-center gap-1.5 text-xs text-burgundy font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span>Glamora by Pallavi</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-chocolate mt-1">
            Book an Appointment
          </h3>
          <p className="text-xs text-chocolate/70 mt-1">
            Personalized beauty &amp; bridal styling by certified artist Pallavi Umale.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            {/* Full Name */}
            <div className="space-y-1">
              <label htmlFor="modal-name" className="block text-xs font-semibold text-chocolate/80">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-chocolate/40">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="modal-name"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: null });
                  }}
                  placeholder="Your full name"
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-rose/30 ${
                    errors.fullName ? 'border-rose' : 'border-blush/80 focus:border-champagne'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-[11px] text-rose flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label htmlFor="modal-phone" className="block text-xs font-semibold text-chocolate/80">
                Phone Number / WhatsApp *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-chocolate/40">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="modal-phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: null });
                  }}
                  placeholder="e.g. 9699439655"
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-rose/30 ${
                    errors.phone ? 'border-rose' : 'border-blush/80 focus:border-champagne'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-[11px] text-rose flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                </p>
              )}
            </div>

            {/* Service */}
            <div className="space-y-1">
              <label htmlFor="modal-service" className="block text-xs font-semibold text-chocolate/80">
                Service *
              </label>
              <select
                id="modal-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-white border border-blush/80 text-sm text-chocolate focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-champagne"
              >
                {signatureServices.map((svc) => (
                  <option key={svc.id} value={svc.name}>
                    {svc.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date */}
              <div className="space-y-1">
                <label htmlFor="modal-date" className="block text-xs font-semibold text-chocolate/80">
                  Preferred Date *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-chocolate/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="modal-date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: null });
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-sm text-chocolate focus:outline-none focus:ring-2 focus:ring-rose/30 ${
                      errors.date ? 'border-rose' : 'border-blush/80 focus:border-champagne'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="text-[11px] text-rose flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.date}
                  </p>
                )}
              </div>

              {/* Time slot */}
              <div className="space-y-1">
                <label htmlFor="modal-slot" className="block text-xs font-semibold text-chocolate/80">
                  Time Slot
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-chocolate/40">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    id="modal-slot"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-blush/80 text-sm text-chocolate focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-champagne"
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

            {/* Notes */}
            <div className="space-y-1">
              <label htmlFor="modal-message" className="block text-xs font-semibold text-chocolate/80">
                Special Notes (Optional)
              </label>
              <textarea
                id="modal-message"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Any special details or requirements..."
                className="w-full px-3 py-2 rounded-xl bg-white border border-blush/80 text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-champagne"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-semibold text-white bg-burgundy hover:bg-rose transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-champagne" />
                <span>Submit Booking Request</span>
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation in Modal */
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-chocolate">
              Appointment Request Ready!
            </h4>

            <p className="text-xs sm:text-sm text-chocolate/75 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-burgundy">{submittedData.fullName}</span>. Your request for <span className="font-semibold">{submittedData.service}</span> on <span className="font-semibold">{submittedData.date}</span> has been captured.
            </p>

            <div className="p-3 bg-blush/40 rounded-xl text-xs text-chocolate/80">
              <p className="font-semibold text-burgundy">Frontend Demo State</p>
              <p>No backend server used. Click below to send directly to Pallavi's WhatsApp!</p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to WhatsApp (+91 {salonInfo.rawPhone})</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full py-2.5 text-xs text-chocolate/70 hover:text-burgundy transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
