import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

export class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
         <h1>404</h1>
         <h2>I'm sorry, but I couldn't find what you were looking for</h2>
         <Link to='/'>Go Home</Link>
      </div>   
    );
  }
}