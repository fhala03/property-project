import Head from "next/head";
import LandingText from "@/components/landingText";
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import Location from "@/components/location";
import SideText from "@/components/sideText";
import Features from "@/components/features";
import Owner from "@/components/owner";
import Footer from "@/components/footer";
import Faq from "@/components/faq";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Property Site</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-20">
        <LandingText />
        <SideText />
        <Hero />
        <Gallery />
        <Location />
        <Features />
        <Owner />
        <Reviews />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
