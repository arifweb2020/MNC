import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {



  return (
    <BrowserRouter>
    <div className="App">
      
      <MyNav/>
      <Home/>
      <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
