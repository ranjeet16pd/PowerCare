import { useState } from "react";

import { BookingForm } from "@/components/BookingForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OfferBar } from "@/components/OfferBar";
import { Offers } from "@/components/Offers";
import { HowItWorks } from "@/components/HowItWorks";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Seo } from "@/components/Seo";
import { Services } from "@/components/Services";
import { WhoWeServe } from "@/components/WhoWeServe";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import type { ServiceId } from "@shared/types";

function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<
    ServiceId | undefined
  >();

  return (
    <>
      <Seo />
      <div className="sticky top-0 z-50">
        <OfferBar />
        <Header />
      </div>
      <main>
        <Hero />
        <Offers />
        <Services
          onBookService={(id) => setSelectedServiceId(id as ServiceId)}
        />
        <HowItWorks />
        <WhoWeServe />
        <WhyChooseUs />
        <BookingForm selectedServiceId={selectedServiceId} />
        <FAQ />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}

export default App;
