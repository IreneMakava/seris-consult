import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import OurServices from './components/ourServices';
import Footer from './pages/footer';
import Business from './pages/business';
import Budget from './pages/budget';
import MEvaluation from './pages/mEvaluation';
import Quality from './pages/quality';
import HumanResource from './pages/humanResource';
import Events from './pages/events';
import Training from './pages/training';
import Strategic from './pages/strategic'; 
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home page with all components */}
        <Route
          path="/"
          element={
            <>

              <Home />
              <AboutUs />
              <OurServices />
              <Footer />
            </>
          }
        />
        {/* Individual pages */}
        <Route path="/business" element={<Business />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/mEvaluation" element={<MEvaluation />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/humanResource" element={<HumanResource />} />
        <Route path="/events" element={<Events />} />
        <Route path="/training" element={<Training />} />
        <Route path="/strategic" element={<Strategic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
