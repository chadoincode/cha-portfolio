type CategoryTagProps = {
  label: string
  color: string
}

const CategoryTag = ({ label, color }: CategoryTagProps) => {
  return(
    <div className="flex items-center text-[10px] border-1 p-0.5 px-1 gap-1 rounded-xl w-fit">
      <div style={{backgroundColor: color}} className="w-3 h-3 rounded-4xl"></div>
      <p className="">
        {label}
      </p>
    </div>
  )
}

export default CategoryTag