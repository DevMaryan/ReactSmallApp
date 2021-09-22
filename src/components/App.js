import React from 'react';
import {Nav} from './Nav';
import {About} from './About'
import {Contact} from './Contact';
import {Data} from './Data';
import {Switch, Route} from 'react-router-dom';
import '../css/app.css';

export function App(){
  return(
    <div id = 'app'>
        <Nav/>
        <Switch>
          <Route path = '/about' component = {About}/>
          <Route path = '/contact' component = {Contact}/>
          <Route path = '/date' component = {Data}/>
        </Switch>
        

    </div>
  )
}