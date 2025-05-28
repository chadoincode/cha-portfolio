import FadeIn from "../animations/FadeIn"
import Button from "../atoms/Button"
import { Instagram } from "lucide-react"
import { Github } from "lucide-react"

const MainContent = () => {
  return(
    <div className="flex place-items-center justify-center">
      <div className="py-5 px-15 sm:py-11 sm:px-20 text-light w-[600px] md:w-[900px]">
        <div className="text-justify sm:text-left grid gap-3">
          <FadeIn delay={0.2}>
            <h1 className="text-lg font-bold sm:text-3xl">Hi, I'm Ayesha</h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="sm:text-md">
              An Informatics Engineering student passionate about Web Development and Video Editing.
              Crafting simple, functional, and meaningful digital experiences.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="sm:text-md">
              I enjoy building simple web applications and exploring creativity through video editing and graphic design.
              I have interest in Video Editing, Graphic Design, Front-End Development.
              Currently, I'm sharpening my skills in React.js, SEO, Adobe Premiere Pro, and Adobe After Effects.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="sm:text-md">
              When I'm not coding or editing, you can find me playing games / reading books / exploring new ideas.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="sm:text-md">
              You can look all of my projects and my creations in <a className="underline" href="/projects">Projects</a>
            </p>
            <p className="sm:text-md">
              Also my designs and some arts in <a className="underline" href="/gallery">Gallery</a>
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p>
              My other Socials:
            </p>
          </FadeIn>
          <div className="flex justify-start gap-2">
            <FadeIn delay={0.8}>
              <div className="p-3 bg-hover-card w-fit rounded-lg cursor-pointer text-sm">
                <Button
                  text="Instagram"
                  href="https://www.instagram.com/chadoincode"
                  className="flex gap-1"
                >
                    <Instagram size={20} />
                  </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.9}>
              <div className="p-3 bg-hover-card w-fit rounded-lg cursor-pointer text-sm">
                <Button
                  text="Github"
                  href="https://www.github.com/chadoincode"
                  className="flex gap-1"
                >
                    <Github size={20} />
                  </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent