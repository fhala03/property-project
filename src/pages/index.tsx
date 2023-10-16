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
import Hero2 from "@/components/hero2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Property Site</title>
        <meta
          name="description"
          content="Explore a curated collection of exquisite properties. Find your perfect home or investment opportunity."
        />
        <meta
          property="og:title"
          content="Discover Your Dream Properties | Property Site"
        />
        <meta
          property="og:description"
          content="Explore a curated collection of exquisite properties. Find your perfect home or investment opportunity."
        />
        <meta
          property="og:image"
          content="https://convert-text-app.vercel.app/background1.png"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col gap-20">
        <LandingText />
        <SideText />
        <Hero />
        <Gallery />
        <Location />
        <Hero2 />
        <Features />
        <Owner />
        <Reviews />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
