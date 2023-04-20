import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import InitialScreen from "../components/InitialScreen";
import VideoSection from "../components/VideoSection";
import ProductsSection from "../components/ProductsSection";
import AuditSection from "../components/AuditSection";
import VaultCraftSection from "../components/VaultCraftSection";
import BuildingSection from "../components/BuildingSection";
import FinalSection from "../components/FinalSection";
import Footer from "../components/Footer";


const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      router.replace(window.location.pathname);
    }
  }, [router.pathname]);

  return (
    <div className="absolute left-0 flex flex-col">
      <InitialScreen />
      <VideoSection />
      <ProductsSection />
      <AuditSection />
      <VaultCraftSection />
      <BuildingSection />
      <FinalSection />
      <Footer />
    </div >
  );
};

export default IndexPage;
