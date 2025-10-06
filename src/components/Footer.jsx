// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {

  const scrollWithOffset = (el) => {
    const yOffset = -80; // adjust if header height changes
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D1525] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#10B981] mb-4">
              Ear We Go
            </h3>
            <p className="text-gray-300 mb-4">
              Professional earwax removal service with over 10 years of
              experience. Serving Derby, Nottingham, Leicester, and surrounding
              areas with convenient home visits.
            </p>
            <p className="text-sm text-gray-400">
              Medical Grade Equipment • Same day appointments • Thousands of
              satisfied customers
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Why Choose Us", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#10B981] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <HashLink

                  scroll={scrollWithOffset}
                  smooth
                  to="/terms-conditions"
                  className="text-gray-300 hover:text-[#10B981] transition-colors"
                >
                  Terms & Conditions
                </HashLink>
              </li>
              <li>
                <HashLink

                  scroll={scrollWithOffset}
                  smooth
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-[#10B981] transition-colors"
                >
                  Privacy Policy
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-[#10B981]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.41 1.85.63 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+448081371961"
                  className="text-gray-300 hover:text-[#10B981] transition-colors"
                  aria-label="Call us"
                >
                  0808 137 1961
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-[#10B981]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:earwegosales@gmail.com"
                  className="text-gray-300 hover:text-[#10B981] transition-colors break-all"
                  aria-label="Email us"
                >
                  earwegosales@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <svg
                  className="w-4 h-4 mr-3 text-[#10B981] mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href="https://maps.app.goo.gl/9UQ4DpVbSdYuN5Fz7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-italic text-gray-300 hover:text-[#10B981]"
                >
                  <p>Great Northern Rd,</p>
                  <p>Derby, DE1 1LR</p>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center space-y-2">
          <p className="text-gray-400">
            © 2025 Ear We Go. All rights reserved. Professional earwax removal
            services.
          </p>
          <p className="text-sm text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
