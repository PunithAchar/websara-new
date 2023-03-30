import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Features from './components/Home/Features';
import GridSection from './components/Home/GridSection';
import HomeSlide from './components/Home/HomeSlide';
import SubscribeSection from './components/Home/SubscribeSection';

function App() {
  return (
    <div className="App">
     <Header/>
     <HomeSlide/>
     <GridSection/>
     <Features/>
     <SubscribeSection/>
     <Footer/>
    </div>
  );
}

export default App;
