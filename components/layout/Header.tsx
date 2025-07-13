"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import { navigationItems, NavItem } from "@/lib/types/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const renderNavItem = (item: NavItem, index: number) => {
    const hasChildren = item.children && item.children.length > 0;

    if (!hasChildren && item.href) {
      return (
        <Link
          key={index}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors"
        >
          {item.title}
        </Link>
      );
    }

    return (
      <div
        key={index}
        className="relative group"
        onMouseEnter={() => setActiveDropdown(item.title)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors"
          aria-expanded={activeDropdown === item.title}
        >
          {item.title}
          <ChevronDown className="w-4 h-4" />
        </button>

        {hasChildren && activeDropdown === item.title && item.children && (
          <div className="absolute top-full left-0 w-screen max-w-6xl bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden z-[999]">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-8">
              {item.children.map((child, childIndex) => (
                <div key={childIndex} className="space-y-4">
                  <div>
                    {child.href ? (
                      <Link
                        href={child.href}
                        className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {child.title}
                      </Link>
                    ) : (
                      <h3 className="text-lg font-semibold text-gray-900">
                        {child.title}
                      </h3>
                    )}
                    {child.description && (
                      <p className="mt-1 text-sm text-gray-600">
                        {child.description}
                      </p>
                    )}
                  </div>

                  {child.children && (
                    <ul className="space-y-2">
                      {child.children.map((subChild, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subChild.href || "#"}
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex flex-col"
                          >
                            <span className="font-medium">{subChild.title}</span>
                            {subChild.description && (
                              <span className="text-xs text-gray-500 mt-1">
                                {subChild.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex h-14 md:h-12 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/loho.jpeg" 
            alt="FP Logo" 
            width={32} 
            height={32} 
            className="object-contain md:w-10 md:h-10"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item, index) => renderNavItem(item, index))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/contact"
            className="p-2 hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </Link>
        </div>

        <button
          className="lg:hidden p-2 transition-transform duration-200"
          onClick={() => {
            if (mobileMenuOpen) {
              setIsAnimating(true);
              setTimeout(() => {
                setMobileMenuOpen(false);
                setIsAnimating(false);
              }, 300);
            } else {
              setMobileMenuOpen(true);
            }
          }}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 transform rotate-90 transition-transform duration-200" />
          ) : (
            <Menu className="w-5 h-5 transition-transform duration-200" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-b z-[999] transform transition-all duration-300 ease-out ${
            isAnimating ? 'animate-slideUp' : 'animate-slideDown'
          }`}
        >
          <div className="px-4 py-6">
            <div className="space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="border-b pb-4">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      {item.children && (
                        <div className="ml-4 space-y-2">
                          {item.children.map((child, childIndex) => (
                            <div key={childIndex}>
                              <Link
                                href={child.href || "#"}
                                className="block text-base text-gray-600 hover:text-blue-600 py-1"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="btn-primary w-full py-3 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}