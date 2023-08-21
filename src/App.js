import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollTop from './utils/ScrollTop';
import HomeLayout from './layout/HomeLayout';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/project/projects';
import Services from './pages/service/services';
import Contact from './pages/contact/contact';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
