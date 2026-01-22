"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Video, BookOpen, User, Zap } from "lucide-react";

export default function MobileBottomBar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "होम",
      icon: Home,
      href: "/",
      activeColor: "text-red-600",
    },
    {
      name: "ताजा हलचल",
      icon: Zap,
      href: "/taaza-halachal",
      activeColor: "text-red-600",
    },
    {
      name: "वीडियो",
      icon: Video,
      href: "/videos",
      activeColor: "text-red-600",
    },
    {
      name: "वेब स्टोरीज़",
      icon: BookOpen,
      href: "/web-stories",
      activeColor: "text-red-600",
    },
    {
      name: "प्रोफ़ाइल",
      icon: User,
      href: "/profile",
      activeColor: "text-red-600",
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <nav className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? item.activeColor
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}