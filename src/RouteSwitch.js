import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from './navbar/Navbar'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
