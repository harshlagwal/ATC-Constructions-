import React, { useState, useEffect } from 'react';
import { CheckCircle, Phone, MapPin, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { businessConfig } from '../config/business';
import emailjs from '@emailjs/browser';

export function Contact({ selectedMaterial }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    material: '',
    quantity: '',
    location: '',
    details: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedMaterial) {
      setFormData(prev => ({ ...prev, material: selectedMaterial }));
    }
  }, [selectedMaterial]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
    if (!formData.material) newErrors.material = 'Please select a material';
    if (!formData.location.trim()) newErrors.location = 'Delivery location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      try {
        await emailjs.send(
          'service_dt92ifl',
          'template_1490ypr',
          {
            name: formData.name,
            phone: formData.phone,
            material: businessConfig.materials.find(m => m.id === formData.material)?.label || formData.material,
            quantity: formData.quantity || 'Not specified',
            location: formData.location,
            details: formData.details || 'No additional details',
          },
          'FTfSpfKwrjM50XaAe'
        );

        setIsSuccess(true);
        setFormData({ name: '', phone: '', material: '', quantity: '', location: '', details: '' });
      } catch (error) {
        console.error('FAILED...', error);
        alert('Failed to send request. Please try again or use WhatsApp/Phone.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleWhatsAppContinue = () => {
    const msg = encodeURIComponent(
      `Hello ${businessConfig.businessName},\n\nI just requested a quote on your website and would like to follow up.\n\nThank you.`
    );
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="w-full py-xl bg-surface animate-on-scroll">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter">
        <div className="text-center mb-xl">
          <h2 className="font-headline-md text-headline-xl text-primary mb-sm">Need Material for Your Next Project?</h2>
          <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Tell us what you need and where it needs to be delivered.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-lg">
          <div className="w-full lg:w-1/3 flex flex-col gap-md">
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/30 shadow-sm">
              <h3 className="font-headline-md text-body-lg text-primary mb-md">Contact Information</h3>

              <div className="mb-lg border-b border-outline-variant/30 pb-md">
                <span className="font-headline-md text-primary text-lg block">{businessConfig.ownerName}</span>
                <span className="font-body-sm text-secondary font-medium">Owner</span>
              </div>

              <div className="flex flex-col gap-sm">
                <a href={`tel:${businessConfig.phone}`} className="flex items-center gap-sm text-on-surface hover:text-secondary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <span className="font-label-md">{businessConfig.phone}</span>
                </a>

                <a href={`https://wa.me/${businessConfig.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-sm text-on-surface hover:text-green-600 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <MessageSquare className="text-green-600" size={20} />
                  </div>
                  <span className="font-label-md">WhatsApp Us</span>
                </a>

                <div className="flex items-center gap-sm text-on-surface">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <span className="font-label-md">{businessConfig.email}</span>
                </div>

                <div className="flex items-center gap-sm text-on-surface">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <span className="font-label-md">{businessConfig.address}</span>
                </div>
              </div>
              
              <div className="mt-md rounded-xl overflow-hidden border border-outline-variant/30 h-48 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108425.8674514588!2d76.43575402096362!3d31.684157147781254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5386f76c339%3A0xcda6502ba7c65c2b!2sHamirpur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Business Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/30 shadow-sm">
              {isSuccess ? (
                <div className="text-center py-xl flex flex-col items-center animate-in fade-in zoom-in duration-300">
                  <CheckCircle className="text-green-500 mb-md" size={64} />
                  <h3 className="font-headline-md text-headline-md text-primary mb-sm">Quote Request Received!</h3>
                  <p className="font-body-md text-on-surface-variant mb-lg">
                    Thank you for your enquiry. Our team will review your requirements and get back to you shortly with pricing and availability.
                  </p>
                  <div className="flex gap-md justify-center">
                    <Button onClick={() => setIsSuccess(false)} variant="outline">
                      Request Another Quote
                    </Button>
                    <Button onClick={handleWhatsAppContinue} icon={MessageSquare} className="bg-green-600 hover:bg-green-700 text-white border-none shadow-none">
                      Follow up on WhatsApp
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="flex flex-col gap-xs">
                      <label htmlFor="name" className="font-label-sm text-on-surface">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`p-sm border rounded bg-surface focus:outline-none focus:border-secondary transition-colors ${errors.name ? 'border-error animate-shake' : 'border-outline-variant/50'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="font-body-sm text-error text-xs">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-xs">
                      <label htmlFor="phone" className="font-label-sm text-on-surface">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`p-sm border rounded bg-surface focus:outline-none focus:border-secondary transition-colors ${errors.phone ? 'border-error animate-shake' : 'border-outline-variant/50'}`}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && <span className="font-body-sm text-error text-xs">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="flex flex-col gap-xs">
                      <label htmlFor="material" className="font-label-sm text-on-surface">Material Required *</label>
                      <select
                        id="material"
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                        className={`p-sm border rounded bg-surface focus:outline-none focus:border-secondary transition-colors ${errors.material ? 'border-error animate-shake' : 'border-outline-variant/50'}`}
                      >
                        <option value="">Select a material</option>
                        {businessConfig.materials.map(m => (
                          <option key={m.id} value={m.id}>{m.label}</option>
                        ))}
                      </select>
                      {errors.material && <span className="font-body-sm text-error text-xs">{errors.material}</span>}
                    </div>

                    <div className="flex flex-col gap-xs">
                      <label htmlFor="quantity" className="font-label-sm text-on-surface">Approximate Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="p-sm border rounded bg-surface focus:outline-none focus:border-secondary transition-colors border-outline-variant/50"
                        placeholder="e.g. 2 Trucks, 500 Bags"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-xs">
                    <label htmlFor="location" className="font-label-sm text-on-surface">Delivery Location *</label>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={`p-sm border rounded bg-surface focus:outline-none focus:border-secondary transition-colors ${errors.location ? 'border-error animate-shake' : 'border-outline-variant/50'}`}
                      placeholder="Street, Area, City"
                    />
                    {errors.location && <span className="font-body-sm text-error text-xs">{errors.location}</span>}
                  </div>

                  <div className="flex flex-col gap-xs">
                    <label htmlFor="details" className="font-label-sm text-on-surface">Additional Details</label>
                    <textarea
                      id="details"
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="p-sm border rounded bg-surface focus:outline-none focus:border-secondary transition-colors border-outline-variant/50"
                      placeholder="Any specific requirements or access instructions?"
                    />
                  </div>

                  <Button type="submit" className="w-full justify-center mt-sm" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Request Quote'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
