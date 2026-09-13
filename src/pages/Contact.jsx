import { useState } from "react";
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight, ExternalLink } from "lucide-react";
import TikTokIcon from "../components/TikTokIcon";
import { businessInfo } from "../data/businessInfo";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number";
    } else if (formData.phone.replace(/[^0-9+]/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number (e.g. +92 324 4892121)";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief description of your requirements";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters describing your space or sofa needs";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate clean frontend-functional dispatch with clear feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: ""
      });
      setErrors({});
    }, 800);
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-softPink border border-brand-pink text-brand-darkRose text-xs tracking-widest uppercase font-semibold mb-4">
          Direct Inquiries & Workshop Visits
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-charcoal tracking-tight">
          Connect With Us
        </h1>
        <p className="text-base sm:text-lg text-brand-mutedGray max-w-xl mx-auto mt-4 font-light">
          Discuss your custom sofa design, reupholstery project, or full home interior furniture plan with our Ichhra team.
        </p>
      </section>

      {/* Split-Screen Contact Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Business Information */}
          <div className="lg:col-span-5 bg-brand-warmCream/70 p-8 sm:p-10 rounded-3xl border border-brand-pink space-y-8 shadow-card">
            
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-deepRose font-bold block mb-1">
                Direct Contact
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-brand-charcoal">
                Let's Talk About Your Space
              </h2>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                {businessInfo.name}
              </span>
              <p className="text-xs uppercase tracking-widest text-brand-deepRose font-semibold">
                {businessInfo.category}
              </p>
            </div>

            <div className="space-y-6 pt-2">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/50 text-brand-darkRose flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-mutedGray block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={businessInfo.phoneHref}
                    className="text-lg font-bold text-brand-charcoal hover:text-brand-darkRose transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                  <p className="text-xs text-brand-mutedGray mt-0.5">
                    Tap to call directly during workshop hours.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/50 text-brand-darkRose flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-mutedGray block">
                    Workshop Address
                  </span>
                  <p className="text-sm font-semibold text-brand-charcoal leading-relaxed">
                    {businessInfo.address}
                  </p>
                  <a
                    href={businessInfo.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-brand-darkRose hover:text-brand-deepRose font-semibold mt-2 underline underline-offset-4"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* TikTok Social */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-xl bg-brand-charcoal text-brand-pink flex items-center justify-center shrink-0 mt-1">
                  <TikTokIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-mutedGray block">
                    Official Social Page
                  </span>
                  <p className="text-sm font-semibold text-brand-charcoal">
                    Watch our upholstery videos on TikTok
                  </p>
                  <a
                    href={businessInfo.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-brand-darkRose hover:text-brand-deepRose font-bold mt-2 underline underline-offset-4"
                  >
                    <span>@baberposhishmaker123</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick reassurance note */}
            <div className="p-4 bg-brand-offWhite rounded-2xl border border-brand-charcoal/5 text-xs text-brand-mutedGray leading-relaxed font-light">
              <strong className="text-brand-charcoal font-semibold">Walk-in Inquiries Welcome:</strong> Feel free to bring sofa measurements, room floorplans, or photos of your living area directly to our Ichhra workshop.
            </div>

          </div>

          {/* RIGHT SIDE: Validated Contact Form */}
          <div className="lg:col-span-7 bg-brand-offWhite p-8 sm:p-12 rounded-3xl border border-brand-charcoal/5 shadow-soft">
            
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-brand-deepRose font-bold block mb-1">
                Send a Message
              </span>
              <h3 className="font-editorial text-3xl font-bold text-brand-charcoal">
                Describe Your Furniture Requirements
              </h3>
              <p className="text-sm text-brand-mutedGray mt-1 font-light">
                Fill out the form below and we will get back to you regarding your custom sofa or furniture needs.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-brand-softPink/80 border border-brand-pink p-8 rounded-2xl text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-brand-deepRose text-brand-offWhite flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-editorial text-2xl font-bold text-brand-charcoal">
                  Thank You for Reaching Out
                </h4>
                <p className="text-sm text-brand-mutedGray max-w-md mx-auto leading-relaxed">
                  Your inquiry has been recorded. For faster immediate assistance, you can also dial <strong className="text-brand-charcoal font-semibold">{businessInfo.phone}</strong>.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-bold uppercase tracking-wider text-brand-darkRose hover:text-brand-deepRose underline underline-offset-4"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
                  >
                    Full Name <span className="text-brand-deepRose">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Ahmad"
                    className={`w-full px-4 py-3.5 rounded-xl bg-brand-warmCream/40 border text-sm text-brand-charcoal placeholder:text-brand-mutedGray/50 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? "border-red-400 focus:ring-red-300"
                        : "border-brand-charcoal/15 focus:border-brand-deepRose focus:ring-brand-pink/50"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Grid: Phone Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
                    >
                      Phone Number <span className="text-brand-deepRose">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 324 4892121"
                      className={`w-full px-4 py-3.5 rounded-xl bg-brand-warmCream/40 border text-sm text-brand-charcoal placeholder:text-brand-mutedGray/50 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? "border-red-400 focus:ring-red-300"
                          : "border-brand-charcoal/15 focus:border-brand-deepRose focus:ring-brand-pink/50"
                      }`}
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
                    >
                      Email Address <span className="text-brand-mutedGray text-[11px] lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-brand-warmCream/40 border text-sm text-brand-charcoal placeholder:text-brand-mutedGray/50 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-red-400 focus:ring-red-300"
                          : "border-brand-charcoal/15 focus:border-brand-deepRose focus:ring-brand-pink/50"
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-2"
                  >
                    Your Requirements & Space Details <span className="text-brand-deepRose">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need: e.g. 5-seater L-shape sectional sofa, fabric preferences, living room space dimensions, or refurbishment..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-brand-warmCream/40 border text-sm text-brand-charcoal placeholder:text-brand-mutedGray/50 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? "border-red-400 focus:ring-red-300"
                        : "border-brand-charcoal/15 focus:border-brand-deepRose focus:ring-brand-pink/50"
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 text-brand-pink" />
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 21. LOCATION: "Visit Us" Section with Directions Link        */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-warmCream/90 rounded-3xl p-8 sm:p-12 border border-brand-pink shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-deepRose font-bold">
                Workshop & Showroom Location
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-brand-charcoal">
                Visit Us in Ichhra Lahore
              </h3>
              
              <div className="bg-brand-offWhite p-6 rounded-2xl border border-brand-charcoal/5 space-y-2">
                <p className="font-bold text-brand-charcoal text-base">
                  Moon Optical, Ichhra Furniture Market
                </p>
                <p className="text-sm text-brand-mutedGray">
                  Ichhra Lahore, 54000, Pakistan
                </p>
              </div>

              <p className="text-sm text-brand-mutedGray font-light leading-relaxed">
                Ichhra Furniture Market is renowned for furniture and sofa craftsmanship in Lahore. Drop by to examine foam densities, explore fabric collections, and consult directly with our craftsmen.
              </p>

              <div className="pt-2">
                <a
                  href={businessInfo.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow"
                >
                  <MapPin className="w-4 h-4 text-brand-pink" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Visual Location Frame / Map preview */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border-4 border-white aspect-[16/10] bg-brand-offWhite">
                {/* Embed Map iframe */}
                <iframe
                  title="BABER POSHISH MAKER Location Map"
                  src={businessInfo.embedMapUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
