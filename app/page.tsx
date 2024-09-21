"use client"

import Image from "next/image";

// components
import SearchSection from "@/components/app/home/search-section/search-section";
import DisclaimerText from "@/components/app/home/disclaimer-section/disclaimer";

export default function Home() {
  return (
    <div className="container">
      {/* navbar */}

      {/* search section */}
      <SearchSection />

      {/* disclaimer text */}
      <DisclaimerText />
    </div>
  );
}
