import React from "react"
import photogrid from "../images/photo-grid.png";

export default function Hero(){
    return(
        <section className="hero-section">
        <div className="photo-div">
        <img className="hero-photo" src={photogrid}/>
        </div>

        <div className="text-div">
        <h1 className="hero--header">Online Experiences</h1>
        
        <p className="hero--text">Join unique interactive activities led
            by one-of-a-kind hosts-all without leaving 
            home.
        </p>
        </div>

    </section>
    )
}