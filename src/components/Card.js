import React from "react";
import star from "../images/star.png";
// import cardpic from "../images/card-pic.png";

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="profile-card first-pc">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            {/* <img className="card-pic" src={require(`../../public/imgs${props.img}`)}/> */}
            <img src={props.coverImg} className="card-pic" />

            <div className="ratings">
                <img className="star" src={star}/>
                <span className="rating-text">{props.stats.rating}</span> 
                <span id="country-text"> ({props.stats.reviewCount}) • {props.location}</span>
                <p className="course-title">{props.title}</p>
                <p className="payment"><strong>From ${props.price}</strong> / person</p>

            </div>

        </div>
    )
}