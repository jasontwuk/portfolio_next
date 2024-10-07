import { About } from "./components/About";
import { Dots } from "./components/Dots";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="relative w-full" id="hero_container">
        <Hero />
        <Dots />
      </div>

      <About />
    </div>
  );
}
