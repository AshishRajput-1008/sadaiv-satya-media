"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ShareButtons = dynamic(() => import("@/components/ShareButtons"), {
  ssr: false,
});

interface NewsMetaBarProps {
  categoryColor: string;
  newsCategory: string;
  newsCatinhindi: string;
  newsSubCategory?: string;
  newsSlug: string;
}

const cleanText = (str = "") =>
  str.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();

const toSlug = (str = "") =>
  cleanText(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export default function NewsMetaBar({
  categoryColor,
  newsCategory,
  newsCatinhindi,
  newsSubCategory,
  newsSlug,
}: NewsMetaBarProps) {
  const router = useRouter();

  const categorySlug = toSlug(newsCategory);
  const subcategorySlug = newsSubCategory ? toSlug(newsSubCategory) : null;

  const categoryPageUrl = subcategorySlug
    ? `/${categorySlug}/${subcategorySlug}`
    : `/${categorySlug}`;

  const newsUrl = subcategorySlug
    ? `/${categorySlug}/${subcategorySlug}/news/${newsSlug}`
    : `/${categorySlug}/news/${newsSlug}`;

  return (
    <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
      {newsCategory && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // ⛔ prevents parent Link navigation
            router.push(categoryPageUrl);
          }}
          style={{
            backgroundColor: categoryColor,
            borderColor: categoryColor,
          }}
          className="group inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold
                     text-white border rounded-full
                     transition-all duration-200
                     hover:bg-black hover:border-black"
        >
          <span>{newsCatinhindi}</span>

          <svg
            className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      <ShareButtons shareUrl={newsUrl} />
    </div>
  );
}
