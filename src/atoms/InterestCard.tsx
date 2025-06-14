import { Icon } from "@iconify/react";

type InterestCardProps = {
  // icon: string
  name: string
  desc: string
}

const InterestCard = ({ name, desc }) => {
  return(
    <div className="group relative overflow-hidden border-2 h-20 rounded-2xl cursor-pointer transition-all duration-300  hover:bg-hover-card">
      <div className="absolute duration-300 inset-0 items-center justify-center transition-opacity group-hover:opacity-0">
        <p className="p-1 text-center font-bold">{name}</p>
      </div>
      <div className="absolute inset-0 flex items-center opacity-0 translate-y-10 transition-all duration-500 group-hover:translate-y-0 justify-center hover:opacity-100">
        <p className="p-3 text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default InterestCard