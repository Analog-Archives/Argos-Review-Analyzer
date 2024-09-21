"use client"

import Image from "next/image";

// bootstrap components
import Container from 'react-bootstrap/Container';

// components
import SearchSection from "@/components/app/home/search-section/search-section";
import DisclaimerText from "@/components/app/home/disclaimer-section/disclaimer";
import TopNavbar from "@/components/app/navbar/navbar";

export default function Home() {
  return (
    <Container>
      {/* navbar */}
      <TopNavbar />

      {/* search section */}
      <SearchSection />

      {/* disclaimer text */}
      <DisclaimerText />
    </Container>
  );
}
