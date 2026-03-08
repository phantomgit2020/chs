import Navbar from "@/components/Navbar";
import CiudadSolidaria from "./views/Home/CiudadSolidaria";
import Hero from "./views/Home/Hero";
import Seguridad from "./views/Home/Seguridad";
import Transparencia from "./views/Home/Transparencia";
import Footer from "@/components/Footer";
import Propuesta from "./views/Home/Propuesta";
import PlanGobierno from "./views/Home/PlanGobierno";
import HaznosTuPropuesta from "./views/Home/HaznosTuPropuesta";
import GestionEficiente from "./views/Home/GestionEficiente";
import ObrasBienHechas from "./views/Home/ObrasBienHechas";
import CompromisoDeCambio from "./views/Home/CompromisoDeCambio";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Propuesta />
      <PlanGobierno />
      <HaznosTuPropuesta/>
      <Transparencia />
      <Seguridad />
      <CiudadSolidaria />
      <GestionEficiente />
      <ObrasBienHechas />
      <CompromisoDeCambio />
      <Footer />
    </div>
  );
}
