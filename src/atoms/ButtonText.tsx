type ButtonTextProps = {
  text: string
}

const ButtonText = ({text}: ButtonTextProps) => {
  return(
    <div title={text} className="font-medium text-md text-light align-middle text-center cursor-pointer hidden md:block">
      <p>{text}</p>
    </div>
  )
}

export default ButtonText