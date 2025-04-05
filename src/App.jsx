import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Footer from "./Component/Footer";
import PortfolioShowcase from "./Component/Work";
function App(){
  return<>
   <Router>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<PortfolioShowcase/>}/>

    </Routes>
    <Footer/>
   </Router>
  </>
}
export default App