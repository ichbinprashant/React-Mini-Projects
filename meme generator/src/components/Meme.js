import React, {useEffect} from "react"

export default function Meme(){

    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        
    }, [])

    // alternatively using async method for useEffect
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

    function getMemeImg(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return(
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    placeholder="Top text" 
                    type="text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                <input 
                    className="form--input" 
                    placeholder="Bottom text" 
                    type="text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                <button 
                    className="form--button" 
                    onClick={getMemeImg} >Get a new meme image
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}