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
    catNameInHindi: "अपराध की दुनिया",
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
    catNameInHindi: "अपराध की दुनिया",
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
    catNameInHindi: "अपराध की दुनिया",
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
    catNameInHindi: "अपराध की दुनिया",
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

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-6 md:py-8">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Heading */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] border-l-4 border-black pl-3 sm:pl-4 bg-gradient-to-r from-purple-50 to-transparent py-2 mb-5 md:mb-4 lg:mb-4">
            अवश्य पढ़ें
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-2 lg:ml-1">
            {GetCyberCrimeNewsList.map((news) => (
              <article
                key={news.newsId}
                className="group bg-white overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <Link href={`/${news.newsSlug}`} className="flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={`https://mapi.sadaivsatya.com${news.thumbnail}`}
                      alt={news.newsHeading}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16.66vw"
                      className="object-cover"
                      priority={news.newsId === 10108927}
                    />
                  </div>

                  {/* Content Container - Compact Spacing */}
                  <div className="p-2.5 md:p-3 flex flex-col flex-grow">
                    {/* Date and View Count */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <time 
                        className="text-[10px] md:text-[11px] text-gray-500 truncate font-medium" 
                        dateTime={news.updatedDate}
                      >
                        {formatDate(news.updatedDate)}
                      </time>
                      <ViewCount count={news.viewCount} />
                    </div>

                    {/* Headline */}
                    <h3 className="text-[13px] md:text-[17px] lg:text-[17px] font-bold text-[#1a1a1a] leading-[1.4] mb-2 transition-colors line-clamp-3 flex-grow">
                      <span className="text-[#FF554B] font-semibold">{news.newsTag}: </span>
                      <span className="font-semibold">{news.newsHeading}</span>
                    </h3>

                    {/* Centered Share Button */}
                    {/* <div className="flex justify-center items-center pt-2 border-t border-gray-100 mt-auto">
                      <ShareButtons
                        shareUrl={`/sports-news/news/${news.newsSlug}`}
                        size="small"
                      />
                    </div> */}
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