import { useRouter } from "next/router";
import React, { useEffect } from "react";
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
        <HeroSection />
    </div >
  );
};

export default IndexPage;
