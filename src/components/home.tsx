import Hero from "./Hero";
import Navigation from "./Navigation";
import Introduction from "./Introduction";
import Timeline from "./Timeline";
import FactsOpinions from "./FactsOpinions";
import Stakeholders from "./Stakeholders";
import MediaRole from "./MediaRole";
import Impacts from "./Impacts";
import Solutions from "./Solutions";
import References from "./References";

function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Introduction />
      <Timeline />
      <FactsOpinions />
      <Stakeholders />
      <MediaRole />
      <Impacts />
      <Solutions />
      <References />
    </div>
  );
}

export default Home;
