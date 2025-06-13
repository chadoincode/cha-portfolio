import FadeIn from "../animations/FadeIn"
import ScrollAnimation from "src/animations/ScrollAnimation"
import Button from "../atoms/Button"
import { Instagram } from "lucide-react"
import { Github } from "lucide-react"

const MainContent = () => {
  return(
    <div className="flex place-items-center justify-center">
      <div className="py-5 px-15 sm:py-11 sm:px-20 text-light w-[600px] md:w-[900px]">
        <div className="pb-5">
          <ScrollAnimation>
            <h1 className="text-lg font-bold sm:text-3xl pb-3">Hi, I'm Ayesha</h1>
          </ScrollAnimation>
          <div className="text-justify sm:text-left grid gap-3 px-3 sm:px-6">
            <ScrollAnimation>
              <p className="sm:text-md">
                An Informatics Engineering student passionate about Web Development and Video Editing.
                Crafting simple, functional, and meaningful digital experiences.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="sm:text-md">
                I enjoy building simple web applications and exploring creativity through video editing and graphic design.
                I have interest in Video Editing, Graphic Design, Front-End Development.
                Currently, I'm sharpening my skills in React.js, SEO, Adobe Premiere Pro, and Adobe After Effects.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="sm:text-md">
                When I'm not coding or editing, you can find me playing games / reading books / exploring new ideas.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="pb-5">
          <ScrollAnimation>
            <h1 className="text-lg font-bold sm:text-3xl pb-3">What I've Learned So Far</h1>
          </ScrollAnimation>
          <div className="text-justify sm:text-left grid gap-3 px-3 sm:px-6">
            <ScrollAnimation>
              <p className="sm:text-md">
                You can look all of my projects and my creations in <a className="underline" href="/projects">Projects</a>
              </p>
              <p className="sm:text-md">
                Also my designs and some arts in <a className="underline" href="/gallery">Gallery</a>
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                My other Socials:
              </p>
            </ScrollAnimation>
            <div className="flex justify-start gap-2">
              <ScrollAnimation>
                <div className="p-3 bg-hover-card w-fit rounded-lg cursor-pointer text-sm">
                  <Button
                    text="Instagram"
                    href="https://www.instagram.com/chadoincode"
                    className="flex gap-1"
                  >
                      <Instagram size={20} />
                    </Button>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="p-3 bg-hover-card w-fit rounded-lg cursor-pointer text-sm">
                  <Button
                    text="Github"
                    href="https://www.github.com/chadoincode"
                    className="flex gap-1"
                  >
                      <Github size={20} />
                    </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent