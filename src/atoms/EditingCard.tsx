type EditingCardProps = {
  title: string
  link: string
  thumbnail: string
}

const EditingCard = ({ title, link, thumbnail }: EditingCardProps) => {
  return(
    <div>
      <img src={thumbnail} alt="" />
      <div>
        <p>{title}</p>

      </div>
    </div>
  )
}

export default EditingCard