import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import "./style.scss";
// import Carousel from "react-bootstrap/Carousel";
function LandingPage() {
  return (
    <div className="landing_page">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default LandingPage;
