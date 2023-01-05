import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from './navbar/Navbar'
import Skills from './skills/Skills'
import Projects from './projects/Projects'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
