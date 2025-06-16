type DesignCardProps = {
  title: string
  image: string
}

const DesignCard = ({ title, image}: DesignCardProps) => {
  return(
    <div>
      <div>
        <img src={image} alt={title} className="w-50" />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default DesignCard