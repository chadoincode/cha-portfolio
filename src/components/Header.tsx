type HeaderProps = {
  title: string
  button: string
}

const Header = ({title, button}: HeaderProps) => {
  return(
    <div className="text-light m-5">
      <h1 className="font-bold">{title}</h1>
      <p>{button}</p>
    </div>
  )
}

export default Header