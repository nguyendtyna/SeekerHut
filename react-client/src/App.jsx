// import React, { Component } from 'react';
import React from 'react';

/* Import Components */
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import AppStatistics from './components/AppStatistics.jsx';
import AppliedList from './components/AppliedList.jsx';
import InterviewsList from './components/InterviewsList.jsx';
import OffersList from './components/OffersList.jsx';
import RejectedList from './components/RejectedList.jsx';

/* Test dummy data */
const data = [
  {
    title: 'APPLIED',
    items: [
      '1',
      '2',
      '3'
    ]
  },
  {
    title: 'INTERVIEWS',
    items: [
      '4'
    ]
  },
  {
    title: 'OFFERS',
    items: [
      '5'
    ]
  },
  {
    title: 'REJECTED',
    items: [
      '6',
      '7'
    ]
  }
];

const App = () => {
  return (
    <div className="app-container">
      <div className="app">
        <Header/><br></br>
        <div className="app-header">
          <HomePage data={data}/>
        </div><br></br>
        <AppStatistics />
      </div>
    </div>
  )
};

export default App;