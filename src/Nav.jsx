import React from 'react';

const topLinks = [
  {name:'MODEL S'},
  {name:'MODEL 3'},
  {name:'MODEL X'},
  {name:'MODEL Y'},
  {name:'CYBERTRUCK'},
  {name:'ROADSTER'},
  {name:'ENERGY'}
];

const rightLinks = [
  {name: 'SHOP'},
  {name: 'SIGN IN'}
]


function Nav() {
  const navStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 13fr 1fr',
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    height: '55px',
    fontSize: '13px',
    textAlign: 'center',
    zIndex: '1',
    overflow: 'hidden'
  };
  
  const burger = {
    width: '17px',
    height:'17px',
    float: 'right',
    marginBottom: '15px'
  };
  const linx = {
    fontFamily: 'Arial,sans-serif',
    fontWeight: 'bold',
    textDecoration: 'none',
    listStyleType: 'none',
    color: 'white',
    float: 'left',
    margin: '5px 10px'
  };
  const linx2 = {
    fontFamily: 'Arial,sans-serif',
    fontWeight: 'bold',
    textDecoration: 'none',
    listStyleType: 'none',
    color: 'white',
    float: 'left',
    display: 'inline-block',
    paddingRight: '20px'

  };
  const logo = {
    height: "50px",
    width: "100px",
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: "7px"
  };
  const ulStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  const ulStyle2 = {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    width: '150px',
    margin: '17px',
    float: 'right'
  };


  return (
    <div className="nav" >
    <header className="teslaHeader" style={navStyle}>
    <h1 className="logo" style={logo}>
    <img src="/tesla.svg" alt="tesla logo"></img>
    </h1>
    <ul style={ulStyle}>
    {topLinks.map((link,i) => (
      <a style={linx} key={i} href={`https://www.tesla.com/${link.name.toLowerCase().split(' ').join('')}`}>
      <li>{link.name}</li>
      </a>))}
      </ul>
      <ul style={ulStyle2}>
        {rightLinks.map((link,i) => (
      <a style={linx2} key={i} href={`https://www.tesla.com/${link.name.toLowerCase().split(' ').join('')}`}>
      <li>{link.name}</li>
      </a>))}
      <img src="/burger.png" alt="for more cliuck here" style={burger}></img>
      </ul>
      </header>
      </div>
    );
  }

  export default Nav;
