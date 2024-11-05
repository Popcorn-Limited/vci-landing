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
    <div className="absolute left-0 right-0 flex flex-col bg-black text-white overflow-hidden">
      <HeroSection isLoaded={isLoaded} />
      <div className="px-6 smmd:px-8 py-8 w-full bg-black z-20">
        <h2 className="text-2xl text-white">
          Investors
        </h2>
        <div className="flex flex-row h-full w-full justify-between mt-4">
          <img src="/images/investors/investor-jump.png" className="h-12 grayscale brightness-125 hover:grayscale-0" />
          <img src="/images/investors/investor-newForm.png" className="h-12 grayscale brightness-200 hover:grayscale-0" />
          <img src="/images/investors/investor-kenetic.png" className="h-12 grayscale brightness-150 hover:grayscale-0" />
          <img src="/images/investors/investor-amino.png" className="h-12 grayscale brightness-200 hover:grayscale-0" />
          <img src="/images/investors/investor-bigBrain.png" className="h-12 grayscale brightness-125 hover:grayscale-0" />
          <img src="/images/investors/investor-drop.png" className="h-12 grayscale brightness-125 hover:grayscale-0" />
          <img src="/images/investors/investor-hestia.png" className="h-12 grayscale brightness-150 hover:grayscale-0" />
          <img src="/images/investors/investor-lao.png" className="h-12 grayscale brightness-125 hover:grayscale-0" />
        </div>
      </div>
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
