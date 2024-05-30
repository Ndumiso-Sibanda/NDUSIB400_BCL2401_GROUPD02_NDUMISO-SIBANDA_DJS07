import React from "react";

export default function Meme() {
 const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg",
 });
 const [allMemes, setAllMemes] = React.useState([]);

 React.useEffect(() => {
  async function getMeme() {
   const res = await fetch("https://api.imgflip.com/get_memes");
   const data = await res.json();
   setAllMemes(data.data.memes);
  }
  getMemes();
 }, []);

 function getMemeImage() {
  const randomNumber = math.floor(Math.random() * allMemes.length);
  const url = allMemes[randomNumber].url;
  setMeme((prevMeme) => ({
   ...prevMeme,
   randomImage: url,
  }));
 }
 function handleChange(event) {
  const { name, value } = event.target;
  setMeme((prevMeme) => ({
   ...prevMeme,
   [name]: value,
  }));
 }
}
