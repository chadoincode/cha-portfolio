import ButtonText from "src/atoms/ButtonText";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { PanelsLeftBottomIcon } from "lucide-react";

const Header = () => {
  return(
    <div className="flex items-center justify-between sm:px-20 left-0 px-10 py-5">
      <a href="/" title="Home" className="font-bold sm:text-lg text-md text-light">chadoincode</a>
      <nav className="flex justify-between gap-3 sm:gap-4">
        <a href="/projects">
          <ButtonText text="Projects" />
        </a>
        <a href="/gallery">
          <ButtonText text="Gallery" />
        </a>
        <a href="/projects" className="block md:hidden">
          <HeartIcon color="#FDFDF5" />
        </a>
        <a href="/gallery" className="block md:hidden">
          <PanelsLeftBottomIcon color="#FDFDF5" />
        </a>
        <a href="https://www.github.com/chadoincode" target="_blank" title="Github">
          <Github color="#FDFDF5" />
        </a>
        <a href="https://www.linkedin.com/in/ayeshadearraisa/" target="_blank" title="LinkedIn">
          <Linkedin color="#FDFDF5" />
        </a>
        <a href="mailto:ayeshadearraisa@gmail.com" target="_blank" title="Email">
          <Mail color="#FDFDF5" />
        </a>
      </nav>
    </div>
  )
}

export default Header