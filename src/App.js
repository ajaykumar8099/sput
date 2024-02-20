import Header from "./components/Header"
import Home from "./components/Home"
import ProductContainer from './components/ProductContainer';
import MeetAhead from "./components/MeetAhead";
import EqBeatsIq from "./components/EqBeatsIq";
import SelfImprovement from "./components/SelfImprovement";
import WonderPart  from "./components/WonderPart";
import BeforeYouStarted from "./components/BeforeYouStarted";
import WorkWithUs from "./components/WorkWithUs";
import OpenVacanices from "./components/OpenVacancies";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <EqBeatsIq/>
      <div className="head-img-container">
      <h1 className='products-container-heading'>Does this sound familiar....</h1>
      <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBaM.nlv6lSmXhGY0w.y7u6LH3MY2btzV_PcIS7W272o74EvEDi5S4xhdoBizRBkGiIBHQYZ73JIE5vuEGnrP9W0-&format=source" className="img" alt="em-img"/>
      </div>
      <ProductContainer />
      <MeetAhead/>
      <SelfImprovement/>
      <EqBeatsIq/>
      <WonderPart/>
      <BeforeYouStarted/>
      <WorkWithUs/>
      <OpenVacanices/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
