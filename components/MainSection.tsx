"use client";

import { PT_Serif, Noto_Sans_Devanagari } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import ShareButtons from "./ShareButtons";

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });

const business = [
  {
    newsId: 10109074,
    newsTag: "India-US Trade Deal",
    newsHeading: "नए अमेरिकी राजदूत सर्जियो गोर का बड़ा बयान",
    newsHeadingTwo: null,
    newsCategory: "Business",
    newsSubCategory: "International Business",
    newsSlug:
      "india-us-trade-deal-talks-resume-sergio-gor-modi-trump-friendship-10109074.html",
    thumbnail: "/Media/NewsImage/2lt1wiu2ig0.webp",
    updatedDate: "2026-01-13T15:35:11.693",
    catNameInHindi: "कारोबार",
    subCatNameInHindi: null,
    viewCount: 652,
    author: "सिल्विउ मिहाई",
  },
  {
    newsId: 10107667,
    newsTag: "सोना-चांदी बेकाबू",
    newsHeading: "MCX पर सोना-चांदी में जोरदार उछाल",
    newsHeadingTwo: null,
    newsCategory: "Business",
    newsSubCategory: "Retail & E-commerce",
    newsSlug:
      "gold-silver-price-surge-us-venezuela-tension-experts-analysis-10107667.html",
    thumbnail: "/Media/NewsImage/yoobzqjdlnl.webp",
    updatedDate: "2026-01-07T14:39:43.157",
    catNameInHindi: "कारोबार",
    subCatNameInHindi: null,
    viewCount: 838,
    author: "सिल्विउ मिहाई",
  },
  {
    newsId: 10107562,
    newsTag: "Venezuela Oil-Gold Treasure",
    newsHeading: "क्या संसाधनों के लिए बढ़ा वैश्विक टकराव?",
    newsHeadingTwo: null,
    newsCategory: "Business",
    newsSubCategory: "International Business",
    newsSlug:
      "venezuela-oil-gold-treasure-trump-eye-on-resources-10107562.html",
    thumbnail: "/Media/NewsImage/04xj201m5d4.webp",
    updatedDate: "2026-01-07T12:03:29.27",
    catNameInHindi: "कारोबार",
    subCatNameInHindi: null,
    viewCount: 733,
    author: "सिल्विउ मिहाई",
  },
  {
    newsId: 10106953,
    newsTag: "रुपया कमजोर, डॉलर के मुकाबले बड़ी गिरावट",
    newsHeading: "RBI क्यों नहीं कर रहा हस्तक्षेप?",
    newsHeadingTwo: null,
    newsCategory: "Business",
    newsSubCategory: "International Business",
    newsSlug:
      "rupee-slips-against-dollar-may-touch-100-rbi-strategy-explained-10106953.html",
    thumbnail: "/Media/NewsImage/2zz1gc3uo04.webp",
    updatedDate: "2026-01-03T13:12:34.54",
    catNameInHindi: "कारोबार",
    subCatNameInHindi: null,
    viewCount: 387,
    author: "सिल्विउ मिहाई",
  },
];

const taazaKhabarNews = [
  {
    newsId: 10108759,
    newsTag: "सतारा में दिल दहला देने वाला दृश्य",
    newsHeading: "स्ट्रेचर पर पत्नी देख फफक पड़े लोग",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "satara-newborn-daughter-farewell-martyred-army-jawan-pramod-jadhav-10108759.html",
    thumbnail: "/Media/NewsImage/s24tdvceupc.webp",
    updatedDate: "2026-01-12T15:03:51.527",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 635,
  },
  {
    newsId: 10108633,
    newsTag: "16 मौतों के जिम्मेदार कौन",
    newsHeading: "दूषित पानी से इंदौर में 16 मौतें, जनता में आक्रोश",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "indore-bhagirathpura-water-contamination-16-deaths-action-demanded-10108633.html",
    thumbnail: "/Media/NewsImage/ehx2t5gdpgb.webp",
    updatedDate: "2026-01-12T14:10:45.47",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 628,
  },
  {
    newsId: 10108465,
    newsTag: "कटनी में शुद्ध जल का दावा खोखला",
    newsHeading: "इंदौर हादसे के बाद भी कटनी में सबक नहीं",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "katni-contaminated-drinking-water-tds-levels-health-risk-10108465.html",
    thumbnail: "/Media/NewsImage/1n5mgk3svh2.webp",
    updatedDate: "2026-01-10T14:23:57.497",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 343,
  },
  {
    newsId: 10109200,
    newsTag: "गिग वर्कर्स की सुरक्षा को प्राथमिकता",
    newsHeading: "श्रम मंत्री मनसुख मांडविया की सख्ती के बाद",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "10-minute-delivery-stopped-blinkit-zepto-swiggy-zomato-10109200.html",
    thumbnail: "/Media/NewsImage/bscz0rbuvaf.webp",
    updatedDate: "2026-01-13T16:46:01.22",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 325,
  },
  {
    newsId: 10109179,
    newsTag: "श्रीहरिकोटा से PSLV-C62 की 64वीं उड़ान",
    newsHeading: "लगातार दूसरी बार सैटेलाइट लॉन्च में नाकामी",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "isro-pslv-c62-mission-failure-second-consecutive-launch-setback-10109179.html",
    thumbnail: "/Media/NewsImage/dvfaosjoaea.webp",
    updatedDate: "2026-01-13T16:27:42.163",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 632,
  },
];

const sportsNews = [
  {
    newsId: 10108381,
    newsTag: "WPL 2026 का आगाज",
    newsHeading: "22 मैच, 5 टीमें और नया जोश",
    newsCategory: "Sports News",
    newsSubCategory: "Cricket",
    newsSlug:
      "wpl-2026-begins-rcb-beat-mi-by-3-wickets-opening-match-10108381.html",
    thumbnail: "/Media/NewsImage/fzpemds2vbv.webp",
    updatedDate: "2026-01-10T13:13:00.15",
    catNameInHindi: "खेल समाचार",
    viewCount: 345,
  },
  {
    newsId: 10107940,
    newsTag: "प्यारा क्रिकेटिंग पल",
    newsHeading: "वीडियो हुआ वायरल",
    newsCategory: "Sports News",
    newsSubCategory: "Cricket",
    newsSlug:
      "arjun-tendulkar-birthday-yograj-singh-dance-video-viral-10107940.html",
    thumbnail: "/Media/NewsThumb/nihondg2ogq.gif",
    updatedDate: "2026-01-08T14:01:49.847",
    catNameInHindi: "खेल समाचार",
    viewCount: 1133,
  },
  {
    newsId: 10107709,
    newsTag: "चुनाव आयोग की 'गुगली' में फंसे शमी",
    newsHeading: "क्रिकेट पिच से कानूनी पिच तक",
    newsCategory: "Sports News",
    newsSubCategory: "Cricket",
    newsSlug: "mohammed-shami-election-commission-sir-notice-10107709.html",
    thumbnail: "/Media/NewsImage/w1f0dnkie2e.webp",
    updatedDate: "2026-01-07T15:34:30.913",
    catNameInHindi: "खेल समाचार",
    viewCount: 695,
  },
  {
    newsId: 10107226,
    newsTag: "प्रेमानंद महाराज",
    newsHeading: "अभ्यास और समर्पण पर मिली जीवन बदलने वाली सीख",
    newsCategory: "Sports News",
    newsSubCategory: "Cricket",
    newsSlug:
      "deepti-sharma-premanand-maharaj-blessings-after-2025-womens-cricket-world-cup-10107226.html",
    thumbnail: "/Media/NewsImage/qeuuynxk3jl.webp",
    updatedDate: "2026-01-05T16:40:25.43",
    catNameInHindi: "खेल समाचार",
    viewCount: 283,
  },
  // {
  //   newsId: 10108675,
  //   newsTag: "बनारसी बोली में PM मोदी का दिल जीतता पल",
  //   newsHeading: "72वीं नेशनल वॉलीबॉल चैंपियनशिप का वर्चुअल उद्घाटन",
  //   newsCategory: "Sports News",
  //   newsSubCategory: "Tournament Updates",
  //   newsSlug:
  //     "pm-modi-banarasi-boli-national-volleyball-championship-varanasi-10108675.html",
  //   thumbnail: "/Media/NewsThumb/nx4luicbrfd.gif",
  //   updatedDate: "2026-01-12T14:24:24.703",
  //   catNameInHindi: "खेल समाचार",
  //   viewCount: 645,
  // },
];

const entertainmentNews = [
  {
    newsId: 10109116,
    newsTag: "यश की 'टॉक्सिक' बनी",
    newsHeading: "'टॉक्सिक' का टीजर रिलीज होते ही मचा बवाल",
    newsCategory: "Colorful Curtains",
    newsSubCategory: "Bollywood",
    newsSlug:
      "toxic-movie-akshay-oberoi-toughest-role-yash-teaser-controversy-10109116.html",
    thumbnail: "/Media/NewsImage/4ezsqg2lq5w.webp",
    updatedDate: "2026-01-13T16:02:59.187",
    catNameInHindi: "रंगीन पर्दा",
    viewCount: 630,
  },
  {
    newsId: 10108780,
    newsTag: "गोल्डन ग्लोब अवॉर्ड्स 2026",
    newsHeading: "'वन बैटल आफ्टर अनदर' और 'एडोलसेंस' का जलवा",
    newsCategory: "Colorful Curtains",
    newsSubCategory: "Hollywood",
    newsSlug: "golden-globe-awards-2026-winners-full-list-10108780.html",
    thumbnail: "/Media/NewsImage/5uey4qo1omb.webp",
    updatedDate: "2026-01-12T15:48:18.74",
    catNameInHindi: "रंगीन पर्दा",
    viewCount: 648,
  },
  {
    newsId: 10108318,
    newsTag: "'किस किसको प्यार करूं 2'",
    newsHeading: "फ्लॉप कलेक्शन और कम स्क्रीन्स ने मेकर्स को किया मजबूर",
    newsCategory: "Colorful Curtains",
    newsSubCategory: "Bollywood",
    newsSlug:
      "kis-kis-ko-pyaar-karoon-2-re-release-cancelled-box-office-10108318.html",
    thumbnail: "/Media/NewsImage/blqcl1htdrl.webp",
    updatedDate: "2026-01-09T16:40:58.98",
    catNameInHindi: "रंगीन पर्दा",
    viewCount: 353,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("hi-IN", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

const getImageUrl = (thumbnail: string) => {
  return `https://mapi.sadaivsatya.com${thumbnail}`;
};

const baseImageUrl = "https://mapi.sadaivsatya.com";

const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 1) return "अभी";
  if (diffInHours < 24) return `${diffInHours} घंटे पहले`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} दिन पहले`;
};

export default function Home() {
  return (
    <div className={`${notoSansDevanagari.className} bg-white`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Sports News (Desktop only) */}
          <div className="hidden lg:block lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-black">
              खेल समाचार
            </h2>

            {/* Featured Sports News */}
            {sportsNews[0] && (
              <div className="mb-8">
                <div className="mb-4">
                  <Image
                    src={getImageUrl(sportsNews[0].thumbnail)}
                    alt={sportsNews[0].newsHeading}
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="text-xs text-gray-600 mb-2 flex items-center justify-between">
                  <span className="bg-gray-200 px-2 py-1 mr-2">
                    {sportsNews[0].catNameInHindi}
                  </span>
                  <span>{getTimeAgo(sportsNews[0].updatedDate)}</span>
                </div>

                <div
                  style={{ marginTop: "14px" }}
                  className="text-[18px] font-medium text-black transition-colors leading-snug line-clamp-3 lg:line-clamp-2"
                >
                  <span className="text-gray-700  mr-[2px] font-bold">
                    {sportsNews[0].newsTag}:
                  </span>{" "}
                  {sportsNews[0].newsHeading}
                </div>

                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 justify-between">
                  <span className="text-gray-800  mt-2 text-[16px]">
                    {formatDate(sportsNews[0].updatedDate)}
                  </span>
                  <ShareButtons
                    shareUrl={`/sports-news/news/${sportsNews[0].newsSlug}`}
                    size="small"
                  />
                </div>
              </div>
            )}

            {/* Sports News List - Image on RIGHT with Share Button - Desktop */}
            <div className="space-y-4">
              {sportsNews.slice(1, 5).map((news) => (
                <Link
                  key={news.newsId}
                  href={`/sports-news/news/${news.newsSlug}`}
                  className="flex gap-3"
                >
                  {/* Content on Left */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] text-slate-600 font-medium">
                        {news.catNameInHindi}
                      </span>
                      <h4 className="text-[14px] font-semibold mt-2 space-y-1">
                        {/* TAG — strictly max 2 lines */}
                        <span
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            lineHeight: "1.4",
                          }}
                          className="block text-cyan-600"
                        >
                          {news.newsTag}:
                        </span>

                        {/* HEADING — strictly max 2 lines */}
                        <span
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            lineHeight: "1.4",
                          }}
                          className="block text-gray-900"
                        >
                          {news.newsHeading}
                        </span>
                      </h4>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1">
                      {formatDate(news.updatedDate)}
                    </p>
                  </div>
                  {/* Image and Share Button on Right */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-[120px] h-[90px] flex-shrink-0 mb-2">
                      <Image
                        src={getImageUrl(news.thumbnail)}
                        alt={news.newsHeading}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <ShareButtons
                      shareUrl={`/sports-news/news/${news.newsSlug}`}
                      size="small"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Advertisement Section - Desktop Only */}
            <div className="mt-6 border-t-2 border-gray-300 pt-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg shadow-md border border-blue-100">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    PayzonIndia
                  </h3>
                  <p className="text-sm text-blue-700 font-semibold">
                    Digital India Marketing
                  </p>
                </div>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>डिजिटल मार्केटिंग सेवाएं</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>SEO & सोशल मीडिया</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>ब्रांड प्रमोशन</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  अभी संपर्क करें
                </button>

                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600">
                    🚀 अपने बिजनेस को बढ़ाएं
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Breaking News */}
          <div className="col-span-1 lg:col-span-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b-2 border-black">
              ताजा खबर
            </h2>

            {/* Featured Breaking News */}
            {taazaKhabarNews[0] && (
              <div className="mb-4 md:mb-6">
                <Image
                  src={getImageUrl(taazaKhabarNews[0].thumbnail)}
                  alt={taazaKhabarNews[0].newsHeading}
                  width={800}
                  height={400}
                  className="w-full h-[250px] md:h-[380px] object-cover mb-4"
                />
                <div className="flex text-xs md:text-[14px] text-gray-600 mb-2 justify-between">
                  <span className="px-2 py-1 mr-1 pl-0 text-slate-500 font-bold rounded-full">
                    {taazaKhabarNews[0].catNameInHindi}:
                    <span className="text-black ml-2">
                      {getTimeAgo(taazaKhabarNews[0].updatedDate)}
                    </span>
                  </span>

                  <span>
                    <ShareButtons
                      shareUrl={`/taaza-halachal/news/${taazaKhabarNews[0].newsSlug}`}
                      size="small"
                    />
                  </span>
                </div>
                <h3 className="text-lg md:text-2xl font-medium leading-tight mb-2 mt-2">
                  <span className="text-[#000000] mr-[2px]">
                    {taazaKhabarNews[0].newsTag}:
                  </span>{" "}
                  {taazaKhabarNews[0].newsHeading}
                </h3>
              </div>
            )}

            {/* Desktop View - Image on RIGHT */}
            <div className="hidden md:block space-y-4">
              {taazaKhabarNews.slice(1).map((news) => (
                <Link
                  key={news.newsId}
                  href={`/taaza-halachal/news/${news.newsSlug}`}
                  className="block bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex p-2">
                    {/* Content on Left */}
                    <div className="flex-1 mr-4 flex flex-col">
                      <div className="inline-flex w-fit">
                        <span className="text-[13px] text-slate-800 rounded-full font-medium mb-2">
                          {news.catNameInHindi}
                        </span>
                      </div>
                      <h3 className="text-[18px] font-medium text-[#1a1a1a] leading-[1.4] mb-2">
                        <span className="text-stone-500 mr-[2px]">
                          {news.newsTag}:
                        </span>{" "}
                        {news.newsHeading}
                      </h3>
                      <div className="flex items-center gap-2 text-[13px] text-[#666] justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-[#999]">
                            {formatDate(news.updatedDate)}
                          </span>
                          <span className="text-[#ccc]">•</span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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
                            {news.viewCount}
                          </span>
                        </div>
                        <ShareButtons
                          shareUrl={`/taaza-halachal/news/${news.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </div>

                    {/* Image on Right */}
                    <div className="relative w-[180px] h-[110px] flex-shrink-0">
                      <Image
                        src={`${baseImageUrl}${news.thumbnail}`}
                        alt={news.newsHeading}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile View - Image on RIGHT */}
            <div className="md:hidden space-y-4">
              {taazaKhabarNews.slice(1).map((news) => (
                <Link
                  key={news.newsId}
                  href={`/taaza-halachal/news/${news.newsSlug}`}
                  className="flex gap-3 bg-white"
                >
                  {/* Content on Left */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] text-slate-600 font-medium">
                        {news.catNameInHindi}
                      </span>
                      <h3
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                        className="text-[14px] font-semibold text-[#1a1a1a] leading-tight mt-1 overflow-hidden"
                      >
                        <span className="text-stone-500 mr-[2px]">
                          {news.newsTag}:
                        </span>{" "}
                        {news.newsHeading}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-[11px] text-gray-500">
                        {formatDate(news.updatedDate)}
                      </p>
                      <ShareButtons
                        shareUrl={`/taaza-halachal/news/${news.newsSlug}`}
                        size="small"
                      />
                    </div>
                  </div>

                  {/* Image on Right */}
                  <div className="relative w-[120px] h-[90px] flex-shrink-0">
                    <Image
                      src={`${baseImageUrl}${news.thumbnail}`}
                      alt={news.newsHeading}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Business News (Desktop only) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className={`${ptSerif.className}`}>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-black">
                कारोबार
              </h2>

              {/* Business News List - Exact Image Design */}
              <div className="space-y-0">
                {business.map((news, index) => (
                  <Link
                    key={news.newsId}
                    href={`/business/news/${news.newsSlug}`}
                    className="block"
                  >
                    <div
                      className={`py-4 ${
                        index < business.length - 1
                          ? "border-b border-dotted border-gray-400"
                          : ""
                      }`}
                    >
                      {/* Metadata line */}
                      <div className="text-[12px] text-gray-600 mb-3">
                        <span>{news.catNameInHindi}</span>
                        <span className="mx-1">|</span>
                        <span>{news.author || "सिल्विउ मिहाई"}</span>
                        <span className="mx-1">-</span>
                        <span>{formatDate(news.updatedDate)}</span>
                      </div>

                      {/* Headline - Bold, no tag */}
                      <h3 className="text-[16px] font-bold text-black leading-tight hover:text-gray-700 transition-colors">
                        {news.newsHeading}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Entertainment Section (Rangeen Parda) */}
            <div className="mt-10 pt-6 border-t-2 border-black">
              <h2 className="text-2xl font-bold mb-6 pb-2">रंगीन पर्दा</h2>

              <div className="flex items-center justify-center mb-8">
                <Image
                  src={getImageUrl(entertainmentNews[0].thumbnail)}
                  alt="Culture logo"
                  width={300}
                  height={150}
                  className="w-58 h-auto"
                />
              </div>

              <div className="space-y-5">
                {entertainmentNews.map((news) => (
                  <div key={news.newsId} className="flex gap-3">
                    {/* Content on Left */}
                    <div className="flex-1">
                      <div className="text-[10px] text-gray-600 mb-2">
                        <span className="bg-gray-200 px-1.5 py-0.5">
                          {news.catNameInHindi}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold leading-tight">
                        <span className="text-[#0f86f5] mr-[2px]">
                          {news.newsTag}:
                        </span>{" "}
                        {news.newsHeading}
                      </h4>
                      <p className="text-[10px] text-gray-600 mt-1">
                        {getTimeAgo(news.updatedDate)}
                      </p>
                    </div>
                    {/* Image and Share Button on Right */}
                    <div className="flex flex-col items-center">
                      <Image
                        src={getImageUrl(news.thumbnail)}
                        alt={news.newsHeading}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover flex-shrink-0 mb-2"
                      />
                      <ShareButtons
                        shareUrl={`/colorful-curtains/news/${news.newsSlug}`}
                        size="small"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile-only sections - Image on RIGHT */}
          <div className="lg:hidden col-span-1 space-y-8 mt-8">
            {/* Sports News - Mobile */}
            <div>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-black">
                खेल समाचार
              </h2>

              {/* Featured Sports Card - Mobile */}
              {sportsNews[0] && (
                <div className="mb-6">
                  <Image
                    src={getImageUrl(sportsNews[0].thumbnail)}
                    alt={sportsNews[0].newsHeading}
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-cover rounded mb-3"
                  />
                  <span className="text-[11px] text-slate-600 font-medium">
                    {sportsNews[0].catNameInHindi}
                  </span>
                  <h3 className="text-[16px] font-bold text-black leading-tight mt-2 mb-2">
                    <span className="text-stone-600 mr-[2px]">
                      {sportsNews[0].newsTag}:
                    </span>{" "}
                    {sportsNews[0].newsHeading}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] text-gray-500">
                      {formatDate(sportsNews[0].updatedDate)}
                    </p>
                    <ShareButtons
                      shareUrl={`/sports-news/news/${sportsNews[0].newsSlug}`}
                      size="small"
                    />
                  </div>
                </div>
              )}

              {/* Horizontal Sports Cards - Mobile */}
              <div className="space-y-4">
                {sportsNews.slice(1, 5).map((news) => (
                  <Link
                    key={news.newsId}
                    href={`/sports-news/news/${news.newsSlug}`}
                    className="flex gap-3"
                  >
                    {/* Content on Left */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] text-slate-600 font-medium">
                          {news.catNameInHindi}
                        </span>
                        <h4
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                          className="text-[14px] font-semibold leading-tight mt-1 overflow-hidden"
                        >
                          <span className="text-stone-600 mr-[2px]">
                            {news.newsTag}:
                          </span>{" "}
                          {news.newsHeading}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-[11px] text-gray-500">
                          {formatDate(news.updatedDate)}
                        </p>
                        <ShareButtons
                          shareUrl={`/sports-news/news/${news.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </div>
                    {/* Image on Right */}
                    <div className="relative w-[120px] h-[90px] flex-shrink-0">
                      <Image
                        src={getImageUrl(news.thumbnail)}
                        alt={news.newsHeading}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Business News - Mobile with PT Serif font */}
            <div className={`${ptSerif.className}`}>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-black">
                कारोबार
              </h2>

              {/* Business News List - Mobile - Exact Same Design */}
              <div className="space-y-0">
                {business.map((news, index) => (
                  <Link
                    key={news.newsId}
                    href={`/business/news/${news.newsSlug}`}
                    className="block"
                  >
                    <div
                      className={`py-4 ${
                        index < business.length - 1
                          ? "border-b border-dotted border-gray-400"
                          : ""
                      }`}
                    >
                      {/* Metadata line */}
                      <div className="text-[12px] text-gray-600 mb-3">
                        <span>{news.catNameInHindi}</span>
                        <span className="mx-1">|</span>
                        <span>{news.author || "सिल्विउ मिहाई"}</span>
                        <span className="mx-1">-</span>
                        <span>{formatDate(news.updatedDate)}</span>
                      </div>

                      {/* Headline - Bold, no tag */}
                      <h3 className="text-[16px] font-bold text-black leading-tight">
                        {news.newsHeading}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Entertainment - Mobile */}
            <div>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-black">
                रंगीन पर्दा
              </h2>

              {/* Featured Entertainment Card - Mobile */}
              {entertainmentNews[0] && (
                <div className="mb-6">
                  <Image
                    src={getImageUrl(entertainmentNews[0].thumbnail)}
                    alt={entertainmentNews[0].newsHeading}
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-cover rounded mb-3"
                  />
                  <span className="text-[11px] text-slate-600 font-medium">
                    {entertainmentNews[0].catNameInHindi}
                  </span>
                  <h3 className="text-[16px] font-bold text-black leading-tight mt-2 mb-2">
                    <span className="text-[#0f86f5] mr-[2px]">
                      {entertainmentNews[0].newsTag}:
                    </span>{" "}
                    {entertainmentNews[0].newsHeading}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] text-gray-500">
                      {formatDate(entertainmentNews[0].updatedDate)}
                    </p>
                    <ShareButtons
                      shareUrl={`/colorful-curtains/news/${entertainmentNews[0].newsSlug}`}
                      size="small"
                    />
                  </div>
                </div>
              )}

              {/* Horizontal Entertainment Cards - Mobile */}
              <div className="space-y-4">
                {entertainmentNews.slice(1).map((news) => (
                  <Link
                    key={news.newsId}
                    href={`/colorful-curtains/news/${news.newsSlug}`}
                    className="flex gap-3"
                  >
                    {/* Content on Left */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] text-slate-600 font-medium">
                          {news.catNameInHindi}
                        </span>
                        <h4
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                          className="text-[14px] font-semibold leading-tight mt-2 overflow-hidden"
                        >
                          <span className="text-[#0f86f5] mr-[2px]">
                            {news.newsTag}:
                          </span>{" "}
                          {news.newsHeading}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-[11px] text-gray-500">
                          {formatDate(news.updatedDate)}
                        </p>
                        <ShareButtons
                          shareUrl={`/colorful-curtains/news/${news.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </div>
                    {/* Image on Right */}
                    <div className="relative w-[120px] h-[90px] flex-shrink-0">
                      <Image
                        src={getImageUrl(news.thumbnail)}
                        alt={news.newsHeading}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
