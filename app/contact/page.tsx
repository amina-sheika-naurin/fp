"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Send,
  MessageSquare
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" 
            alt="Modern office building with glass facade and industrial architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Ready to discuss your next project? Get in touch with our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8 text-gray-900">Request Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent font-light"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent font-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent font-light"
                  >
                    <option value="">Select a service</option>
                    <option value="grp-installation">GRP/GRE Installation</option>
                    <option value="maintenance">Maintenance & Repairs</option>
                    <option value="civil-construction">Civil Construction</option>
                    <option value="emergency-services">Emergency Services</option>
                    <option value="trading-supply">Trading & Supply</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent font-light"
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-8 py-4 rounded-sm font-light hover:bg-gray-800 transition-colors text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-8 text-gray-900">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-normal mb-1 text-gray-900">24/7 Emergency Line</h3>
                      <p className="text-gray-600 font-light">+968 9999 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-normal mb-1 text-gray-900">General Inquiries</h3>
                      <p className="text-gray-600 font-light">info@fibroplast.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-normal mb-1 text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600 font-light">+968 9888 7777</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Brochure */}
              <div className="bg-gray-50 rounded-sm p-6 border border-gray-200">
                <h3 className="text-xl font-normal mb-4 text-gray-900">Company Brochure</h3>
                <p className="text-gray-600 mb-4 font-light leading-relaxed">
                  Download our comprehensive company brochure for detailed information 
                  about our services and capabilities.
                </p>
                <button className="w-full py-3 border border-gray-300 text-gray-900 rounded-sm font-light hover:bg-gray-100 transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Strategically located across the region to serve you better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-8 h-8 text-gray-600" />
                  <h3 className="text-xl font-normal text-gray-900">{office.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm font-light">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 text-sm font-light hover:text-gray-900">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 text-sm font-light hover:text-gray-900">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm font-light">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}