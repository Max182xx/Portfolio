import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl ">
        <Container className="mr-2" />
        MAX
        <span className="text-accent">DEV</span>
      </a>
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#Home" className="btn btn-ghost whitespace-nowrap">
            {" "}
            Accueil
          </a>
        </li>
        <li>
          <a href="#About" className="btn btn-ghost whitespace-nowrap">
            {" "}
            A propos
          </a>
        </li>
        <li>
          <a href="#Experiences" className="btn btn-ghost whitespace-nowrap">
            {" "}
            Mes expériences
            <li>
              <a href="#Projects" className="btn btn-ghost whitespace-nowrap">
                {" "}
                Mes projets
              </a>
            </li>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
