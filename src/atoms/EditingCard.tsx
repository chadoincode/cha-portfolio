type EditingCardProps = {
  title: string
  link: string
  thumbnail: string
}

const EditingCard = ({ title, link, thumbnail }: EditingCardProps) => {
  return(
    <div className="group relative overflow-hidden cursor-pointer border-2 border-light hover:bg-hover-card rounded-lg transition-all duration-300">
      <div className="duration-300 inset-0 transition-opacity group-hover:opacity-0">
        <img src={thumbnail} alt={title} className="w-70" />
      </div>
      <a href={link} target="_blank">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 duration-300 translate-y-10 hover:opacity-100 group-hover:translate-y-0">
          <p className="font-bold text-light">{title}</p>
        </div>
      </a>
    </div>
  )
}

export default EditingCard