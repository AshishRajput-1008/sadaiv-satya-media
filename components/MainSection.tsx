"use client";

import { PT_Serif, Noto_Sans_Devanagari } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import digitalADV from "@/app/public/redApi.png";

import ShareButtons from "./ShareButtons";
import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "@/components/ViewCount";

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
    catNameInHindi: "खेल ",
    viewCount: 345,
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
    catNameInHindi: "खेल ",
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
    catNameInHindi: "खेल ",
    viewCount: 283,
  },
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
    (now.getTime() - date.getTime()) / (1000 * 60 * 60),
  );

  if (diffInHours < 1) return "अभी";
  if (diffInHours < 24) return `${diffInHours} घंटे पहले`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} दिन पहले`;
};

export default function MainSection() {
  return (
    <div className={`${notoSansDevanagari.className} bg-white`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 md:py-8 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Sports News (Desktop only) */}
          <div className="hidden lg:block lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-black">
              खेल समाचार
            </h2>

            {/* Featured Sports News */}
            {sportsNews[0] && (
              <div className="mb-6">
                <div className="mb-3 overflow-hidden">
                  <Image
                    src={getImageUrl(sportsNews[0].thumbnail)}
                    alt={sportsNews[0].newsHeading}
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium text-[14px] my-2 mb-1 block">
                    {formatDate(sportsNews[0].updatedDate)}
                  </span>

                  {/* <ViewCount count={sportsNews[0].viewCount} /> */}
                </div>

                <h3 className="text-[18px] font-semibold text-gray-900 leading-1.3 mb-3 mt-1">
                  <span className="text-[#2563eb]">
                    {sportsNews[0].newsTag}:
                  </span>{" "}
                  {sportsNews[0].newsHeading}
                </h3>

                <div className="flex items-center justify-between text-xs">
                  <NewsMetaBar
                    variant="pill-arrow"
                    newsCategory={sportsNews[0].newsCategory}
                    newsCatinhindi={sportsNews[0].catNameInHindi}
                    newsSubCategory={sportsNews[0].newsSubCategory || ""}
                    newsSlug={sportsNews[0].newsSlug || ""}
                    accentColor="#2563eb"
                  />
                  <ShareButtons
                    shareUrl={`/sports-news/news/${sportsNews[0].newsSlug}`}
                    size="small"
                  />
                </div>
              </div>
            )}

            {/* Sports News List - Image on RIGHT with NewsMetaBar - Desktop */}
            <div className="space-y-5">
              {sportsNews.slice(1).map((news) => (
                <div key={news.newsId} className="block group">
                  <Link href={`/sports-news/news/${news.newsSlug}`}>
                    <div className="flex gap-3 mb-3">
                      {/* Content on Left */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between">
                          <p className="text-[11px] text-gray-500 mb-1 font-medium">
                            {formatDate(news.updatedDate)}
                          </p>
                          <p className="mb-1">
                            {" "}
                            {/* <ViewCount count={news.viewCount} /> */}
                          </p>
                        </div>

                        <h4 className="text-[16px] font-semibold text-gray-900 leading-[1.4] line-clamp-3 mt-1">
                          <span className="text-[#2563eb] font-semibold">
                            {news.newsTag}:
                          </span>{" "}
                          {news.newsHeading}
                        </h4>
                        <div className="mt-2">
                          <NewsMetaBar
                            variant="pill-arrow"
                            newsCategory={news.newsCategory}
                            newsCatinhindi={news.catNameInHindi}
                            newsSubCategory={news.newsSubCategory || ""}
                            newsSlug={news.newsSlug || ""}
                            accentColor="#2563eb"
                          />
                        </div>
                      </div>

                      {/* Image on Right */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-[120px] h-[100px] flex-shrink-0 overflow-hidden">
                          <Image
                            src={getImageUrl(news.thumbnail)}
                            alt={news.newsHeading}
                            fill
                            className="object-cover w-[120px] h-[90px]"
                          />
                        </div>
                        {/* Share buttons positioned below image */}
                        <ShareButtons
                          shareUrl={`/sports-news/news/${news.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* NewsMetaBar at Bottom */}
                </div>
              ))}
            </div>

            {/* Advertisement Section - Desktop Only */}
            <div className="mt-8 pt-6 border-t-2 border-gray-200">
              <img src={digitalADV.src} alt="Digital Marketing Advertisement" />
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
                <div className="flex items-center justify-between mb-3">
                  {/* NewsMetaBar at Bottom */}

                  <NewsMetaBar
                    variant="pill-arrow"
                    newsCategory={taazaKhabarNews[0].newsCategory}
                    newsCatinhindi={taazaKhabarNews[0].catNameInHindi}
                    newsSubCategory={taazaKhabarNews[0].newsSubCategory || ""}
                    newsSlug={taazaKhabarNews[0].newsSlug || ""}
                    accentColor="#0dbc90"
                  />
                  <ShareButtons
                    shareUrl={`/${taazaKhabarNews[0].newsSlug}`}
                    size="small"
                  />
                </div>
                <h3 className="text-lg md:text-[22px] font-semibold leading-tight mb-2">
                  <span className="text-[#d62875] mr-1">
                    {taazaKhabarNews[0].newsTag}:
                  </span>{" "}
                  <span className="text-gray-900">
                    {taazaKhabarNews[0].newsHeading}
                  </span>
                </h3>
              </div>
            )}

            {/* Desktop View - Image on RIGHT */}
            <div className="hidden md:block space-y-4">
              {taazaKhabarNews.slice(1).map((news) => (
                <Link
                  key={news.newsId}
                  href={`/taaza-halachal/news/${news.newsSlug}`}
                  className="block bg-white shadow-sm"
                >
                  <div className="flex p-0">
                    {/* Content on Left */}
                    <div className="flex-1 pr-4 py-3 flex flex-col">
                      {/* Top Section - Date and Views aligned left and right */}
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[13px] font-medium text-[#a4a7ad]">
                          {formatDate(news.updatedDate)}
                        </p>

                        <span className="flex items-center lg:mr-[6px] mt-[1px] gap-1.5 text-[13px] text-gray-400">
                          <svg
                            className="w-4 h-4 ml-[2px]"
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

                      {/* Middle Section - Tag and Heading vertically centered */}
                      <div className="flex-1 flex items-center mb-3">
                        <h3 className="text-[20px] md:text-[18px] font-semibold text-[#1a1a1a] leading-[1.4]">
                          <span className="text-[#d62875] mr-1">
                            {news.newsTag}:
                          </span>{" "}
                          <span className="text-gray-900">
                            {news.newsHeading}
                          </span>
                        </h3>
                      </div>

                      {/* Bottom Section - NewsMetaBar */}
                      <div className="flex justify-between text-[13px] text-gray-500 opacity-80">
                        <NewsMetaBar
                          variant="pill-arrow"
                          newsCategory={news.newsCategory}
                          newsCatinhindi={news.catNameInHindi}
                          newsSubCategory={news.newsSubCategory || ""}
                          newsSlug={news.newsSlug || ""}
                          accentColor="#f89c1b"
                        />

                        <ShareButtons
                          shareUrl={`/${news.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </div>

                    {/* Image on Right */}
                    <div className="relative w-[180px] h-[130px] flex-shrink-0">
                      <Image
                        src={`${baseImageUrl}${news.thumbnail}`}
                        alt={news.newsHeading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile View - Image on RIGHT - Using Khel Samachar Layout */}
            <div className="md:hidden space-y-4">
              {taazaKhabarNews.slice(1).map((news) => (
                <div
                  key={news.newsId}
                  className="bg-white p-3 rounded-lg shadow-sm"
                >
                  <Link
                    href={`/taaza-halachal/news/${news.newsSlug}`}
                    className="flex gap-3 mb-3"
                  >
                    {/* Content on Left */}
                    <div className="flex-1 flex flex-col">
                      {/* Date at top */}
                      <p className="text-[12px] text-gray-500 mb-2">
                        {formatDate(news.updatedDate)}
                      </p>

                      <h4 className="text-[18px] md:text-[14px] font-semibold text-gray-900 leading-[1.6] line-clamp-3">
                        <span className="text-[#d62875] font-semibold">
                          {news.newsTag}:
                        </span>{" "}
                        {news.newsHeading}
                      </h4>
                      <div className="mt-4">
                        <NewsMetaBar
                          variant="pill-arrow"
                          newsCategory={news.newsCategory}
                          newsCatinhindi={news.catNameInHindi}
                          newsSubCategory={news.newsSubCategory || ""}
                          newsSlug={news.newsSlug || ""}
                          accentColor="#0dbc90"
                        />
                      </div>
                    </div>

                    {/* Image on Right */}
                    <div className="flex flex-col items-center gap-2 mt-4">
                      <div className="relative w-[120px] h-[90px] flex-shrink-0 mt-2">
                        <Image
                          src={`${baseImageUrl}${news.thumbnail}`}
                          alt={news.newsHeading}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Share buttons positioned below image */}
                      <ShareButtons
                        shareUrl={`/${news.newsSlug}`}
                        size="small"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Business News (Desktop only) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className={`${ptSerif.className}`}>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-800">
                कारोबार
              </h2>

              {/* Business News List - Improved Design */}
              <div className="space-y-0">
                {business.map((news, index) => (
                  <Link
                    key={news.newsId}
                    href={`/business/news/${news.newsSlug}`}
                    className="block group"
                  >
                    <div
                      className={`py-5 ${
                        index < business.length - 1
                          ? "border-b border-gray-300"
                          : ""
                      }`}
                    >
                      {/* Metadata line */}
                      <div className="text-[13px] text-gray-600 mb-3 flex items-center flex-wrap gap-1">
                        <span className="font-medium">
                          {news.catNameInHindi}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span>{news.viewCount || "सिल्विउ मिहाई"} views</span>
                        <span className="text-gray-400">•</span>
                        <span>{formatDate(news.updatedDate)}</span>
                      </div>

                      {/* Headline - Bold, no tag */}
                      <h3 className="text-[16px] font-bold text-gray-900 leading-tight">
                        {news.newsHeading}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Entertainment Section (Rangeen Parda) - FIXED DESKTOP LAYOUT */}
            <div className="mt-6 pt-4">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-black">
                रंगीन पर्दा
              </h2>

              {/* Featured Entertainment News */}
              {entertainmentNews[0] && (
                <div className="mb-6">
                  <div className="mb-3 overflow-hidden">
                    <Image
                      src={getImageUrl(entertainmentNews[0].thumbnail)}
                      alt={entertainmentNews[0].newsHeading}
                      width={400}
                      height={250}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium text-[14px] my-2 block">
                      {formatDate(entertainmentNews[0].updatedDate)}
                    </span>
                    <p className="mt-[2px]">
                      {" "}
                      {/* <ViewCount count={entertainmentNews[0].viewCount} /> */}
                    </p>
                  </div>

                  <h3 className="text-[18px] font-semibold text-gray-900 leading-1.3 mb-3">
                    <span className="text-[#83b82e]">
                      {entertainmentNews[0].newsTag}:
                    </span>{" "}
                    {entertainmentNews[0].newsHeading}
                  </h3>

                  <div className="flex items-center justify-between text-xs">
                    <NewsMetaBar
                      variant="pill-arrow"
                      newsCategory={entertainmentNews[0].newsCategory}
                      newsCatinhindi={entertainmentNews[0].catNameInHindi}
                      newsSubCategory={
                        entertainmentNews[0].newsSubCategory || ""
                      }
                      newsSlug={entertainmentNews[0].newsSlug || ""}
                      accentColor="#d62875"
                    />
                    <ShareButtons
                      shareUrl={`/colorful-curtains/news/${entertainmentNews[0].newsSlug}`}
                      size="small"
                    />
                  </div>
                </div>
              )}

              {/* Entertainment News List - Image on RIGHT with NewsMetaBar - Desktop */}
              <div className="space-y-5">
                {entertainmentNews.slice(1).map((news) => (
                  <div key={news.newsId} className="block group">
                    <Link href={`/colorful-curtains/news/${news.newsSlug}`}>
                      <div className="flex gap-3 mb-3">
                        {/* Content on Left */}
                        <div className="flex-1 flex flex-col">
                          {/* <p className="text-[10px] text-gray-500 mb-2">
                            {formatDate(news.updatedDate)}
                          </p> */}

                          <div className="flex justify-between">
                            <p className="text-[12px] text-gray-500 mb-2 font-medium">
                              {formatDate(news.updatedDate)}
                            </p>
                            {/* <p className="">
                              {" "}
                              <ViewCount
                                count={entertainmentNews[0].viewCount}
                              />
                            </p> */}
                          </div>

                          <h4 className="text-[16px] font-semibold text-gray-900 leading-[1.4] line-clamp-3">
                            <span className="text-[#83b82e] font-semibold">
                              {news.newsTag}:
                            </span>{" "}
                            {news.newsHeading}
                          </h4>
                          <div className="mt-2">
                            <NewsMetaBar
                              variant="pill-arrow"
                              newsCategory={news.newsCategory}
                              newsCatinhindi={news.catNameInHindi}
                              newsSubCategory={news.newsSubCategory || ""}
                              newsSlug={news.newsSlug || ""}
                              accentColor="#d62875"
                            />
                          </div>
                        </div>

                        {/* Image on Right */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="relative w-[110px] h-[100px] flex-shrink-0 overflow-hidden">
                            <Image
                              src={getImageUrl(news.thumbnail)}
                              alt={news.newsHeading}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {/* Share buttons positioned below image */}
                          <ShareButtons
                            shareUrl={`/colorful-curtains/news/${news.newsSlug}`}
                            size="small"
                          />
                        </div>
                      </div>
                    </Link>
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
                  <div className="mb-3">
                    <Image
                      src={getImageUrl(sportsNews[0].thumbnail)}
                      alt={sportsNews[0].newsHeading}
                      width={400}
                      height={250}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>

                  <h3 className="text-[20px] font-bold text-black leading-tight mb-3 mt-1">
                    <span className="text-[#2563eb] mr-[2px]">
                      {sportsNews[0].newsTag}:
                    </span>{" "}
                    {sportsNews[0].newsHeading}
                  </h3>

                  {/* NewsMetaBar at bottom */}
                  <div className="flex justify-between">
                    {/* Date at top */}
                    <p className="text-[12px] text-gray-500 mb-2">
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
                {sportsNews.slice(1).map((news) => (
                  <div
                    key={news.newsId}
                    className="bg-white p-3 rounded-lg shadow-sm"
                  >
                    <Link
                      href={`/sports-news/news/${news.newsSlug}`}
                      className="flex gap-3 mb-3"
                    >
                      {/* Content on Left */}
                      <div className="flex-1 flex flex-col">
                        {/* Date at top */}
                        <p className="text-[13px] text-gray-500 mb-2">
                          {formatDate(news.updatedDate)}
                        </p>

                        <h4 className="text-[18px] font-semibold text-gray-900 leading-[1.6] line-clamp-3">
                          <span className="text-[#2563eb] font-semibold">
                            {news.newsTag}:
                          </span>{" "}
                          {news.newsHeading}
                        </h4>
                        <div className="mt-4">
                          <NewsMetaBar
                            variant="pill-arrow"
                            newsCategory={news.newsCategory}
                            newsCatinhindi={news.catNameInHindi}
                            newsSubCategory={news.newsSubCategory || ""}
                            newsSlug={news.newsSlug || ""}
                            accentColor="#2563eb"
                          />
                        </div>
                      </div>

                      {/* Image on Right */}
                      <div className="flex flex-col items-center gap-2 mt-4">
                        <div className="relative w-[120px] h-[90px] flex-shrink-0 mt-2">
                          <Image
                            src={getImageUrl(news.thumbnail)}
                            alt={news.newsHeading}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Share buttons positioned below image */}
                        <ShareButtons
                          shareUrl={`/sports-news/news/${news.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </Link>
                  </div>
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

            {/* Entertainment - Mobile - FIXED LAYOUT */}
            <div>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-black">
                रंगीन पर्दा
              </h2>

              {/* Featured Entertainment Card - Mobile */}
              {entertainmentNews[0] && (
                <div className="mb-6">
                  <div className="mb-3">
                    <Image
                      src={getImageUrl(entertainmentNews[0].thumbnail)}
                      alt={entertainmentNews[0].newsHeading}
                      width={400}
                      height={250}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>

                  {/* Date at top */}
                  <p className="text-[14px] text-gray-500 mb-2">
                    {formatDate(entertainmentNews[0].updatedDate)}
                  </p>

                  <h3 className="text-[20px] font-bold text-black leading-1.4 mb-3">
                    <span className="text-[#83b82e] mr-[2px]">
                      {entertainmentNews[0].newsTag}:
                    </span>{" "}
                    {entertainmentNews[0].newsHeading}
                  </h3>

                  {/* NewsMetaBar at bottom */}
                  <div className="flex justify-between">
                    <NewsMetaBar
                      variant="pill-arrow"
                      newsCategory={entertainmentNews[0].newsCategory}
                      newsCatinhindi={entertainmentNews[0].catNameInHindi}
                      newsSubCategory={
                        entertainmentNews[0].newsSubCategory || ""
                      }
                      newsSlug={entertainmentNews[0].newsSlug || ""}
                      accentColor="#d62875"
                    />
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
                  <div
                    key={news.newsId}
                    className="bg-white p-3 rounded-lg shadow-sm"
                  >
                    <Link
                      href={`/colorful-curtains/news/${news.newsSlug}`}
                      className="flex gap-3 mb-3"
                    >
                      {/* Content on Left */}
                      <div className="flex-1 flex flex-col">
                        {/* Date at top */}
                        <p className="text-[13px] text-gray-500 mb-2">
                          {formatDate(news.updatedDate)}
                        </p>

                        <h4 className="text-[18px] font-semibold text-gray-900 leading-[1.4] line-clamp-3">
                          <span className="text-[#83b82e] font-semibold">
                            {news.newsTag}:
                          </span>{" "}
                          {news.newsHeading}
                        </h4>
                        <div className="mt-4">
                          <NewsMetaBar
                            variant="pill-arrow"
                            newsCategory={news.newsCategory}
                            newsCatinhindi={news.catNameInHindi}
                            newsSubCategory={news.newsSubCategory || ""}
                            newsSlug={news.newsSlug || ""}
                            accentColor="#d62875"
                          />
                        </div>
                      </div>

                      {/* Image on Right */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-[120px] h-[90px] flex-shrink-0">
                          <Image
                            src={getImageUrl(news.thumbnail)}
                            alt={news.newsHeading}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Share buttons positioned below image */}
                        <ShareButtons
                          shareUrl={`/colorful-curtains/news/${news.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
