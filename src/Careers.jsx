import React from 'react';
import { Link } from 'react-router-dom';

const careersStyle = {
  color: 'white',
  fontSize: '13px',
  fontWeight: 'thin',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '1060px',
  paddingLeft: '20px',
  paddingRight: '100px',
  position: 'relative',
  width: 'auto',
  diplay: 'block-inline',


}
const careerLinks = {
  listStyleType: 'none',
  margin: '100px',
  padding: '20px',
  overflow: 'hidden',
  clear: 'both',
  position: 'absolute',
  right: '1px',
  top: '-90px'
}
const linksStyles = {
  color: 'white',
  textAlign: 'center',
  padding: '5px',
  margin: '5px',
  textDecoration: 'none'
}
const listElementStyle = {
  float: 'left'
}
const title = {
  borderBottom: '1px solid',
  paddingBottom: '20px',
  paddingTop: '20px',
  fontWeight: 'normal',
  fontSize: "31px"

}

function Careers() {
  return (
    <div style={careersStyle}>
    <h1 className="section-title" style={title}>Careers</h1>

    <nav className="about-us">
    <ul className="nav-class" style={careerLinks}>
    <li style={listElementStyle}> <Link to="/about-us" className="nav-item" style={linksStyles}>About</Link></li>
    <li style={listElementStyle}> <a href="#careers" className="nav-item" style={linksStyles}/>Careers </li>
    <li style={listElementStyle}> <a href="#contact" className="nav-item" style={linksStyles}/>Contact </li>
    <li style={listElementStyle}> <a href="#legal" className="nav-item" style={linksStyles}/>Legal </li>
    <li style={listElementStyle}> <a href="#investors" className="nav-item" style={linksStyles}/>Investors </li>
    <li style={listElementStyle}> <a href="#suppliers" className="nav-item" style={linksStyles}/>Suppliers </li>
    </ul>
    </nav>
    </div>
  )
}

export default Careers;
