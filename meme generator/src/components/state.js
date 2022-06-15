//unified and local state

//app starts
import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    function toggle(id){
        setSquares((prev) => {
           return prev.map((squares)=>{
               return squares.id === id ? {...squares, on: !squares.on}: squares
           })
        })
    }
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
            
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}


//app ends

//box starts 
import React from "react"

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={() => props.toggle(props.id)}
        >
        </div>
    )
}

//box ends

//boxes data 

// export default [
//     {
//         id: 1,
//         on: true
//     },   
//     {
//         id: 2,
//         on: false
//     },   
//     {
//         id: 3,
//         on: true
//     },   
//     {
//         id: 4,
//         on: true
//     },   
//     {
//         id: 5,
//         on: false
//     },   
//     {
//         id: 6,
//         on: false
//     },   
// ]

//start