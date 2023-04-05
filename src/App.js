
import Products from "./components/Products";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import ShowProduct from './components/ShowProduct';
import { ProductProvider } from "./Contexts/ProductContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ArticleList from "./components/articles/ArticleList";

function App() {
  return (
    <>
      <Router>
      
        <ProductProvider>
        <Navbar />
          <Routes>
          
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ShowProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<ArticleList />} />
            <Route path="/contact" element={<Contact />} />

            </Routes>
          </ProductProvider>
      </Router>
      
    </>
  );
}

export default App;
