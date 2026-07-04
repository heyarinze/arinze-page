import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkHistory from "@/components/WorkHistory";
import Timeline from "@/components/Timeline";
import Extracurriculars from "@/components/Extracurriculars";
import Work from "@/components/Work";
import Essays from "@/components/Essays";
import Shelf from "@/components/Shelf";
import Mantra from "@/components/Mantra";
import { SectionDivider } from "@/components/Glyph";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Essays />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <WorkHistory />
      <SectionDivider />
      <Work />
      <SectionDivider />
      <Extracurriculars />
      <SectionDivider />
      <Shelf />
      <SectionDivider />
      <Mantra />
      <SectionDivider />
    </>
  );
}
