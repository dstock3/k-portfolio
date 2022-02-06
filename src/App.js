import './css/main.css'
import Banner from './components/Banner';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import PageViewer from './components/PageViewer';
import samplePDF from "./assets/SantaMonicaAudi.pdf"


function App() {
  return (
    <div className="App">
      {/*<PageViewer pdf={samplePDF} />*/}
      
      <Banner />
      <Intro />
      <Portfolio />
      <Footer /> 
      
    </div>
  );
}

export default App;
