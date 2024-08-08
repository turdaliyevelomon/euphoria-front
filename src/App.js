
//App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import ListWomen from './components/listWomen/ListWomen';
import ListMen from './components/listMen/ListMen';
import ProductDetail from './components/productDetail/ProductDetail';
import Wishlist from './components/wishlist/Wishlist';
import Cart from './components/cart/Cart';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PageNotFound from './components/PageNotFound';
import Orders from './components/orders/Orders';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Routes>    
        <Route path='/' element={isLoggedIn ? <Home isLoggedIn={isLoggedIn} /> : <Navigate to='/login' />} />
        <Route path='/products/listWomen' element={isLoggedIn ? <ListWomen /> : <Navigate to='/login' />} />
        <Route path='/products/listMen' element={isLoggedIn ? <ListMen /> : <Navigate to='/login' />} />
        <Route path='/products/detail/:id' element={isLoggedIn ? <ProductDetail /> : <Navigate to='/login' /> } />
        <Route path='/wishlist' element={isLoggedIn ? <Wishlist /> : <Navigate to='/login' />} />
        <Route path='/orders' element={isLoggedIn ? <Orders /> : <Navigate to='/login' />} />
        <Route path='/cart' element={isLoggedIn ? <Cart /> : <Navigate to='/login' />} />
        <Route
          path='/login'
          element={
            isLoggedIn ? (
              <Navigate to='/' />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path='/register'
          element={
            isLoggedIn ? (
              <Navigate to='/' />
            ) : (
              <Register setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
  );
}

export default App;
