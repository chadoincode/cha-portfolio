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
    </div>
  )
}

export default Header