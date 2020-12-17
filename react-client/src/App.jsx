// import React, { Component } from 'react';
import React from 'react';

/* Import Components */
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import AppliedList from './components/AppliedList.jsx';
import InterviewsList from './components/InterviewsList.jsx';
import OffersList from './components/OffersList.jsx';
import RejectedList from './components/RejectedList.jsx';


const App = () => {
  return (
    <div className="app-container">
      <div className="app">
        <Header/><br></br>
        <HomePage/>
      </div>
    </div>
  )
};

export default App;