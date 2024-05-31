// Importing the React library which is necessary for creating React components.
import React from "react";

// Defining a static functional component
function Header() {
 return (
  <header className="header">
   <img src="./src/images/troll-face.png" className="header--image" />
   <h2 className="header--title">Meme Generator</h2>
   <h4 className="header--project">React Course - Project 3</h4>
  </header>
 );
}

//It is exported so that other parts of the application can have access to it
export default Header;
