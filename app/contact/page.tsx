"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Send,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

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
      <section className="relative overflow-hidden bg-gray-50 py-10 min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/site-2.jpg" 
            alt="Large industrial construction project with cranes and building infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r  from-white via-white/50 to-white/70 md:from-white md:via-white/90 md:to-white/5"></div>
        </div>
        <div className="relative container">
          <div className="max-w-md">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-light">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 font-normal">Contact</span>
            </nav>
            
            {/* Content */}
            <div className="mt-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 ">
              Talk with us
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mb-8">
              Ready to discuss your next project? Get in touch with our expert team.

              </p>
              <Link
                  href="/contact"
                  className="inline-flex mt-5 items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-sm font-light hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900 leading-tight">
              Let&apos;s discuss your project
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to start your next industrial project? Our expert team is here to provide consultation and develop solutions tailored to your specific requirements.
            </p>
            <div className="w-16 h-0.5 bg-blue-600"></div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-3xl font-light mb-2 text-gray-900">Request Consultation</h3>
                <p className="text-gray-600 mb-8 font-light">Fill out the form below and our team will get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 font-light transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 font-light transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 font-light transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 font-light transition-colors"
                        placeholder="+968 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 font-light transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="grp-installation">GRP/GRE Pipeline Installation</option>
                      <option value="maintenance">Maintenance & Emergency Repairs</option>
                      <option value="civil-construction">Civil Construction</option>
                      <option value="emergency-services">24/7 Emergency Services</option>
                      <option value="trading-supply">Trading & Supply Solutions</option>
                      <option value="consultation">Technical Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 font-light transition-colors resize-none"
                      placeholder="Please describe your project requirements, timeline, location, and any specific technical needs..."
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </button>
                    <p className="text-sm text-gray-500">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h3 className="text-2xl font-light mb-8 text-gray-900">Contact Information</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Emergency Support</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-600 font-light">+968 9432 1521</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-600 font-light">+971 5051 40987</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">General Inquiries</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-600 font-light">alatheef@aget.me</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-600 font-light">zubair@aget.me</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Office Locations</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-1">Sohar Office</p>
                        <p className="text-sm text-gray-600 font-light">P.O.BOX: 6, P.C:322, Sohar, Sultanate of Oman</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-1">Duqm Office</p>
                        <p className="text-sm text-gray-600 font-light">Duqm, Sultanate of Oman</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-4xl font-light mb-6 text-gray-900">Ready to get started?</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our engineering team is ready to discuss your project requirements and develop customized solutions for your industrial needs.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-blue-600 text-lg font-normal hover:gap-4 transition-all group"
            >
              View our recent projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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