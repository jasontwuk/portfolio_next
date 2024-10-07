import { Dots } from "./components/Dots";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="relative" id="hero_container">
      <Hero />
      <Dots />
    </div>
  );
}
