import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import cardPic from "./images/katie-zaferes.png"
import data from "./data"

export default function App() {
  
  const cardElements = data.map(d => {
    return( <Card
    key = {d.id}
    {...d}
    
  />
    )
  })
  return (
    <div className="app">
      <Navbar />
      <Hero/>
      <section className="cards-list">
                {cardElements}
            </section>
    </div>
  );
}


