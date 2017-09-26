import React, { Component } from 'react';
import './App.css';

export class Blog extends Component {
  componentDidMount() {
      document.querySelector('footer').style.display = 'none'
  }
  render() {
    return (
      <div className="notfound">
        <p>Coming soon</p>
      </div>   
    );
  }
}