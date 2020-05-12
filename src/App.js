import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Purchase from './components/purchase';

// import Header from './components/Header';
// import AddedFeatures from './components/AddedFeatures';
// import AdditionalFeatures from './components/AdditionalFeatures';
// import Total from './components/Total';

const App = () => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  return (
  <div>
    <Route exact path='/home' component={HomePage} /> 
    <Route exact path='/purchase' render = { props =>
    <Purchase />  
    } />
    </div>
  );
};

export default App;
