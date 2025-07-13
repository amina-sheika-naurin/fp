import Hero from "@/components/sections/Hero";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import KeyCapabilities from "@/components/sections/KeyCapabilities";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <KeyCapabilities />
      <FeaturedProjects />
      <Testimonials />
    </>
  );
}