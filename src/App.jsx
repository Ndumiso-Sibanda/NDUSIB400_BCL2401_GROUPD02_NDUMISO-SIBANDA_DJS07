import React from "react";
// Import  Header component
import Header from "./components/Header";
// Import  Meme component
import Meme from "./components/Meme";

// Definefunctional component
function App() {
 return (
  // React fragments (<> </>) are used here to wrap the components without adding extra nodes to the DOM.
  <>
   {/* Renders Header component */}
   <Header />
   {/* Renders Meme component */}
   <Meme />
  </>
 );
}
// Export the App component
export default App;
