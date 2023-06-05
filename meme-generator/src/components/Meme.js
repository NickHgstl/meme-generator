import React from "react";
import memesData from "../memesData";

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        const {name, value, type} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage : url,
            [name]: value
        }))
        console.log(meme)
    }

    function setMemeText(){
        console.log(meme)
        const {name, value, type} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="top-text" name="topText" onChange={setMemeText} value={meme.topText}/>
                <input type="text" className="form-input"placeholder="bottom-text" name="bottomText" onChange={setMemeText} value={meme.bottomText}/>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image </button>
                <div className="meme">
                    <img src={meme.randomImage}className="meme-image" alt="experiences"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>

            </div>
        </main>
    )
}