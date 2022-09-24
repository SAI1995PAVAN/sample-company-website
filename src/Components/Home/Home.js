
import Description from "../Description/Description";
import Pricing from "../Pricing/Pricing";
import Ceo from "../Ceo/Ceo";
import Faq from "../../Faq/Faq";
import "./Home.css";
import Contact from "../Contact/Contact";
import PageFooter from "../PageFooter/PageFooter";

function Home() {
  return (
    <div className="home">
      
      <Description />
      <Pricing />
      <Ceo />
      <Faq />
      <Contact />
      <PageFooter />
    </div>
  );
}

export default Home;
