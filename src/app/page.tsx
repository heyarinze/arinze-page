import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Essays from "@/components/Essays";
import Shelf from "@/components/Shelf";
import Newsletter from "@/components/Newsletter";
import { SectionDivider } from "@/components/Glyph";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Work />
      <SectionDivider />
      <Essays />
      <SectionDivider />
      <Newsletter />
      <SectionDivider />
      <Shelf />
    </>
  );
}
