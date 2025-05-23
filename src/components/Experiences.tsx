// Importe les images pour les compétences techniques
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

// Importe les logos
import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";
import Title from "./Title";

// Tableau contenant les informations sur les compétences techniques
const skills = [
  { id: 1, name: "HTML", image: imgHTML }, // HTML
  { id: 2, name: "CSS", image: imgCSS }, // CSS
  { id: 3, name: "JavaScript", image: imgJS }, // JavaScript
  { id: 4, name: "React", image: imgREACT }, // React
  { id: 5, name: "Node.js", image: imgNODE }, // Node.js
  { id: 6, name: "Tailwind CSS", image: imgTAILWIND }, // Tailwind CSS
  { id: 7, name: "TypeScript", image: imgTYPE }, // TypeScript
  { id: 8, name: "Next.js", image: imgNEXT }, // Next.js
  { id: 9, name: "Prisma", image: imgPRISMA }, // Prisma
];

// Tableau contenant les informations sur les expériences professionnelles
const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Google",
    period: "Sep 2022 - Présent",
    description: [
      "Développement de nouvelles fonctionnalités pour Google Maps.",
      "Optimisation des performances de l'application.",
    ],
    image: google,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Meta",
    period: "Jan 2021 - Août 2022",
    description: [
      "Création d'une plateforme interne de collaboration pour les équipes.",
      "Mise en place d'une architecture scalable et optimisée.",
    ],
    image: meta,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Amazon",
    period: "Mai 2019 - Déc 2020",
    description: [
      "Développement d'une interface utilisateur pour Amazon Web Services.",
      "Implémentation des tests unitaires et E2E.",
    ],
    image: amazon,
  },
];

// Composant principal pour afficher les expériences professionnelles
const Experiences = () => {
  return (
    <div>
      <Title title="Expériences" />

      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center items-center flex-col "
            >
              {/* Affiche l'image de la compétence */}
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="objet-cover rounded-full h-full w-full"
                />
              </div>
              {/* Affiche le nom de la compétence */}
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Section pour les expériences professionnelles */}
        <div className="md:ml-4 flex flex-col space-y-4 ">
          {experiences.map((experience) => (
            // Crée une div pour chaque expérience professionnelle
            <div
              key={experience.id}
              className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                {/* Affiche l'image de l'entreprise */}
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="objet-cover h-10 w-10"
                />
                <div className="ml-4">
                  {/* Affiche le rôle et le nom de l'entreprise */}
                  <h1 className="text-xl text-accent font-bold">
                    {experience.role}, {experience.company}
                  </h1>
                  {/* Affiche la période */}
                  <span className="text-sm">{experience.period}</span>
                </div>
                {/* Liste des descriptions détaillées */}
                <ul className="list-disc ml-16 mt-2 ">
                  {experience.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
