import type { Metadata } from "next";
import "./globals.css";
import { Arima, Nunito, Raleway } from 'next/font/google';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const arima = Arima({
  subsets: ['latin'],
  weight: ['100', '300', '500'],
  display: 'swap',
  variable: '--font-arima'
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-nunito'
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-raleway'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${arima.variable} ${nunito.variable} ${raleway.variable}`}>
      <body className="flex min-h-screen flex-col bg-white">
        <Topbar />
        <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}