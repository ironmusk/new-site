import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Prices from './pages/Prices';
import Portfolio from './pages/Portfolio';
import HowToOrder from './pages/HowToOrder';
import Delivery from './pages/Delivery';
import Reviews from './pages/Reviews';
import Contacts from './pages/Contacts';
import Privacy from './pages/Privacy';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:category" element={<Catalog />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
      <FloatingButtons />
    </Router>
  );
}

export default App;
