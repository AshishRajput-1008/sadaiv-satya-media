import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import NewsGrid2 from "@/components/NewsGrid2";
import type { StaticImageData } from "next/image";
import advShoppy from "@/app/public/advImages/shoppyAdv.png"

import img1 from "./public/image1.png";
import img2 from "./public/image2.png";
import img3 from "./public/image3.png";
import image4 from "@/app/public/image4.png";
import NewsPage from "@/components/NewsPage";
import NewsPage2 from "@/components/NewsPage2";
import VideoNewsSection from "@/components/VideoNewsSection ";
import MusicSection from "@/components/MusicSection";
import SportsNews from "@/components/SportsNews";
import TVSection from "@/components/TvSection";
import Footer from "@/components/Footer";
import AdvertisementBanner from "@/components/AdvertisementNavbar";
import WebStoriesSection from "@/components/WebStoriesSection";
import MustReadSection from "@/components/MustReadSection";
import MainSection from "@/components/MainSection";

interface Article {
  newsId: number;
  newsHeading: string;
  newsTag: string;
  newsCategory: string;
  newsSubCategory?: string;
  thumbnail: string | StaticImageData;
  updatedDate: string | null;
  newsSlug: string | null;
  catNameInHindi: string;
  viewCount: number;
}
const articles: Article[] = [
  {
    newsId: 10108675,
    newsHeading: "72वीं नेशनल वॉलीबॉल चैंपियनशिप का वर्चुअल उद्घाटन",
    newsTag: "बनारसी बोली में PM मोदी का दिल जीतता पल",
    newsCategory: "Sports News",
    thumbnail: img1,
    updatedDate: "2026-01-12T14:24:24.703",
    newsSlug:
      "pm-modi-banarasi-boli-national-volleyball-championship-varanasi-10108675.html",
    catNameInHindi: " खेल  ",
    viewCount: 645,
  },
  {
    newsId: 10108423,
    newsHeading:
      "कहा– उत्तर प्रदेश के ‘कल्याण’ से जुड़ा उनका नाम सदैव प्रेरणा रहेगा",
    newsTag: "‘बाबूजी’ कल्याण सिंह की जयंती",
    thumbnail: img2,
    newsCategory: "State",
    newsSubCategory: "Uttar Pradesh",
    updatedDate: "2026-01-10T13:50:25.14",
    newsSlug:
      "cm-yogi-tribute-kalyan-singh-birth-anniversary-lucknow-10108423.html",
    catNameInHindi: "राज्य",
    viewCount: 328,
  },
  {
    newsId: 10108402,
    newsHeading: "ड्रोन तकनीक और हाइब्रिड वॉरफेयर से लैस नई ताकत",
    newsTag: "भविष्य की जंग के लिए तैयार भारत",
    thumbnail: img3,
    newsCategory: "India",
    newsSubCategory: "Defence",
    updatedDate: "2026-01-10T13:36:44.717",
    newsSlug:
      "india-future-warfare-bhairav-battalion-drone-hybrid-desert-force-10108402.html",
    catNameInHindi: "भारत ",
    viewCount: 338,
  },
  {
    newsId: 10108276,
    newsHeading:
      "कहा– उत्तर प्रदेश के ‘कल्याण’ से जुड़ा उनका नाम सदैव प्रेरणा रहेगा",
    newsTag: "माता की चौकी के वीडियो हुए वायरल",
    thumbnail: img1,
    newsCategory: "Meethee Mirchee",
    newsSubCategory: "Celebrity Gossip",
    updatedDate: "2026-01-09T15:50:30.507",
    newsSlug:
      "sudha-chandran-reacts-to-trolling-over-viral-mata-ki-chowki-video-10108276.html",
    catNameInHindi: "मीठी मिर्ची",
    viewCount: 634,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <TopBar /> */}
      <Header />
      <div className=" mb-[12px]">
        <div className="border-b mb-[2px] border-dotted border-[#000]"></div>
      </div>
      <AdvertisementBanner />
      <NewsGrid2 articles={articles} />
      {/* <NewsPage /> */}
      <MainSection />
      <WebStoriesSection />
      <MustReadSection />
      <NewsPage2 />
     
      <VideoNewsSection />
        <div className="flex items-center justify-center">
          <img className="h-[280px]" src={advShoppy.src}/>
       </div>
      <MusicSection />
      <SportsNews />
      <TVSection />
      <Footer />
    </main>
  );
}
