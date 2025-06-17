import { useState } from "react"
import { X } from "lucide-react"

type DesignCardProps = {
  title: string
  image: string
}

const DesignCard = ({ title, image}: DesignCardProps) => {
  const [isClicked, setIsClicked] = useState(false)
  return(
    <>
    {/* card */}
      <div className="group relative group cursor-pointer overflow-hidden duration-300 transition-all">
        <div className="duration-300 inset-0 transition">
          <img src={image} alt={title} className="h-70 rounded-lg " />
        </div>
        <div className="absolute pb-5 inset-0 flex items-end justify-center duration-300 translate-y-10 group-hover:translate-y-0 hover:bg-hover-card/30" 
          onClick={(() => setIsClicked(true))}
        >
          <p className="text-dark-purple font-bold">{title}</p>
        </div>
      </div>

      {/* preview */}
      {
        isClicked && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60"
          
          >
          <X size={40} color="#FDFDF5" className="absolute top-3 right-3 cursor-pointer" onClick={(()=> setIsClicked(false))}  />
            <div onClick={(e) => e.stopPropagation()} className="">
              {/* <p className="text-light font-bold text-center text-2xl ">Preview</p> */}
              <img src={image} alt={title} className="h-110 rounded-2xl" />
            </div>
          </div>
        )
      }
    </>

    // preview
  )
}

export default DesignCard