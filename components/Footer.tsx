'use client';

import { useState } from 'react';
import apiDevelopment from "@/app/public/advImages/apiDevelop.png"

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Add your subscription logic here
    setEmail('');
  };

  // Footer navigation sections
  const footerSections = {
    departments: [
      { label: 'होम', link: '/' },
      { label: 'भारत', link: '/bharat' },
      { label: 'विश्व', link: '/world' },
      { label: 'राजनीति', link: '/politics' },
      { label: 'मनोरंजन', link: '/entertainment' },
      { label: 'खेल', link: '/sports' },
    ],
    about: [
      { label: 'हमारे बारे में', link: '/about' },
      { label: 'संपर्क करें', link: '/contact' },
      { label: 'विज्ञापन', link: '/advertise' },
      { label: 'गोपनीयता नीति', link: '/privacy-policy' },
      { label: 'उपयोग की शर्तें', link: '/terms' },
      { label: 'DNPA आचार संहिता', link: '/dnpa-code' },
    ],
  };

  const socialLinks = [
    { icon: 'facebook', label: 'Facebook', link: '#', ariaLabel: 'Facebook' },
    { icon: 'instagram', label: 'Instagram', link: '#', ariaLabel: 'Instagram' },
    { icon: 'twitter', label: 'Twitter', link: '#', ariaLabel: 'Twitter' },
    { icon: 'youtube', label: 'YouTube', link: '#', ariaLabel: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10L25 25L10 40" stroke="#FCD34D" strokeWidth="4" strokeLinecap="round"/>
                <path d="M15 10L30 25L15 40" stroke="#EF4444" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <h2 
                className="text-3xl font-semibold tracking-wide" 
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                सदैव सत्य
              </h2>
            </div>

            {/* Description */}
            <p 
              className="text-gray-300 leading-relaxed mb-8 text-base max-w-md"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              सदैव सत्य एक पेशेवर समाचार मंच है, जो विश्वसनीय और रोचक समाचार प्रदान करने के लिए समर्पित है। हमारा लक्ष्य आपको नवीनतम और विश्वसनीय समाचारों से जोड़े रखना है।
            </p>

            {/* Social Links */}
            <div>
              <h3 
                className="text-lg font-medium mb-4" 
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                हमसे जुड़ें
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.ariaLabel}
                  >
                    {social.icon === 'facebook' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Departments Column */}
          <div className="lg:col-span-2">
            <h3 
              className="text-lg font-semibold mb-6 text-white relative inline-block"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              विभाग
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {footerSections.departments.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-base inline-block"
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="lg:col-span-3">
            <h3 
              className="text-lg font-semibold mb-6 text-white relative inline-block"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              हमारे बारे में
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {footerSections.about.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-base inline-block"
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Advertisement Section */}
          <div className="lg:col-span-3">
            <h3 
              className="text-lg font-semibold mb-6 text-white relative inline-block"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              विज्ञापन
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            
            {/* Advertisement Container */}
            <div className="space-y-4">
              {/* Ad 1 */}
           
<img src={apiDevelopment.src}/>

              {/* Ad 2 */}
              

              {/* Ad 3 - Premium Banner */}
              
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="max-w-2xl">
            <h3 
              className="text-2xl font-semibold mb-3" 
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              न्यूज़लेटर की सदस्यता लें
            </h3>
            <p 
              className="text-gray-400 mb-6 text-base"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              नवीनतम समाचार और अपडेट सीधे अपने इनबॉक्स में प्राप्त करें
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="आपका ईमेल पता"
                className="flex-1 px-6 py-3.5 bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none rounded-lg transition-colors text-base"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 text-base whitespace-nowrap"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                सदस्यता लें
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-gray-400 text-sm text-center md:text-left"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              © 2026 सदैव सत्य। सर्वाधिकार सुरक्षित।
            </p>
            <p 
              className="text-gray-500 text-sm text-center md:text-right"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              भारत का विश्वसनीय समाचार स्रोत
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}