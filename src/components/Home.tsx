import { Mail } from "lucide-react";
import img from "../assets/Photo-Maxime.jpg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:my-32 my-10 " id="Home">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0 ">
          {" "}
          Bonjour, <br /> je suis
          <span className="text-accent"> Maxime</span>{" "}
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          {" "}
          Développeur fullstack junior spécialisé en React, PHP et Java, <br />
          je suis à la recherche d'une nouvelle opportunité professionnelle.
          Je reste à votre entière disposition pour tout renseignement complémentaire ou collaboration.{" "}
        </p>
        {/** Bouton contact par mail */}
        <a href="mailto:m.garciapro34@gmail.com" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>
      {/* Style CSS de l'image*/}
      <div className="md:ml-30 ">
        <img
          src={img}
          alt="Photo de Maxime"
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
          /* Contoure de l'image*/
          style={{ borderRadius: "62% 38% 23% 77% / 27% 12% 88% 73% "}}
        />
      </div>
    </div>
  );
};

export default Home;
