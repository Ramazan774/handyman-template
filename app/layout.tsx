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
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-nunito'
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: {
    default: "Professional Handyman Services | Your Company Name",
    template: "%s | Your Company Name"
  },
  description: "Expert handyman services in Madison, WI. We offer drywall repair, HVAC maintenance, TV mounting, and more. Quality craftsmanship and reliable service.",
  keywords: ["handyman", "home repair", "Madison", "drywall", "HVAC", "TV mounting"],
  authors: [{ name: "Your Company Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yourwebsite.com/",
    siteName: "Your Company Name",
    title: "Professional Handyman Services",
    description: "Expert handyman services in Madison, WI. Quality craftsmanship and reliable service.",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Company Name - Professional Handyman Services"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourcompany",
    creator: "@yourcompany"
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${arima.variable} ${nunito.variable} ${raleway.variable}`}>
      <body className="flex min-h-screen flex-col bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        <Topbar />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}