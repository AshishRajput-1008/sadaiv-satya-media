"use client";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "./ViewCount";
import payzoneapi from "@/app/public/advImages/vericationADV.png"

// Sadaiv Vishesh (Always Special) articles data
const sadaivVisheshArticles = [
  {
    newsId: 10109305,
    newsTag: "क्या है शक्सगाम घाटी और कहां स्थित है?",
    newsHeading: "1963 के अवैध समझौते से सड़क निर्माण तक",
    newsHeadingTwo: "जानिए पूरा विवाद",
    newsCategory: "India",
    newsSubCategory: "National Issues",
    newsSlug: "shaksgam-valley-india-china-dispute-10109305.html",
    thumbnail: "/Media/NewsImage/303ppe4w2br.webp",
    updatedDate: "2026-01-14T14:34:56.73",
    catNameInHindi: "भारत ",
    subCatNameInHindi: null,
    viewCount: 330,
  },
  {
    newsId: 10109032,
    newsTag: "लोहड़ी पर्व",
    newsHeading: "श्रीकृष्ण से दुल्ला भट्टी तक आस्था",
    newsHeadingTwo: "कृषि और लोकपरंपराओं की अनोखी गाथा",
    newsCategory: "India",
    newsSubCategory: "Indian Culture",
    newsSlug:
      "lohri-festival-significance-history-krishna-dulla-bhatti-10109032.html",
    thumbnail: "/Media/NewsImage/sprgemt505c.webp",
    updatedDate: "2026-01-13T15:03:49.707",
    catNameInHindi: "भारत ",
    subCatNameInHindi: null,
    viewCount: 639,
  },
  {
    newsId: 10108990,
    newsTag: "ट्रंप का टैरिफ बम",
    newsHeading: "भारत समेत दुनिया में बढ़ी चिंता",
    newsHeadingTwo: "अंतिम और निर्णायक आदेश – ट्रंप प्रशासन",
    newsCategory: "India",
    newsSubCategory: "Economy",
    newsSlug:
      "trump-25-percent-tariff-countries-trading-with-iran-india-impact-10108990.html",
    thumbnail: "/Media/NewsImage/r1ni1w0lk3i.webp",
    updatedDate: "2026-01-13T14:38:03.807",
    catNameInHindi: "भारत ",
    subCatNameInHindi: null,
    viewCount: 641,
  },
  {
    newsId: 10108948,
    newsTag: "इटली की लुक्रेशिया बनी सनातन की साधिका",
    newsHeading: "माघ मेले में नागा साधु के सानिध्य में बदली जीवन की दिशा",
    newsHeadingTwo: "माघ मेला 2026 में विदेशी श्रद्धालुओं की बढ़ती भागीदारी",
    newsCategory: "India",
    newsSubCategory: "Indian Culture",
    newsSlug:
      "italian-girl-lucrezia-sanatan-dharma-magh-mela-2026-prayagraj-10108948.html",
    thumbnail: "/Media/NewsImage/yi1lkpgob3y.webp",
    updatedDate: "2026-01-13T14:10:34.917",
    catNameInHindi: "भारत ",
    subCatNameInHindi: null,
    viewCount: 634,
  },
  {
    newsId: 10108738,
    newsTag: "सतारा में दिल दहला देने वाला दृश्य",
    newsHeading: "स्ट्रेचर पर पत्नी देख ففक पड़े लोग",
    newsHeadingTwo: "डिलीवरी के लिए छुट्टी पर आए थे जवान प्रमोद जाधव",
    newsCategory: "India",
    newsSubCategory: "Defence",
    newsSlug:
      "satara-newborn-daughter-farewell-martyred-army-jawan-pramod-jadhav-10108738.html",
    thumbnail: "/Media/NewsImage/s24tdvceupc.webp",
    updatedDate: "2026-01-12T15:03:51.527",
    catNameInHindi: "भारत ",
    subCatNameInHindi: null,
    viewCount: 647,
  },
  {
    newsId: 10108654,
    newsTag: "बनारसी बोली में PM मोदी का दिल जीतता पल",
    newsHeading: "72वीं नेशनल वॉलीबॉल चैंपियनशिप का वर्चुअल उद्घाटन",
    newsHeadingTwo: "खेल, संस्कृति और संवाद का अनोखा संगम",
    newsCategory: "India",
    newsSubCategory: "Indian Culture",
    newsSlug:
      "pm-modi-banarasi-boli-national-volleyball-championship-varanasi-10108654.html",
    thumbnail: "/Media/NewsThumb/nx4luicbrfd.gif",
    updatedDate: "2026-01-12T14:24:24.703",
    catNameInHindi: "भारत ",
    subCatNameInHindi: null,
    viewCount: 644,
  },
  {
    newsId: 10108402,
    newsTag: "भविष्य की जंग के लिए तैयार भारत",
    newsHeading: "ड्रोन तकनीक और हाइब्रिड वॉरफेयर से लैस नई ताकत",
    newsHeadingTwo: "'अखंड प्रहार' अभ्यास में दिखी भैरव की मारक क्षमता",
    newsCategory: "India",
    newsSubCategory: "Defence",
    newsSlug:
      "india-future-warfare-bhairav-battalion-drone-hybrid-desert-force-10108402.html",
    thumbnail: "/Media/NewsThumb/fg1b3skr3xh.gif",
    updatedDate: "2026-01-10T13:36:44.717",
    catNameInHindi: "भारत ",
    subCatNameInHindi: null,
    viewCount: 338,
  },
  {
    newsId: 10108360,
    newsTag: "भारतीय रेलवे का नया अध्याय",
    newsHeading: "ग्रीन रेल ट्रांसपोर्ट की दिशा में ऐतिहासिक कदम",
    newsHeadingTwo: "2026 में कमर्शियल लॉन्च की उम्मीद",
    newsCategory: "India",
    newsSubCategory: "National Issues",
    newsSlug: "india-first-hydrogen-train-trial-indian-railways-10108360.html",
    thumbnail: "/Media/NewsImage/cc2ju2ldgvf.webp",
    updatedDate: "2026-01-09T17:51:16.237",
    catNameInHindi: "भारत ",
    subCatNameInHindi: null,
    viewCount: 334,
  },
];

// Date formatter
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

export default function SadaivVisheshSection() {
  // Top row - first 3 articles (4th slot will be advertisement)
  const topArticles = sadaivVisheshArticles.slice(0, 3);
  // Bottom row - remaining 4 articles without images
  const bottomArticles = sadaivVisheshArticles.slice(4, 8);

  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a1a1a] border-l-4 border-black pl-4 bg-gradient-to-r from-purple-50 to-transparent py-2">
            भारत विशेष
          </h2>
        </div>

        {/* Top Row - 3 Articles + 1 Advertisement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topArticles.map((article) => (
            <article key={article.newsId} className="group cursor-pointer">
              <Link href={`/${article.newsSlug}`}>
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-none mb-4">
                  <Image
                    src={`https://mapi.sadaivsatya.com${article.thumbnail}`}
                    alt={article.newsHeading}
                    width={400}
                    height={240}
                    className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Article Content */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-1 text-[12px] text-gray-600 mb-2">
                    <span>
                      {article.updatedDate
                        ? formatDate(article.updatedDate)
                        : ""}
                    </span>
                    <ViewCount count={article.viewCount} />
                  </div>

                  <NewsMetaBar
                    categoryColor="#00b0e2"
                    newsCategory={article.newsCategory}
                    newsCatinhindi={article.catNameInHindi}
                    newsSubCategory={article.newsSubCategory || ""}
                    newsSlug={article.newsSlug || ""}
                  />

                  {/* Title */}
                  <div
                    style={{ marginTop: "14px" }}
                    className="text-[18px] font-medium text-black transition-colors leading-snug line-clamp-3 lg:line-clamp-2"
                  >
                    <span className="text-[#00b0e2]">{article.newsTag}:</span>{" "}
                    {article.newsHeading}
                  </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-3 lg:mt-4 border-b border-dotted border-black"></div>
              </Link>
            </article>
          ))}

          {/* Advertisement Card - 4th Position */}
          <div className="group">
           <img src = {payzoneapi.src}/>
          </div>
        </div>

        {/* Bottom Row - 4 Articles (Text Only) - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {bottomArticles.map((article) => (
            <article key={article.newsId} className="group cursor-pointer">
              <Link href={`/${article.newsSlug}`}>
                {/* Article Content */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-1 text-[11px] md:text-[12px] text-gray-600 mb-2">
                    <span>
                      {article.updatedDate
                        ? formatDate(article.updatedDate)
                        : ""}
                    </span>
                    <ViewCount count={article.viewCount} />
                  </div>

                  {/* Title */}
                  <div
                    style={{ marginTop: "14px" }}
                    className="text-[14px] md:text-[18px] font-medium text-black transition-colors leading-snug line-clamp-3 lg:line-clamp-2"
                  >
                    <span className="text-[#00b0e2]">{article.newsTag}:</span>{" "}
                    {article.newsHeading}
                  </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-3 lg:mt-4 border-b border-dotted border-black"></div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}