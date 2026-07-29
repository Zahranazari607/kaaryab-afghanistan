// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SavedProvider } from "../context/SavedContext";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KaarYab Afghanistan",
  description: "Opportunity Finder Platform for Afghan Youth",
  icons: {
    icon: "https://api.iconify.design/lucide:graduation-cap.svg?color=%239333ea",
    shortcut: "https://api.iconify.design/lucide:graduation-cap.svg?color=%239333ea",
    apple: "https://api.iconify.design/lucide:graduation-cap.svg?color=%239333ea",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider>
          <SavedProvider>
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center text-xs py-1.5 font-medium tracking-wide shadow-sm">
              📢 DEMO DATA - This platform is currently running with sample training data.
            </div>
            
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            
            <Footer />
          </SavedProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}