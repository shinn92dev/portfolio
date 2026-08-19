import HomeCapabilities from "@/components/custom/HomeCapabilities";
import HomeCareer from "@/components/custom/HomeCareer";
import HomeContact from "@/components/custom/HomeContact";
import HomeHero from "@/components/custom/HomeHero";
import HomeSelectedWork from "@/components/custom/HomeSelectedWork";
import { createSeoMeta, portfolioStructuredData } from "@/lib/seo";
import { siteContent } from "@/contents/en";

import type { Route } from "./+types/home";

export const meta = ({}: Route.MetaArgs) => {
  return createSeoMeta({
    title: siteContent.metadata.defaultTitle,
    description: siteContent.metadata.description,
    path: "/",
    structuredData: portfolioStructuredData,
  });
};

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeSelectedWork />
      <HomeCapabilities />
      <HomeCareer />
      <HomeContact />
    </div>
  );
};

export default Home;
