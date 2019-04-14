import React from 'react';
import '../Styles/_Header.scss';


const Header = (props) => {
  return (
    <header className="mainHeader">
      <h1>Jest Do It <img src="https://i.imgur.com/h5hvEDt.png" alt="Jest logo" className="jestLogo"/></h1>
    </header>
  );
};

export default Header;
