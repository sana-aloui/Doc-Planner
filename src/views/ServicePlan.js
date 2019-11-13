import React from "react";
import Services from "../components/services/Services";
import "../components/services/Service.css";

const info = [
  {
    title: "For patients",
    texte: "Find a doctor, book a visit and solve any health-related doubt",
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    country:["CHOOSE COUNTRY","ARGENTINA", "AUSTRALIA", "BRAZIL", "CHILE", "COLOMBIA", "CZECH", "FRANCE", "ITALY", "PERU POLAND", "ORTUGAL", "SPAIN", "TURKEY", "UK"]
    
}, 
{ title: "For doctors",
texte: "Save time managing visits and cut no-shows by half",
image: "https://www.docplanner.com/img/screen-saas@2x.png",
country:null
  }
];

export default function ServicePlan() {
  return (
    <div className="services">
        <div className="elements">
      {info.map((el, key) => (
        <Services
          key={key}         
          title={el.title}
          texte={el.texte}
          image={el.image}
          country={el.country}
        />
      ))}
        </div>
    </div>
    
  );
}
