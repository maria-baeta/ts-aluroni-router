import { Home, Menu } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;