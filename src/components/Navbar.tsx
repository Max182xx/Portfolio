import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <a
        href="#"
        className="flex items-center font-bold text-3xl md:text-xl"
      >
      <Container className="mr-2" />
      MAX
      <span className="text-accent">DEV</span>
      </a>
    </div>
  );
};
export default Navbar;
