import { Footer, Header } from "components";
import { Home, Menu, About, NoResult, Details } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <main className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path='sugestao/:id' element={<Details />} />
          <Route path="*" element={<NoResult />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default AppRoute;