
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishank Sharma | Full Stack Developer",
  description:
    "I build modern, interactive web applications with a focus on clean design, performance, and continuous learning.",

  openGraph: {
    title: "Rishank Sharma | Full Stack Developer",
    description:
      "Explore projects, skills, and interactive web experiences built by Rishank Sharma.",
    url: "https://rishanksharma.vercel.app",
    siteName: "Rishank Sharma | Full Stack Developer",
    type: "website",
  },}

export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >


        <Navbar />

        {children}
        <Footer />


        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />



      </body>
    </html>
  );
}
