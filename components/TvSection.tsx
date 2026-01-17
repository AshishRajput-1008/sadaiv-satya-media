"use client";

import Image from "next/image";
import Link from "next/link";
import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "./ViewCount";
// Bharat News Data
const GetBharatNews =[
{
"newsId": 10107520,
"newsTag": "क्रिप्टो पर सरकार का कड़ा शिकंजा",
"newsHeading": "मनी लॉन्ड्रिंग और टेरर फंडिंग का बड़ा खुलासा",
"newsHeadingTwo": null,
"newsCategory": "Crypto",
"newsSubCategory": "Trading Tips",
"newsSlug": "india-tightens-crypto-rules-49-exchanges-registered-fiu-10107520.html",
"thumbnail": "/Media/NewsImage/xkplo1t13ee.webp",
"updatedDate": "2026-01-06T17:00:07.34",
"catNameInHindi": "क्रिप्टो",
"subCatNameInHindi": null,
"viewCount": 635
},
{
"newsId": 10107142,
"newsTag": "बिटकॉइन ने फिर पकड़ी रफ्तार",
"newsHeading": "निवेशकों में लौटा भरोसा",
"newsHeadingTwo": null,
"newsCategory": "Crypto",
"newsSubCategory": "Trading Tips",
"newsSlug": "bitcoin-surges-past-91000-after-23-days-crypto-market-sentiment-improves-10107142.html",
"thumbnail": "/Media/NewsImage/mywudfy5ipt.webp",
"updatedDate": "2026-01-05T15:13:59.41",
"catNameInHindi": "क्रिप्टो",
"subCatNameInHindi": null,
"viewCount": 324
},
{
"newsId": 10106785,
"newsTag": "Crypto Market Crash या Recovery",
"newsHeading": "ग्लोबल फैक्टर्स का क्रिप्टो पर असर",
"newsHeadingTwo": null,
"newsCategory": "Crypto",
"newsSubCategory": "Trading Tips",
"newsSlug": "crypto-market-crash-or-recovery-2026-outlook-10106785.html",
"thumbnail": "/Media/NewsImage/qbzrzok4ogr.webp",
"updatedDate": "2026-01-02T14:46:03.023",
"catNameInHindi": "क्रिप्टो",
"subCatNameInHindi": null,
"viewCount": 316
},
{
"newsId": 10105441,
"newsTag": "UPI और डिजिटल पेमेंट पर नया नियम",
"newsHeading": "यूजर्स को होगा सीधा असर",
"newsHeadingTwo": null,
"newsCategory": "Crypto",
"newsSubCategory": "Trading Tips",
"newsSlug": "upi-digital-payment-new-rules-10105441.html",
"thumbnail": "/Media/NewsImage/uonceuku44u.webp",
"updatedDate": "2025-12-25T12:55:39.18",
"catNameInHindi": "क्रिप्टो",
"subCatNameInHindi": null,
"viewCount": 316
},
{
"newsId": 10105231,
"newsTag": "जापान में खत्म हुआ ‘जीरो ब्याज’ का दौर",
"newsHeading": "क्रिप्टो से लेकर शेयर बाजार तक दिखेगा बड़ा असर",
"newsHeadingTwo": null,
"newsCategory": "Crypto",
"newsSubCategory": "Trading Tips",
"newsSlug": "japan-rate-hike-30-year-high-interest-rate-impact-on-markets-10105231.html",
"thumbnail": "/Media/NewsImage/zvf0muqc5tj.webp",
"updatedDate": "2025-12-19T16:48:28.813",
"catNameInHindi": "क्रिप्टो",
"subCatNameInHindi": null,
"viewCount": 315
},
{
"newsId": 10104097,
"newsTag": "Stock Market Fall:एशियाई बाजारों में हाहाकार",
"newsHeading": "विदेशी बाजारों में कोहराम का असर भारतीय शेयर बाजार पर",
"newsHeadingTwo": null,
"newsCategory": "Crypto",
"newsSubCategory": "Trading Tips",
"newsSlug": "stock-market-fall-asian-markets-crash-sensex-nifty-10104097.html",
"thumbnail": "/Media/NewsImage/1zpxhiyhdxw.webp",
"updatedDate": "2025-12-16T13:35:45.893",
"catNameInHindi": "क्रिप्टो",
"subCatNameInHindi": null,
"viewCount": 310
}
]

// Helper function to format date in Hindi
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
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
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

export default function TVSection() {
  // Take first 4 articles for display
  const displayArticles = GetBharatNews.slice(0, 4);

  return (
    <section className="bg-white py-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-[28px]  md:text-[32px] font-bold text-[#1a1a1a] border-l-4 border-black pl-4 bg-gradient-to-r from-purple-50 to-transparent py-2">
            भारत
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayArticles.map((article) => (
            <article key={article.newsId} className="group cursor-pointer">
              <Link href={`/${article.newsSlug}`}>
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-none mb-4">
                  <Image
                    src={`https://mapi.sadaivsatya.com${article.thumbnail}`}
                    alt={article.newsHeading}
                    width={400}
                    height={240}
                    className="w-full h-[240px] object-cover "
                  />
                </div>

                {/* Article Content */}
                {/* Meta */}
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
                    categoryColor="#00bf9a"
                    newsCategory={article.newsCategory}
                    newsCatinhindi={article.catNameInHindi}
                    newsSubCategory={article.newsSubCategory || ""}
                    newsSlug={article.newsSlug || ""}
                  />

                  {/* Title */}
                  <div
                    style={{ marginTop: "14px" }}
                    className="text-[18px] font-medium text-black transition-colors leading-snug line-clamp-2"
                  >
                    <span className="text-[#00bf9a]">{article.newsTag}:</span>{" "}
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
