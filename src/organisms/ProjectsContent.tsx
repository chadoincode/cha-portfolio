import ProjectsTitle from "src/atoms/ProjectsTitle.tsx"
import ProjectsCard from "src/atoms/ProjectsCard.tsx"
import FadeIn from "src/animations/FadeIn"
import { WebProjects } from "src/datas/WebProjects"

const ProjectsContent = () => {
  return(
    <div className="flex-min-h-screen px-25 py-10">
      <FadeIn delay={0.2}>
        <div className="flex-col place-items-center text-light">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p>Contains all of my works!</p>
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="py-5 text-light">
          <ProjectsTitle category="Simple Websites" />
        </div>
      </FadeIn>
      <div className="flex flex-col md:flex-row gap-3">
        {
          WebProjects.map((project, index) => (
            <FadeIn delay={index * 0.1 + 0.3}>
              <ProjectsCard
                title={project.name}
                description={project.description}
                link={project.link}
              />
            </FadeIn>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsContent