"use client";

type Props = {
  count: number;
};

export default function ViewCount({ count }: Props) {
  return (
    <span className="mr-2 flex items-center opacity-70 gap-1 text-[10px] sm:text-[12px] text-gray-400 dark:text-gray-400">
      <EyeIcon />
      {formatViews(count)}
    </span>
  );
}

function EyeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function formatViews(count: number) {
  if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + "M";
  if (count >= 1_000) return (count / 1_000).toFixed(1) + "K";
  return count;
}
