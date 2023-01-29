import Clients from './components/Clients/Clients';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import WhyUs from './components/WhyUS/WhyUs';

function App() {
  return (
    <div className="font-manrope ">
      <Header></Header>
      <Hero></Hero>
      <Products></Products>
      <WhyUs></WhyUs>
      <Clients></Clients>
      <Events></Events>
      <Footer></Footer>
    </div>
  );
}

export default App;
