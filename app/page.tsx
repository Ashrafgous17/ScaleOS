import BookCall from "./components/BookCall";
import Differentiation from "./components/Differentiation";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import GrowthAudit from "./components/GrowthAudit";
import Guarantee from "./components/Guarantee";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Problem from "./components/Problem";
import SocialProof from "./components/SocialProof";
import Solution from "./components/Solution";
import StickyCTA from "./components/StickyCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <SocialProof /> */}
      <Problem />
      <Solution />
      <HowItWorks />
      <Differentiation />
      <Pricing />
      <Guarantee />
      {/* <GrowthAudit /> */}
      <BookCall />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* Optional but recommended */}
      <StickyCTA />
    </main>
  );
}
