import { Instagram } from "lucide-react";
import { Github } from "lucide-react";

const MainContent = () => {
  return(
    <div className="flex place-items-center justify-center">
      <div className="py-5 px-15 sm:py-11 sm:px-20 text-light w-[600px] md:w-[900px]">
        <div className="text-justify sm:text-left grid gap-3">
          <h1 className="text-lg font-bold sm:text-3xl">Hi, I'm Ayesha!!</h1>
          <p className="sm:text-md">
            An Informatics Engineering student passionate about Web Development and Video Editing.
            Crafting simple, functional, and meaningful digital experiences.
          </p>
          <p className="sm:text-md">
            I enjoy building simple web applications and exploring creativity through video editing and graphic design.
            I have interest in Video Editing, Graphic Design, Front-End Development.
            Currently, I'm sharpening my skills in React.js, SEO, Adobe Premiere Pro, and Adobe After Effects.
          </p>
          <p className="sm:text-md">
            When I'm not coding or editing, you can find me playing games / reading books / exploring new ideas.
          </p>
          <p className="sm:text-md">
            You can look all of my projects and my creations in <a className="underline" href="/projects">Projects</a>
          </p>
          <p className="sm:text-md">
            Also my designs and sum arts in <a className="underline" href="/gallery">Gallery</a>
          </p>
          <p>
            My other Socials:
          </p>
          <div className="flex justify-start gap-2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent