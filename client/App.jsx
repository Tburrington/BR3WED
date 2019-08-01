import React, { Component } from 'react';
import Header from './components/Header.jsx';
import CoffeeShopsContainer from './components/CoffeeShopsContainer.jsx';
import './styles/styles.scss';
require('/Users/Admin/Desktop/git/solo-project/BR3WED/build/images/2dc2ce33afa21d731fea1f2f497ecbad-coffee.jpg')




const App = () => {


    return (
        <div className="main">
           <Header/>
           <CoffeeShopsContainer />
        </div>
    )
}

export default App;
