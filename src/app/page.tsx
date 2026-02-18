import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Extracurriculars from "@/components/Extracurriculars";
import Work from "@/components/Work";
import Essays from "@/components/Essays";
import Shelf from "@/components/Shelf";
import Newsletter from "@/components/Newsletter";
import Mantra from "@/components/Mantra";
import { SectionDivider } from "@/components/Glyph";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <Work />
      <SectionDivider />
      <Essays />
      <SectionDivider />
      <Extracurriculars />
      <SectionDivider />
      <Newsletter />
      <SectionDivider />
      <Shelf />
      <SectionDivider />
      <Mantra />
      <SectionDivider />
    </>
  );
}
