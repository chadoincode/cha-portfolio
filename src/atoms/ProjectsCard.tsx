type ProjectsCardProps = {
  title: string;
  description: string;
  link: string;

}

const ProjectsCard = ({title, description, link}: ProjectsCardProps) => {
  return(
    <div className="text-light cursor-pointer card-hover overflow-hidden rounded-lg p-3">
      <a href={link} target="_blank">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-sm">{description}</p>
      </a>
    </div>
  )
}

export default ProjectsCard