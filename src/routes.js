import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';

export default
         (
        <Switch>
           <Route exact path='/' component={ LandingPage }/> 
        </Switch>
        );
    
