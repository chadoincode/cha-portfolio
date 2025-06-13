import { Icon } from '@iconify/react'

type SkillCardProps = {
  name: string
  icon: string
  category: string
}

const SkillsCard = ({name, icon, category}: SkillCardProps) => {
  return(
    <div className="border-2 rounded-lg p-4 w-fit justify-items-center">
      <Icon width={50} height={50} icon={icon} />
      <div className='grid justify-items-center pt-2'>
        <p className='font-semibold'>{name}</p>
        <p className='text-xs'>{category}</p>
      </div>
    </div>
  )
}

export default SkillsCard