import React from 'react'
import logo from '../assets/img/Logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
            <div class="bar">
            <div class="logo"><img src={logo} alt="" /></div>
            <div class="bar-content">
                <ul class="uls">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                    <li><Link to={'/blogs'}>Blog</Link></li>
                    <li><Link to={'/rooms'}>rooms</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
