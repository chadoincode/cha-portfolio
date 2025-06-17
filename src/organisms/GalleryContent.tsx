import ScrollAnimation from "../animations/ScrollAnimation"
import ProjectsTitle from "../atoms/ProjectsTitle"
import DesignCard from "../atoms/DesignCard"
import { designs } from "../datas/Designs"

const GalleryContent = () => {
  return(
    <div className="flex-min-h-screen px-15 sm:px-25 py-10">
      <ScrollAnimation>
        <div className="flex-col place-items-center text-light pb-3">
          <h1 className="text-2xl font-bold">Gallery</h1>
          <p className="text-sm text-center md:text-md">Contains all of my design projects!</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div>
          <ProjectsTitle category="Graphic Design" />
        </div>
      </ScrollAnimation>
      <div className="flex flex-col sm:flex-row gap-2 p-5">
        {
          designs.map((design, index) => (
            <ScrollAnimation key={index}>
              <DesignCard 
                title={design.title}
                image={design.image}
              />
            </ScrollAnimation>
          ))
        }
      </div>
    </div>
  )
}

export default GalleryContent