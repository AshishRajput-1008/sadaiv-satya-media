"use client";

import { NewsArticle } from "../app/types";

import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "./ViewCount";
import Image from "next/image";

interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid2({ articles }: NewsGridProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <article
            key={article.newsId}
            className="group cursor-pointer border-b border-gray-300 pb-4"
          >
            {/* Image */}
            <div className="overflow-hidden mb-2">
              <Image
                src={article.thumbnail}
                alt={article.newsHeading}
                width={285}
                height={185}
              />
            </div>

            {/* Meta */}
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-1 text-[12px] text-gray-600 mb-2">
                <span>
                  {article.updatedDate ? formatDate(article.updatedDate) : ""}
                </span>
                <ViewCount count={article.viewCount} />
              </div>

              <NewsMetaBar
                categoryColor= "#b91c1c"     
                newsCategory={article.newsCategory}
                newsCatinhindi={article.catNameInHindi}
                newsSubCategory={article.newsSubCategory || ""}
                newsSlug={article.newsSlug || ""}
              />

              {/* Title */}
              <div
                style={{ marginTop: "14px" }}
                className="text-[18px] font-medium text-black group-hover:text-red-600 transition-colors leading-snug line-clamp-3"
              >
                <span className="text-[#FF554B]">{article.newsTag}:</span>{" "}
                {article.newsHeading}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
