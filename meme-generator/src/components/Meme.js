import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="top-text"/>
                <input type="text" className="form-input"placeholder="bottom-text"/>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image </button>
                <img src={memeImage}className="meme-image" alt="experiences"/>

            </div>
        </main>
    )
}