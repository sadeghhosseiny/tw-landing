import "./App.css";
import Carousel from "./components/carousel";
import Channels from "./components/channels";
import Footer from "./components/footer";
import Header from "./components/header";
import PromoteBanner from "./components/promote-banner";
import Slider from "./components/slider";
import { promoteItem } from "./mock-data/promote";
import { carouselData } from "./mock-data/carousel";
import { promoteItemsCarousel } from "./mock-data/promote";

function App() {
  return (
    <div>
      <Header />
      <div className="flex max-w-[1920px] mx-0">
        <Channels />
        <Slider />
      </div>
      <div className="px-10">
        <div className="mt-10">
          <Carousel carouselItems={carouselData} />
        </div>
        <div className="mt-6">
          <Carousel carouselItems={carouselData} />
        </div>
        <div>
          <PromoteBanner item={promoteItem} />
          <Carousel
            path={"/images/promote"}
            carouselItems={promoteItemsCarousel}
          />
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}

export default App;
