import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Route from 'react-router-dom/Route';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import CreateJoin from './components/Join/CreateJoin';


const App = () => (
  <Router>
    {/* <Route path = '/' exact component = {CreateJoin} /> */}
    <Route path='/' exact component={Join} />
    <Route path='/chat' component={Chat} />
  </Router>
);

export default App;
