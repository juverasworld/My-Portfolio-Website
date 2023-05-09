
import './App.css';
// import About from '../component/About';
import About from './Component/About';
import Banner from './Component/Banner';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
// import Work from './Component/Work';

import Work from "./Component/Work"





function App() {
  return (

    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header/>
     <Banner/>
     <About/>
     <Navbar/>
     <Services/>
     {/* <Blog/> */}
     <Work/>
     <Contact/>

    </div>





  );
}

export default App;
