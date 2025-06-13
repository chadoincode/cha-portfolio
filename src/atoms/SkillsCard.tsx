import { skills } from "src/datas/Skills"
import { Icon } from '@iconify/react'

type SkillCardProps = {
  name: string
  icon: string
  category: string
}

const SkillsCard = ({name, icon, category}: SkillCardProps) => {
  return(
    <div className="">
      <Icon icon={icon} />
    </div>
  )
}