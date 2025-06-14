import { Icon } from "@iconify/react";

type InterestCardProps = {
  // icon: string
  name: string
}

const InterestCard = ({ name }) => {
  return(
    <div>
      <p>{name}</p>
    </div>
  )
}

export default InterestCard