"use client";

import { Facebook, Twitter, Link2, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

interface ShareButtonsProps {
  shareUrl?: string;     // relative (जैसे /news/my-article) या full URL
  size?: "small" | "medium";
}

export default function ShareButtons({ shareUrl, size = "small" }: ShareButtonsProps) {
  const [url, setUrl] = useState<string>("");

  // Client पर mount होने के बाद ही URL set करो
  useEffect(() => {
    if (shareUrl) {
      // अगर full URL दिया है तो वही use करो
      if (shareUrl.startsWith("http")) {
        setUrl(shareUrl);
      } else {
        // relative URL है तो origin add करो
        setUrl(window.location.origin + shareUrl);
      }
    } else {
      // कोई shareUrl नहीं दिया तो current page
      setUrl(window.location.href);
    }
  }, [shareUrl]);

  const handleShare = (platform: "facebook" | "twitter" | "copy" | "whatsapp") => {
    if (!url) return; // safety

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank",
        "width=600,height=400"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
        "_blank",
        "width=600,height=400"
      );
    } else if (platform === "whatsapp") {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(url)}`,
        "_blank"
      );
    } else if (platform === "copy") {
      navigator.clipboard.writeText(url);
      toast.success("लिंक कॉपी हो गया!");
    }
  };

  const buttonSize = size === "small" ? "h-6 w-6" : "h-8 w-8";
  const iconSize = size === "small" ? "h-4 w-4" : "h-5 w-5";

  // URL ready न होने तक कुछ मत दिखाओ या skeleton दिखाओ
  if (!url) {
    return (
      <div className="flex items-center gap-3 mr-2">
        <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 mr-1 mt-1">
      {/* WhatsApp - Mobile पर दिखेगा with "शेयर" text */}
      <button
        onClick={() => handleShare("whatsapp")}
        className="
          flex md:hidden items-center gap-1.5 px-[13px] py-[7px] rounded-full
           text-[#7a7a7a] dark:text-[#7a7a7a]
          active:scale-95 active:bg-gray-300 dark:active:bg-gray-600
          focus:scale-105 focus:shadow-lg focus:outline-none
          transition-all duration-150 ease-out
        "
        aria-label="WhatsApp पर शेयर करें"
      >
        <svg 
          className="h-4 w-4" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="text-sm font-medium">शेयर</span>
      </button>

      {/* Desktop Buttons - केवल Desktop पर दिखेंगे */}
      <div className="hidden md:flex items-center gap-3">
        {/* Facebook */}
        <button
          onClick={() => handleShare("facebook")}
          className={`
            flex ${buttonSize} items-center justify-center rounded-full 
            bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300
            active:scale-95 active:bg-blue-600 active:text-white
            focus:scale-105 focus:bg-blue-600 focus:text-white focus:shadow-lg focus:outline-none
            transition-all duration-150 ease-out
          `}
          aria-label="Facebook पर शेयर करें"
        >
          <Facebook className={iconSize} />
        </button>

        {/* X (Twitter) */}
        <button
          onClick={() => handleShare("twitter")}
          className={`
            flex ${buttonSize} items-center justify-center rounded-full 
            bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300
            active:scale-95 active:bg-black active:text-white
            focus:scale-105 focus:bg-black focus:text-white focus:shadow-lg focus:outline-none
            transition-all duration-150 ease-out
          `}
          aria-label="X पर शेयर करें"
        >
          <Twitter className={iconSize} />
        </button>

        {/* Copy Link */}
        <button
          onClick={() => handleShare("copy")}
          className={`
            flex ${buttonSize} items-center justify-center rounded-full 
            bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300
            active:scale-95 active:bg-green-600 active:text-white
            focus:scale-105 focus:bg-green-600 focus:text-white focus:shadow-lg focus:outline-none
            transition-all duration-150 ease-out
          `}
          aria-label="लिंक कॉपी करें"
        >
          <Link2 className={iconSize} />
        </button>
      </div>
    </div>
  );
}