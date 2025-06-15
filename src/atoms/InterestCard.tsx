import { Icon } from "@iconify/react";

type InterestCardProps = {
  // icon: string
  name: string
  desc: string
}

const InterestCard = ({ name, desc }) => {
  return(
    <div className="group relative overflow-hidden border-2 sm:h-20 h-fit rounded-2xl cursor-pointer transition-all duration-300 hover:bg-hover-card">
      <div className="duration-300 inset-0 items-center justify-center transition-opacity group-hover:opacity-0">
        <p className="text-center flex pt-6 font-medium sm:font-bold justify-center text-sm sm:text-lg">{name}</p>
      </div>
      <div className="absolute inset-0 sm:flex items-center justify-center hidden opacity-0 translate-y-10 duration-300 group-hover:translate-y-0 hover:opacity-100">
        <p className="p-3 text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default InterestCard