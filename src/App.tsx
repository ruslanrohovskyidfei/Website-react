import React, {useState} from 'react';
import Header from './Sections/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from "./Pages/Shop";
import Product from './Pages/Product';
import Help from './Pages/Help';
import Search from './Pages/Search';
import Cart from './Pages/Cart';
import Footer from './Sections/Footer';
import {Routes, Route} from "react-router-dom";
import './Styles/App.css';

function App() {
  const [state, refreshState] = useState(0);
  const refresh: Function = () => refreshState(state + 1);

    return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/shop/:title' element={<Product refreshComponent={refresh} />} />
            <Route path='/search' element={<Search/>} />
            <Route path='/search/:name' element={<Search/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='/cart' element={<Cart refreshComponent={refresh} />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
