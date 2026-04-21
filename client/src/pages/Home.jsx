import Hero from "../components/sections/Hero";
import HomeAboutPreview from "../components/sections/HomeAboutPreview";
import HomeServicesPreview from "../components/sections/HomeServicesPreview";
import HomeMarketPreview from "../components/sections/HomeMarketPreview";
import WhyBlackmont from "../components/sections/WhyBlackmont";
import ContactCTA from "../components/sections/ContactCTA";
import FaqPreview from "../components/sections/FaqPreview";
import InsightsPreview from "../components/sections/InsightsPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAboutPreview />
      <HomeServicesPreview />
      <WhyBlackmont />
      <HomeMarketPreview />
      <ContactCTA />
      <InsightsPreview />
<FaqPreview />
    </>
  );
};

export default Home;