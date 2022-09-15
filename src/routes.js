import { Header, Navbar } from "components";
import { Home, Menu } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default AppRoute;