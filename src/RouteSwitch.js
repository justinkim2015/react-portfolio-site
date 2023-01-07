import { HashRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from './navbar/Navbar'

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Navbar />
      <AnimatedRoutes />
    </HashRouter>
  );
};

export default RouteSwitch;
