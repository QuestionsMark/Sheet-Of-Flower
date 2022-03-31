import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import News from './News/News';
import Pictures from './Pictures';
import Cards from './Cards/Cards';
import Products from './Products';
import Contact from './Contact/Contact';

const Main = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/pictures" element={<Pictures />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
     );
}
 
export default Main;