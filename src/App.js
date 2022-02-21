import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import {Routes,Route} from 'react-router-dom';
import Account from './components/Account';
import Shop from './components/Shop';

function App() {
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

export default App;
