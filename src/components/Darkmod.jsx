import React from 'react';
import useDarkMode from 'use-dark-mode';
 import "./Navbar.css"

const Darkmod = () => {
  const darkMode = useDarkMode(false);
 
  return (
    <div className="darkB">
      <button className="sun" type="button" onClick={darkMode.disable}>
        🌞
      </button>
     
      <button className="lune" type="button" onClick={darkMode.enable}>
        🌚
      </button>
    </div>
  );
};
 
export default Darkmod;