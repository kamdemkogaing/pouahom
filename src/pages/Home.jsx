import AboutPreview from "../components/home/AboutPreview";
import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import NewsPreview from "../components/home/NewsPreview";
import NextMeeting from "../components/home/NextMeeting";
import Values from "../components/home/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Values />
      <NextMeeting />
      <NewsPreview />
      <CTA />
    </>
  );
}
