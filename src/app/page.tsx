import Hero from "@/components/content/Hero"
import Experience from "@/components/content/Experience";
import Projects from "@/components/content/Projects";
import HackTimeSpend from "@/components/content/HackTimeSpend";

export default function Home(){
  return (
      <main>
          <Hero/>
          <Experience/>
          <Projects/>
          <HackTimeSpend/>
      </main>
  )
}