import { useRouter } from "next/router";
import { useEffect } from "react";
import { HeroSection, GetStartedSection, CardsSection, Partners, Footer, SDKSection, TGESection } from "@/components/Sections";
import { Analytics } from '@vercel/analytics/react';


const IndexPage = ({
  isLoaded
}: {
  isLoaded: true
}) => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      router.replace(window.location.pathname); ``
    }
  }, [router.pathname]);

  return (
    <div className="absolute left-0 right-0 flex flex-col bg-[#000000] text-white overflow-hidden">
      <HeroSection isLoaded={isLoaded} />
      <GetStartedSection />
      <SDKSection />
      <a id="HowItWorks"></a>
      <CardsSection />
      <Partners />
      <a id="Footer"></a>
      <Footer />
      <Analytics />
    </div >
  );
};

export default IndexPage;
