"use client"

// bootstrap components
import Container from 'react-bootstrap/Container';

// components
import SearchSection from "@/components/app/home/search-section/search-section";
import DisclaimerText from "@/components/app/home/disclaimer-section/disclaimer";
import TopNavbar from "@/components/app/navbar/navbar";

export default function Home() {
  return (
    <Container>
      {/* search section */}
      <div style={{
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
      }}>
        <SearchSection />
      </div>

      {/* disclaimer text */}
      <DisclaimerText />
    </Container>
  );
}
