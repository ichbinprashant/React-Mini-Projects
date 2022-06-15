import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={`./images/${props.item.imageUrl}`} className="card--img" />
            <div className="card--right">
                <div className="card--location-bar">
                    <img src="./images/location.png" className="card--loc"/>
                    <span className="card--country">{props.item.location.toUpperCase()}</span>
                    <a href={props.item.googleMapsUrl} className="card--gmap">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}