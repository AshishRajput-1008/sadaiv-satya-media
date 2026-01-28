"use client";

import { useState, type MouseEvent } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Home,
  Video,
  BookOpen,
  User,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import sadaivSatyaLogo from "@/app/public/Final Logo.png";
import asdshoppy from "@/app/public/shoppyVertical.png.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      // Add your subscription logic here
      setEmail("");
      alert("सब्सक्रिप्शन के लिए धन्यवाद!");
    }
  };

  // Main Categories - Matching Header
  const mainCategories = [
    { label: "होम", link: "/", icon: Home },
    { label: "भारत", link: "/bharat" },
    { label: "विश्व", link: "/world" },
    { label: "राजनीति", link: "/politics" },
    { label: "मनोरंजन", link: "/entertainment" },
    { label: "खेल", link: "/sports" },
    { label: "बिजनेस", link: "/business" },
    { label: "टेक्नोलॉजी", link: "/technology" },
  ];

  const quickAccess = [
    { label: "वेब स्टोरीज़", link: "/web-stories", icon: BookOpen },
    { label: "वीडियो", link: "/videos", icon: Video },
    { label: "प्रोफ़ाइल", link: "/profile", icon: User },
  ];

  const aboutLinks = [
    { label: "हमारे बारे में", link: "/about" },
    { label: "संपर्क करें", link: "/contact" },
    { label: "विज्ञापन दें", link: "/advertise" },
    { label: "करियर", link: "/careers" },
    { label: "RSS फीड", link: "/rss" },
  ];

  const legalLinks = [
    { label: "गोपनीयता नीति", link: "/privacy-policy" },
    { label: "उपयोग की शर्तें", link: "/terms" },
    { label: "DNPA आचार संहिता", link: "/dnpa-code" },
    { label: "कुकी नीति", link: "/cookie-policy" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      link: "#",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "#",
      bgColor: "bg-black",
      hoverColor: "hover:bg-gray-800",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "#",
      bgColor: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "#",
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
    },
    {
      icon: Youtube,
      label: "YouTube",
      link: "#",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
    },
  ];

  return (
    <footer className="bg-white">
      {/* Newsletter Section - Red Theme Matching Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                न्यूज़लेटर की सदस्यता लें
              </h3>
              <p className="text-red-50 text-sm md:text-base">
                देश-विदेश की ताज़ा खबरें, राजनीति, खेल और मनोरंजन की अपडेट
                <br className="hidden md:block" />
                सीधे आपके इनबॉक्स में पाएं। अभी सब्सक्राइब करें!
              </p>
            </div>

            {/* Right Subscribe Form */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="अपना ईमेल एड्रेस डालें"
                className="flex-1 px-5 py-3 bg-white text-gray-900 border-2 border-transparent focus:border-red-800 focus:outline-none rounded-md transition-all text-sm placeholder:text-gray-400"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-white text-red-600 font-bold rounded-md hover:bg-red-50 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Brand & Description - 4 columns */}
            <div className="lg:col-span-4 space-y-6">
              {/* Logo */}
              <Link href="/" className="inline-block">
                <Image
                  src={sadaivSatyaLogo}
                  alt="सदैव सत्य"
                  width={140}
                  height={140}
                  className="h-[140px] w-auto object-contain"
                  priority
                />
              </Link>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold text-gray-900">सदैव सत्य</span>{" "}
                भारत का विश्वसनीय समाचार प्लेटफॉर्म है। हम आपको प्रामाणिक
                और निष्पक्ष समाचार प्रदान करने के लिए प्रतिबद्ध हैं। देश,
                दुनिया, राजनीति, खेल, मनोरंजन और व्यापार की हर खबर पर हमारी
                नज़र है।
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="text-gray-600">
                    <p className="font-medium text-gray-900">हमारा पता</p>
                    <p>भोपाल, मध्य प्रदेश, भारत</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="text-gray-600">
                    <p className="font-medium text-gray-900">फोन</p>
                    <p>+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="text-gray-600">
                    <p className="font-medium text-gray-900">ईमेल</p>
                    <p>contact@sadaivsatya.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories - 2.5 columns */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                समाचार श्रेणियां
                <span className="flex-1 h-px bg-gradient-to-r from-red-600 to-transparent"></span>
              </h3>
              <ul className="space-y-2.5">
                {mainCategories.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {item.icon && (
                        <item.icon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                      {!item.icon && (
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Quick Access */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  त्वरित एक्सेस
                </h4>
                <div className="flex flex-wrap gap-2">
                  {quickAccess.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-red-600 rounded-md text-xs font-medium transition-all duration-200 border border-gray-200 hover:border-red-200"
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Company & Legal - 2.5 columns */}
            <div className="lg:col-span-3">
              {/* Company Links */}
              <div className="mb-8">
                <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                  कंपनी
                  <span className="flex-1 h-px bg-gradient-to-r from-red-600 to-transparent"></span>
                </h3>
                <ul className="space-y-2.5">
                  {aboutLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                  नीतियां
                  <span className="flex-1 h-px bg-gradient-to-r from-red-600 to-transparent"></span>
                </h3>
                <ul className="space-y-2.5">
                  {legalLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social & Advertisement - 2 columns */}
            <div className="lg:col-span-2">
              {/* Social Media */}
              <div className="mb-8">
                <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                  हमसे जुड़ें
                  <span className="flex-1 h-px bg-gradient-to-r from-red-600 to-transparent"></span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-10 h-10 rounded-full ${social.bgColor} ${social.hoverColor} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Advertisement */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                  विज्ञापन
                  <span className="flex-1 h-px bg-gradient-to-r from-red-600 to-transparent"></span>
                </h3>
                <a
                  href="#"
                  className="block group overflow-hidden rounded-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-lg"
                >
                  <Image
                    src={asdshoppy}
                    alt="Advertisement"
                    width={250}
                    height={350}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © 2026{" "}
                <span className="font-bold text-red-600">सदैव सत्य</span>।
                सर्वाधिकार सुरक्षित।
              </p>
              <p className="text-xs text-gray-500 mt-1">
                भारत का विश्वसनीय समाचार स्रोत | Trusted News Platform of India
              </p>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                Made with <span className="text-red-600 text-sm">❤</span> in
                India
              </span>
              <span className="hidden md:inline text-gray-300">•</span>
              <Link
                href="/sitemap"
                className="hover:text-red-600 transition-colors"
              >
                साइटमैप
              </Link>
              <span className="hidden md:inline text-gray-300">•</span>
              <Link
                href="/feedback"
                className="hover:text-red-600 transition-colors"
              >
                फीडबैक
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}