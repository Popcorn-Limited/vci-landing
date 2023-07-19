import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import GetStartedSection from "../components/GetStartedSection";


const IndexPage = ({
    isLoaded
}: {
    isLoaded: true
}) => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      router.replace(window.location.pathname);
    }
  }, [router.pathname]);

  return (
    <div className="absolute left-0 right-0 flex flex-col bg-[#000000] text-white">
        <HeroSection isLoaded={isLoaded}  />
        <GetStartedSection />
    </div >
  );
};

export default IndexPage;
