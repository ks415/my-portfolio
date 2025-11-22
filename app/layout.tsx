import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "川越壮 | So Kawagoe",
  description:
    "川越壮（So Kawagoe）のポートフォリオ。コンピュータビジョン研究・Vision-Language・Web開発（Next.js/TypeScript）などの実績とプロジェクトを掲載。",
  openGraph: {
    title: '川越壮 - So Kawagoe',
    description:
      '川越壮 |大阪公立大学大学院 知能メディア処理研究室所属 | MLエンジニア / コンピュータビジョン研究者 | Vision-Language Model | Web開発（Next.js/TypeScript）',
    url: 'https://main.dkgdihhe96jts.amplifyapp.com/',
    siteName: 'So Kawagoe Portfolio',
    locale: 'ja_JP',
    type: 'website',
    emails: ['kawauso415@gmail.com'],
    images: [
      {
        url: 'public/icon_user.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: [
    '川越壮',
    '川越壮',
    'かわごえそう',
    'So Kawagoe',
    'Kawagoe So',
    '大阪公立大学大学院',
    '大阪公立大学',
    '知能メディア処理研究室',
    '知能メディア処理研究グループ',
    '画像認識',
    '機械学習',
    '深層学習',
    'Vision-Language Model',
    'VLM',
    'コンピュータビジョン',
  ],
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
