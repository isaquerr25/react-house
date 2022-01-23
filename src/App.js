import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import BannerFirst from './Components/BannerFirst'
import CountryPack from './Components/CountryPack'
import Offer from './Components/Offer'
import LastBanner from './Components/LastBanner'
import Footer from './Components/Footer'

function App() {
  return (
    
    <div className="App">
      
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      <Header/>
      <BannerFirst/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="sub-titulo">
        <h2>
          We are available in many well-known countries
        </h2>
      </div>
      <CountryPack/>
      <Offer/>
      <LastBanner/>
      <Footer/>
    </div>
  );
}

export default App;
