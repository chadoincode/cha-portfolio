type ButtonProps = {
  children: React.ReactNode
  text: string
  href: string
  className: string
}

const Button = ({children, text, href, className}: ButtonProps) => {
  return(
    <a href={href} target="_blank" title={text} className={className}>
      {children}
      <p>{text}</p>
    </a>
  )
}

export default Button