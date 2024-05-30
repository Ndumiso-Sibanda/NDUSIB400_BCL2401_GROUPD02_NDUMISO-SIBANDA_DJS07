import React from "react";

export default function Meme() {
 const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg",
 });
 const [allMemes, setAllMemes] = React.useState([]);
}
