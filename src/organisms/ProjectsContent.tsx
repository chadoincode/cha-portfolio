import ProjectsTitle from "src/atoms/ProjectsTitle.tsx"
import ProjectsCard from "src/atoms/ProjectsCard.tsx"
import FadeIn from "src/animations/FadeIn"
import ScrollAnimation from "src/animations/ScrollAnimation"
import { WebProjects } from "src/datas/WebProjects"
import { editing } from "src/datas/Editing"
import EditingCard from "src/atoms/EditingCard"

const ProjectsContent = () => {
  return(
    <div className="flex-min-h-screen px-15 sm:px-25 py-10">
      <ScrollAnimation>
        <div className="flex-col place-items-center text-light">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p>Contains all of my works!</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="py-5 text-light">
          <ProjectsTitle category="Simple Websites" />
        </div>
      </ScrollAnimation>
      <div className="flex flex-col md:flex-row gap-2 sm:gap-3">
        {
          WebProjects.map((project, index) => (
            <ScrollAnimation>
              <ProjectsCard
                key={index}
                title={project.name}
                description={project.description}
                link={project.link}
              />
            </ScrollAnimation>
          ))
        }
      </div>
      <ScrollAnimation>
        <div className="py-5 text-light">
          <ProjectsTitle category="Video Editing" />
        </div>
      </ScrollAnimation>
      <div className="flex flex-col md:flex-row gap-2 sm:gap-3">
        {
          editing.map((edit, index) => (
            <ScrollAnimation>
              <EditingCard 
                key={index}
                title={edit.title}
                link={edit.link}
                thumbnail={typeof edit.thumbnail === "string" ? edit.thumbnail : edit.thumbnail.src}
              />
            </ScrollAnimation>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsContent