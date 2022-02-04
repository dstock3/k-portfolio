import './css/main.css'
import Banner from './components/Banner';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Intro />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
