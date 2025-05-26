import { Container, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 justify-around flex flex-col-reverse sm:flex-row justify-center items-center space-between">
      <aside>
        <Container className="w-10 h-10 " />
        <p className="font-bold">
          MAX
          <span className="text-accent">DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/Max182xx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://www.linkedin.com/in/maxime-garcia-max182xx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
