type DesignCardProps = {
  title: string
  image: string
}

const DesignCard = ({ title, image}: DesignCardProps) => {
  return(
    <div className="group relative group cursor-pointer overflow-hidden duration-300 transition-all rounded-lg">
      <div className="duration-300 inset-0 transition">
        <img src={image} alt={title} className="w-50" />
      </div>
      <div className="absolute pb-5 inset-0 flex items-end justify-center duration-300 translate-y-10 group-hover:translate-y-0 ">
        <p className="text-dark-purple font-bold">{title}</p>
      </div>
    </div>
  )
}

export default DesignCard