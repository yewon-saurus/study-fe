import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Material UI",
  description: "Material UI를 써봅시다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
