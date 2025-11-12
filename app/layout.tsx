import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "川越壮 | ポートフォリオ",
    template: "%s | 川越壮",
  },
  description:
    "川越壮（So Kawagoe）のポートフォリオ。コンピュータビジョン研究・Vision-Language・Web開発（Next.js/TypeScript）などの実績とプロジェクトを掲載。",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ldPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "川越壮",
    alternateName: "So Kawagoe",
    sameAs: [
      "https://github.com/ks415",
      "https://www.linkedin.com/in/ks415",
      "https://qiita.com/ks415",
    ],
    jobTitle: "ML Engineer / Computer Vision Researcher",
    description:
      "コンピュータビジョン・Vision-Language・Web開発（Next.js/TypeScript）",
  };

  return (
    <html lang="ja">
      <body className={sora.className}>
        {/* 構造化データ（Person） */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldPerson) }}
        />
        {children}
      </body>
    </html>
  );
}
