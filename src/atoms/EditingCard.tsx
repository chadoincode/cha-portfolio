type EditingCardProps = {
  title: string
  link: string
  thumbnail: string
}

const EditingCard = ({ title, link, thumbnail }: EditingCardProps) => {
  return(
    <div className="cursor-pointer">
      <div>
        <img src={thumbnail} alt="" />
      </div>
      <a href={link}></a>
      <div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default EditingCard