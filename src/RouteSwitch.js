import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from './navbar/Navbar'
import Skills from './skills/Skills'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
