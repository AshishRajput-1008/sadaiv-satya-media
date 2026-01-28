"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type SmartLinkProps = {
  href: string;
  id?: number;
  children: ReactNode;
  className?: string;
};

export default function SmartLink({
  href,
  id,
  children,
  className,
}: SmartLinkProps) {
  const router = useRouter();

  function incrementViewBackground(id: number) {
    try {
      fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/adminapi/increment-view/${id}`,
        {
          method: "POST",
          keepalive: true, // ✅ page change ke baad bhi request complete hogi
        }
      );
    } catch (err) {
      console.error("View increment failed", err);
    }
  }

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!id) return;

    e.preventDefault();

    // 🔥 1. Page immediately navigate
    router.push(href);

    // 🔥 2. Background me view increment
    incrementViewBackground(id);
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={id ? handleClick : undefined}
      prefetch
    >
      {children}
    </Link>
  );
}
