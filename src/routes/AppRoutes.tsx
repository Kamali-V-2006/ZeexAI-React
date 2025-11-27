import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index"; 
import NotFound from "../pages/NotFound"; 
import Services from "../pages/Services/Services";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/terms";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/Terms" element={<Terms />} />
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
