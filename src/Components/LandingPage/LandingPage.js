import React, { Component } from 'react';
import CardComponent from '../CardComponent/CardComponent'
import "./LandingPage.css"


export default class  extends Component {
    render() {
        window.scrollTo(0, 0)
        return (
        <div>
            <div className="background-main">
            <CardComponent/>
            </div>
        </div>
        );
    }
}