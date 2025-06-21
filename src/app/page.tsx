import OurPartners from "@/components/partners/Partners";
import Hero from "../components/hero/Hero";
import AboutProjects from "../components/aboutProjects/AboutProjects";
import CallCenter from "../components/callCenter/CallCenter"
import Pictures from "../components/pictures/Pictures"
export default function Home() {
  return (
    <>
      <Hero />
      <AboutProjects />
      <OurPartners />
      <CallCenter />
      <Pictures />
    </>
  );
}
