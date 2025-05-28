import ProjectsTitle from "src/atoms/ProjectsTitle.astro"
import ProjectsCard from "src/atoms/ProjectsCard.astro"
import FadeIn from "src/animations/FadeIn"

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
        <div>
          <ProjectsTitle category="Simple" />
        </div>
      </FadeIn>
    </div>
  )
}

export default ProjectsContent