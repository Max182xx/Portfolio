import Title from "./Title";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/Portfolio.png";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "J'ai réalisé un site statique en React, que j’ai ensuite déployé via Netlify. Ce site me sert de vitrine professionnelle :" +
      "il présente mon parcours, mes compétences, ainsi que les projets que je réalise et de mes expériences personnelles. " +
      "C’est un moyen pour moi de montrer concrètement ce que je sais faire et de me présenter de manière plus interactive. "+
      "Vous pouvez consulter ce projet via le bouton GitHub ci-dessous." ,
    technologies: ["React", "Tailwind CSS", "Netlify"],
    repoLink: "hhttps://github.com/Max182xx/Portfolio",
    image: img2,
  },

  {
    id: 2,
    title: "Gestionnaire de stock",
    description:
      "Je développe actuellement une application de gestion de stock en utilisant React, Next.js et Prisma pour la gestion de la base de données. " +
      "Ce projet full-stack me permet de mettre en œuvre mes compétences à la fois en front-end (structuration des composants, gestion des états, routing, etc.) " +
      "et en back-end (modélisation de la base de données, requêtes SQL via Prisma, logique serveur avec les API routes de Next.js). " +
      "L'objectif est de permettre un suivi simple et efficace des stocks d’articles, avec des fonctionnalités comme l’ajout, la modification et la suppression de produits, " +
      "ainsi que l’affichage en temps réel des quantités disponibles. Vous pouvez suivre l’évolution de mon travail et consulter le code source sur GitHub via le lien ci-dessous.",
    technologies: ["React", "Next.js", "Prisma"],
    repoLink: "https://github.com/Max182xx/asso-stock",
    image: img1,
  },
];


const Projects = () => {
  return (
    <div className="mt-10" id="Projects">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shodow-lg "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rouded-xl h-56 object-cover"
            />
            <div>
              <h1 className="y-2 font-bold">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span className="badge badge-accent badge-sm">{tech}</span>
              ))}
            </div>
            <div className="flex ">
              <a
                className="btn btn-neutral w-full"
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
