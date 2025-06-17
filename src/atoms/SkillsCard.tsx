import { Icon } from '@iconify/react'
import { categories } from '../datas/Categories'
import CategoryTag from '../atoms/CategoryTag'

type SkillCardProps = {
  name: string
  icon: string
  category: string
}

const SkillsCard = ({name, icon, category}: SkillCardProps) => {
  const CategoryData = categories.find((cat) => cat.label === category)
  const CategoryColor = CategoryData?.color || "#fff"
  return(
    <div className="border-2 rounded-lg p-4 grid-rows-2 gap-1 justify-items-center ">
      <Icon width={50} height={50} icon={icon} />
      <div className='grid justify-items-center pt-2 gap-2'>
        <p className='font-semibold text-sm hidden sm:block sm:text-md'>{name}</p>
        <div className='hidden md:block'>
          <CategoryTag label={category} color={CategoryColor} />
        </div>
      </div>
    </div>
  )
}

export default SkillsCard