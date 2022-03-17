//NPM Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Project files
import Category from './pages/Catagory';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Product from './pages/Product';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
