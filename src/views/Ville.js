import React from 'react'
import Pays from "../components/pays/Pays";
import "../components/pays/pays.css";

const ville = [
  {image: "https://www.docplanner.com/images/warsaw.png", title: "Warsaw" },
  {image: "https://www.docplanner.com/images/barcelona.png",title: "Barcelona"},
  {image:"https://www.docplanner.com/images/istanbul.png", title:"Istanbul"},
  {image:"https://www.docplanner.com/images/rome.png", title:"Rome"},
  {image:"https://www.docplanner.com/images/mexico-city.png", title:"mexico-city"},
  {image:"https://www.docplanner.com/images/curitiba.png", title:"Curitiba"},
];


function Ville() {
    return (
    <section className="offices">
        <div className="office-header">
            <h1>Improve the lives of millions. Change yours forever</h1>
            <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
        </div>
        <div className="pays">
            {ville.map((el, key) => (
        <Pays
          key={key}
          image={el.image}
          title={el.title}
        />
      ))} 
        </div>
    </section>
    )
}

export default Ville;