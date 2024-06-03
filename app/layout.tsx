import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ItsYoungCoder",
  description: "ItsYoungCoder Official Website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
        <header className="p-5 bg-white flex justify-around">
          <div className="w-9/12 flex justify-end ">
              <ul className="flex gap-5 text-main-color text-lg font-medium font-geo items-center">
                <div className="mr-48">
                  <img src="/NovatoriLogo.svg" alt="" />
                </div>
                <li><Link href="/">მთავარი</Link></li>
                <li><Link href="">ჩვენს შესახებ</Link></li>
                <li><Link href="">კურსები</Link></li>
                <li><Link href="">ხდკ</Link></li>
                <li><Link href="/auth/signup">რეგისტრაცია</Link></li>
                <li><Link href="">ბლოგი</Link></li>
                <li><Link href="">ბლოგიკონტაქტი</Link></li>
              </ul>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
