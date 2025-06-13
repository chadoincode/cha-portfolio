import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children }) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {threshold: 0.1}
    )
    if(ref.current){
      observer.observe(ref.current)
    }
    return() => {
      observer.unobserve(ref.current)
    }
  })

  return(
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={ inView ? { opacity: 1, y: 0} : {} }
      transition={{ duration: 0.6 }}
      >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation