import HomeCapabilities from "@/components/custom/HomeCapabilities";
import HomeCareer from "@/components/custom/HomeCareer";
import HomeContact from "@/components/custom/HomeContact";
import HomeHero from "@/components/custom/HomeHero";
import HomeSelectedWork from "@/components/custom/HomeSelectedWork";
import { siteContent } from "@/contents/en";

import type { Route } from "./+types/home";

export const meta = ({}: Route.MetaArgs) => {
  return [
    {
      title: siteContent.metadata.defaultTitle,
    },
    {
      name: "description",
      content: siteContent.metadata.description,
    },
  ];
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
