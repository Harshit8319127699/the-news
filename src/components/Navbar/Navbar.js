import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"
function Navbar() {
  const linkStyle = {
    marginRight: "5vmax",
    textDecoration: "none",
    color: 'white',
    fontFamily:'Product sans',
    fontSize:"1vmax"
  };
  const linkStyle2 = {
    marginLeft: "5vmax",
    textDecoration: "none",
    color: 'white',
    fontFamily:'Product sans',
    fontSize:"1vmax"
  };
  const linkStyle3 = {
    marginRight: "7vmax",
    textDecoration: "none",
    color: 'white',
    fontFamily:'Product sans',
    fontSize:"1.3vmax",
    marginTop:'0.4vmax'
    
  };
  
  
  return (
    <nav>
      <Link  to='/'><i class="ri-home-2-line" style={linkStyle3}></i></Link>

      <Link style={linkStyle} to='/economics'>Economics</Link>
      <Link style={linkStyle} to='/health'>Health</Link>
      <Link style={linkStyle} to='/entertainment'>Entertainment</Link>
<h1>The news</h1>
<Link style={linkStyle2} to='/politics'>Politics</Link>
<Link style={linkStyle2} to='/science'>Science</Link>
<Link style={linkStyle2} to='/sports'>Sports</Link>



    </nav>
  )
}

export default Navbar
