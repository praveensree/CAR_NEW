import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCarComponent from './components/ListCarComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateCarComponent from './components/UpdateCarComponent';
import ViewCarComponent from './components/ViewCarComponent';
import CreateCarComponent from './components/CreateCarComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListCarComponent}></Route>
                          <Route path = "/Car/:id" component = {CreateCarComponent}></Route>
                          <Route path = "/View/:id" component = {ViewCarComponent}></Route>
                          <Route path = "/CarUpdate/:id" component = {UpdateCarComponent}></Route> 
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;