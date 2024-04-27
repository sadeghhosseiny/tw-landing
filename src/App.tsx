import "./App.css";
import Channels from "./components/channels";
import Footer from "./components/footer";
import Header from "./components/header";
import Slider from "./components/slider";

function App() {
  return (
    <div>
      <Header />
      <div className="flex max-w-[1920px] mx-0">
        <Channels />
        <Slider />
      </div>
      <Footer />
    </div>
  );
}

export default App;
