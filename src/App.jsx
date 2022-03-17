//NPM Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Project files
import Category from './pages/Catagory';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Product from './pages/Product';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:category" element={<Category />} />

          <Route path="/product/:product" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
