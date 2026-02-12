import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Shelf from "@/components/Shelf";
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
      <Shelf />
    </>
  );
}
