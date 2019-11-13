import React from "react";
import StatCard from "../components/statics/StatCard";
import  "../components/statics/StatCard.css";
const statArr = [
  {
    image: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    texte:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    image: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    texte: "booked last month"
  },
  {
    image: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    texte: "visit us every month"
  },
  {
    image: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    texte: "trust in our solutions",
  }
];
function Stat() {
  return (
    <div className="stat">
        <div className="platform">
        <h1>The world's biggest healthcare platform</h1>
        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        <img className="stat-logo" src="https://www.docplanner.com/img/sygnet.svg" alt='...'/>
        </div>
        <div className="chiffre">
      {statArr.map((el, key) => (
        <StatCard
          key={key}
          image={el.image}
          title={el.title}
          texte={el.texte}
        />
      ))}
      </div>
    </div>
  );
}
export default Stat;
