type ProjectTitleProps = {
  category: string
}

const ProjectsTitle = ({category}: ProjectTitleProps) => {
  return(
    <div className="text-light sm:text-2xl font-bold text-lg">
      <h1>{category}</h1>
    </div>
  )
}

export default ProjectsTitle