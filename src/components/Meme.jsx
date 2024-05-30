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
}
