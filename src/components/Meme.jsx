//Importing the react library

import React from "react";

function Meme() {
 // Define state variables

 const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  //Placeholder image
  randomImage: "http://i.imgflip.com/1bij.jpg",
 });

 const [allMemes, setAllMemes] = React.useState([]);

 //API fetching using useEffect

 React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
   .then((res) => res.json())
   .then((data) => setAllMemes(data.data.memes));

  // Empty dependency array ensures this runs only once on mount.
 }, []);

 // Function get  new random meme image.
 function getMemeImage() {
  // Generates random index depending on the allMemes array length.
  const randomNumber = Math.floor(Math.random() * allMemes.length);
  const url = allMemes[randomNumber].url;
  setMeme((prevMeme) => ({
   ...prevMeme,
   randomImage: url,
  }));
 }

 // Function that handles changes in the input fields.
 function handleChange(event) {
  const { name, value } = event.target;
  setMeme((prevMeme) => ({
   ...prevMeme,
   [name]: value,
  }));
 }

 // Return the JSX for rendering Meme component.
 return (
  <main>
   {/* Form for input fields */}
   <div className="form">
    {/* Top Text  */}
    <label>
     {" "}
     Top Text
     <input
      type="text"
      placeholder="Top text"
      className="form--input"
      name="topText"
      value={meme.topText}
      onChange={handleChange}
     />
    </label>
    {/* Bottom text  */}
    <label>
     {" "}
     Bottom Text
     <input
      type="text"
      placeholder="Bottom text"
      className="form--input"
      name="bottomText"
      value={meme.bottomText}
      onChange={handleChange}
     />
    </label>
    {/* Random meme generator button */}
    <button className="form--button" onClick={getMemeImage}>
     Get a new meme image 🖼
    </button>
   </div>
   {/* section for meme image and texts. */}
   <div className="meme">
    <img src={meme.randomImage} className="meme--image" />
    <h2 className="meme--text top">{meme.topText}</h2>
    <h2 className="meme--text bottom">{meme.bottomText}</h2>
   </div>
  </main>
 );
}

//exported for acces
export default Meme;
