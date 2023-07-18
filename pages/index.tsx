import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";


const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      router.replace(window.location.pathname);
    }
  }, [router.pathname]);

  return (
    <div className="absolute left-0 right-0 flex flex-col bg-[#000000] text-white">
        <video className={`absolute w-full object-cover h-[900px]`} src="videos/HeroSectionVideo.mp4" loop autoPlay muted></video>
        <Navbar />
        <Footer />
        <HeroSection />
    </div >
  );
};

export default IndexPage;
