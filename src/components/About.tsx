import Title from "./Title";
import img from "../assets/Photo-Maxime.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

// Tableau des mes éléments
const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description:
      "Je suis un développeur frontend passionné, capable de transformer chaque idée en interface fluide, réactive et intuitive.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description:
      "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description:
      "Concevoir des interfaces à la fois attrayantes, ergonomiques et performantes, c’est à la fois le cœur de mon métier de développeur et mon objectif au quotidien.",
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];
const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="A propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img
            src={img}
            alt="Photo de Maxime"
            className="w-96 object-cover rounded-xl"
          />
        </div>
        {
          // Section dynamique pour afficher les compétences et expériences
        }
        <div className="md: ml-4 space-y-4">
          {aboutSections.map((section) => (
            // Crée une div pour chaque section du profil
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl "
            >
              {/* Affiche l'icône de la compétence */}
              <div className="mb-2 md: mb-0">{section.icon}</div>

              {/* Contient le titre et la description de la compétence */}
              <div className="md: ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text.sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
