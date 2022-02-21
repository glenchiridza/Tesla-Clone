import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ShopHeader from './components/ShopHeader';
import Home from './components/Home';

import {Routes,Route} from 'react-router-dom';
import Account from './components/Account';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  if(window.location.href.includes('shop')){
    return (
      <div className="App">
        
        <Routes>
          <Route path='/' element={< Home />} exact={true}/>
          <Route path='shop' element={< Shop />}/>
          <Route path='account' element={< Account />}/>
          <Route path='cart' element={< Cart/>}/>
  
        </Routes>  ,
   
        <ShopHeader />
       
      </div>
    );
}
  else {
    return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={< Home />} exact={true}/>
        <Route path='shop' element={< Shop />}/>
        <Route path='account' element={< Account />}/>

      </Routes>  ,    
        
      <Header />

    </div>
  );
    }
    //end else


}

export default App;
