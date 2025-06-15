import ScrollAnimation from "src/animations/ScrollAnimation"
import ProjectsTitle from "src/atoms/ProjectsTitle"

const GalleryContent = () => {
  return(
    <div className="flex-min-h-screen px-15 sm:px-25 py-10">
      <ScrollAnimation>
        <div className="flex-col place-items-center text-light">
          <h1 className="text-2xl font-bold">Gallery</h1>
          <p>Contains all of my design projects!</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div>
          <ProjectsTitle category="Graphic Design" />
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default GalleryContent