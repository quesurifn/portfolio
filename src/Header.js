import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

export class Header extends Component {
  render() {
    return (

             <div className='header'>
                <h1>Kyle C R Fahey</h1>
                <h2>Full-Stack Developer</h2>
                <div className='links-box'>
                    <Link to='/'>Home</Link>
                    <Link to='/resume'>Résumé</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>

    );
  }
} 
 
