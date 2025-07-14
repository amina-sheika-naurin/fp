import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.svg" 
                alt="FP Logo" 
                width={60} 
                height={60} 
                className="object-contain"
              />
            </div>
            <p className="text-base font-light text-gray-300">
              Precision in Piping • Strength in Civil Construction
            </p>
            <p className="text-sm font-light leading-relaxed">
              Delivering advanced GRP/GRE piping and civil infrastructure solutions
              for oil, gas, utilities, and industrial facilities across the region.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-base font-normal text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/piping" className="text-sm font-light hover:text-white transition-colors">
                  Piping Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/civil" className="text-sm font-light hover:text-white transition-colors">
                  Civil Construction
                </Link>
              </li>
              <li>
                <Link href="/services/piping/maintenance" className="text-sm font-light hover:text-white transition-colors">
                  Maintenance & Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/piping/supply" className="text-sm font-light hover:text-white transition-colors">
                  Trading & Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-base font-normal text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-sm font-light hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-sm font-light hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-light hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-light hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-base font-normal text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-gray-500" />
                <div>
                  <p className="text-sm font-light text-white">Offices</p>
                  <p className="text-sm font-light">Sohar • Duqm • Dubai</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <a href="tel:+96812345678" className="text-sm font-light hover:text-white transition-colors">
                  +968 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-gray-500" />
                <a href="mailto:info@fibroplast.com" className="text-sm font-light hover:text-white transition-colors">
                  info@fibroplast.com
                </a>
              </li>
            </ul>
            
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-light">
              © {currentYear} Fibroplast. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}