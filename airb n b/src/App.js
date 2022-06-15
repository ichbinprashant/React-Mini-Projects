import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"


export default function App(){

    const card_data = data.map(item => {
        return (
            <Card 
                key={item.id} //unique property to get rid of warning
                item = {item} 
                // OR {...items}
            />
        )
    })

    return(
        <>
            <Navbar />
            <Hero />
            <section className="card--list">
                {card_data}
            </section>
            
        </>
    )
}
    
