"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "./ViewCount";
import ShareButtons from "./ShareButtons";

const GetCyberCrimeNewsList = [
  {
    newsId: 10108927,
    newsTag: "वीडियो कॉल पर 17 दिन निगरानी",
    newsHeading: "साइबर ठगों ने ठगे 14.85 करोड़ रुपये",
    newsHeadingTwo: null,
    newsCategory: "World of Crimes",
    newsSubCategory: "Cyber Crimes",
    newsSlug: "delhi-nri-doctor-digital-arrest-cyber-fraud-10108927.html",
    thumbnail: "/Media/NewsImage/x4hfay1f3qk.webp",
    updatedDate: "2026-01-13T13:39:32.553",
    catNameInHindi: "अपराध की दुनिया",
    subCatNameInHindi: null,
    viewCount: 345,
  },
  {
    newsId: 10108129,
    newsTag: "फर्जी सरकारी नौकरी घोटाला",
    newsHeading: "रेलवे समेत 40 विभागों के नाम पर ठगी",
    newsHeadingTwo: null,
    newsCategory: "World of Crimes",
    newsSubCategory: "Legal news",
    newsSlug:
      "ed-raids-fake-government-job-scam-railway-recruitment-10108129.html",
    thumbnail: "/Media/NewsImage/ro1tskozzfv.webp",
    updatedDate: "2026-01-08T17:17:41.69",
    catNameInHindi: "अपराध",
    subCatNameInHindi: null,
    viewCount: 803,
  },
  {
    newsId: 10107814,
    newsTag: "बेंगलुरु में ड्रग्स नेटवर्क पर बड़ा प्रहार",
    newsHeading: "न्यू ईयर सप्लाई से पहले दो तस्कर गिरफ्तार",
    newsHeadingTwo: null,
    newsCategory: "World of Crimes",
    newsSubCategory: "Narcotic Offence",
    newsSlug:
      "bengaluru-mdma-drug-bust-32-kg-seized-two-arrested-10107814.html",
    thumbnail: "/Media/NewsImage/oahqtclcqad.webp",
    updatedDate: "2026-01-07T16:44:55.85",
    catNameInHindi: "अपराध",
    subCatNameInHindi: null,
    viewCount: 786,
  },
  {
    newsId: 10107394,
    newsTag: "एक फोन कॉल और अकाउंट साफ",
    newsHeading: "शांत आवाज़, बड़ा जाल: ऐसे शुरू होता है नया साइबर अटैक",
    newsHeadingTwo: null,
    newsCategory: "World of Crimes",
    newsSubCategory: "Cyber Crimes",
    newsSlug:
      "one-phone-call-bank-account-empty-cyber-fraud-india-2026-10107394.html",
    thumbnail: "/Media/NewsImage/ti3deggg1hw.webp",
    updatedDate: "2026-01-06T15:30:46.493",
    catNameInHindi: "अपराध",
    subCatNameInHindi: null,
    viewCount: 339,
  },
  {
    newsId: 10107373,
    newsTag: "देहरादून में त्रिपुरा के छात्र एंजेल चकमा की मौत",
    newsHeading: "मामूली विवाद से जानलेवा हमला",
    newsHeadingTwo: null,
    newsCategory: "World of Crimes",
    newsSubCategory: "Violent crime",
    newsSlug:
      "angel-chakma-death-case-dehradun-ssp-denies-racial-violence-supreme-court-10107373.html",
    thumbnail: "/Media/NewsImage/hekyh13xquu.webp",
    updatedDate: "2026-01-06T13:49:43.92",
    catNameInHindi: "अपराध",
    subCatNameInHindi: null,
    viewCount: 264,
  },
  {
    newsId: 10107310,
    newsTag: "'डिजिटल अरेस्ट' जैसा कोई कानून नहीं",
    newsHeading: "साइबर फ्रॉड पर मुख्यमंत्री योगी की कड़ी चेतावनी",
    newsHeadingTwo: null,
    newsCategory: "World of Crimes",
    newsSubCategory: "Cyber Crimes",
    newsSlug: "cm-yogi-warns-digital-arrest-cyber-fraud-1930-10107310.html",
    thumbnail: "/Media/NewsImage/yenudf23iei.webp",
    updatedDate: "2026-01-05T17:42:46.093",
    catNameInHindi: "अपराध की दुनिया",
    subCatNameInHindi: null,
    viewCount: 364,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = [
    "जनवरी",
    "फरवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर",
  ];
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
};

// Function to calculate relative time in Hindi (showing days)
const getRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "आज";
  } else if (diffDays === 1) {
    return "1 दिन";
  } else {
    return `${diffDays} दिन`;
  }
};

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-6 md:py-8">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Heading */}
          <div className="flex justify-between items-center mb-4 md:mb-6 mt-2">
            <div className="mb-6 pb-3 border-b-2 border-[#dc2626]">
              <h2 className="text-2xl md:text-[32px] font-bold text-gray-900 relative inline-block">
                <span className="text-[#dc2626]">अपराध</span> की दुनिया
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#dc2626] to-transparent"></div>
              </h2>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-2">
            {GetCyberCrimeNewsList.map((news) => (
              <article
                key={news.newsId}
                className="group bg-white overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <Link
                  href={`/${news.newsSlug}`}
                  className="flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={`https://mapi.sadaivsatya.com${news.thumbnail}`}
                      alt={news.newsHeading}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16.66vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={news.newsId === 10108927}
                    />
                  </div>

                  {/* Content Container - Better Desktop Alignment */}
                  <div className="p-3 md:p-3.5 flex flex-col flex-grow">
                    {/* Top Section - Category and View Count */}
                    <div className="flex justify-between items-start mb-2.5 md:mb-3">
                      <NewsMetaBar
                        variant="pill-arrow"
                        newsCategory={news.newsCategory}
                        newsCatinhindi={news.catNameInHindi ?? "अपराध"}
                        newsSubCategory={news.newsSubCategory || ""}
                        newsSlug={news.newsSlug || ""}
                        accentColor="#dc2626"
                      />

                         <div className="flex items-center gap-1 mt-[6px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-[12px] font-medium text-gray-600">
                          {getRelativeTime(news.updatedDate)}
                        </span>
                      </div>
                   
                    </div>

                    {/* Headline - Grows to fill space */}
                    <h3 className="text-[15px] md:text-[16px] font-medium text-[#1a1a1a] leading-[1.45] mb-3 transition-colors group-hover:text-[#dc2626] line-clamp-3 flex-grow">
                      <span className="text-[#dc2626] font-medium">
                        {news.newsTag}:{" "}
                      </span>
                      <span className="font-medium">{news.newsHeading}</span>
                    </h3>

                    {/* Bottom Section - Date and Share Button */}
                    <div className="flex items-center justify-between text-xs mt-auto border-t border-gray-100">
                   

                         {/* <div className="flex items-center gap-1 text-gray-600 mt-1 ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span className="text-xs font-medium">{news.viewCount}</span>
                      </div> */}

                      <div className="hidden md:flex items-center">
                        <ShareButtons
                          shareUrl={`/${news.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </div>

                    {/* Share Button for Mobile - Bottom */}
                    <div className="md:hidden flex justify-center mt-3 pt-2 border-t border-gray-100">
                      <ShareButtons
                        shareUrl={`/${news.newsSlug}`}
                        size="small"
                      />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}