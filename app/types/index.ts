// types.ts
import type { StaticImageData } from "next/image";

export interface NewsArticle {
  newsId: number;
  newsHeading: string;
  newsTag: string;
  newsCategory: string;
  newsSubCategory?: string;
  thumbnail: string | StaticImageData; // ✅ FIX
  updatedDate: string | null;
  newsSlug: string | null;
  catNameInHindi: string;
  viewCount: number;
}


export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Author {
  id: string;
  name: string;
  created_at: string;
}
