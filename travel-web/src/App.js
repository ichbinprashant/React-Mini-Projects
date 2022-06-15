import React from  "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./Data.js"

export default function App(){

  const card_data = data.map(items =>{
    return(
      <Card item={items} />
    )
  })
  return(
    <div>
      <Navbar />
      <section>
        {card_data}
      </section>
    </div>
  )
}