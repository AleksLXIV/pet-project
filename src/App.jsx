import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footert';


function App() {
 
  return (
    <BrowserRouter>
      <Fragment>
        <Header /> 
        <AppRouter />
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
