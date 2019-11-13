import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Intro from "./components/Intro/Intro";
import Sponsor from "./components/sponsors/Sponsor";
import Stat from "./views/Stat";
import Ville from "./views/Ville";
import ServicePlan from "./views/ServicePlan";


const tab = [
  { menu: "About us" },
  { menu: "Career" },
  {
    menu: "Departments",
    submenu: [
      "Marketing",
      "Customer sucess & sales",
      "It, Product,Design & UK",
      "Finance & Administration",
      "HR & more"
    ]
  }
];
function App() {
  return (
    <div className="App">
      <Header arr={tab} />
      <Intro />
      <ServicePlan/>
      <Sponsor />
      <Stat />
      <Ville />
      <Footer />
    </div>
  );
}

export default App;
