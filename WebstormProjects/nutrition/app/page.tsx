import React from 'react';
import BookingModal from "@/components/BookingModal";
import DownloadModal from "@/components/DownloadModal";
import CaseStudyModal from "@/components/CaseStudyModal";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import Process from "@/components/Process";
import Hero from "@/components/Hero";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "FuelUp Nutrition – Demo Portfolio Site",
    description: "This website is a demo created solely for portfolio purposes. It does not represent a real business, products, or services.",
    keywords: ["Demo", "Portfolio", "Nutrition", "Fitness", "Meal Plans", "Health"],
    authors: [{ name: "Your Name" }],
    creator: "Your Name",
    publisher: "Your Name",
    robots: {
        index: false,
        follow: false
    },

    openGraph: {
        type: "website",
        url: "https://yourdomain.com",
        title: "FuelUp Nutrition – Demo Portfolio Site",
        description: "Demo website for portfolio purposes only. Not a real business or service.",
        siteName: "FuelUp Nutrition Demo",
        images: [
            {
                url: "https://yourdomain.com/demo-og-image.png",
                width: 1200,
                height: 630,
                alt: "FuelUp Nutrition Demo"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "FuelUp Nutrition – Demo Portfolio Site",
        description: "This site is purely a portfolio/demo project. It does not represent an actual business or service.",
        site: "@YourTwitterHandle",
        images: ["https://yourdomain.com/demo-og-image.png"]
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    }
};

const Page = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#1A1B27] text-white font-inter">
            {/* Header */}
            <Navigation/>
            <Hero/>
            <Process/>
            <Service/>
            <Pricing/>
            <Blog/>
            <Footer/>

             <BookingModal />
             <DownloadModal />
            <CaseStudyModal />
        </div>
    );
}

export default Page;
