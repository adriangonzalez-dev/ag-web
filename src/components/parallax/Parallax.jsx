import { memo } from 'react'
import './parallax.css'

export const Parallax = memo(({children, imageClass}) => {
  return (
    <div className={`
    container-fluid 
    parallax ${imageClass} 
    d-flex 
    align-items-center 
    justify-content-center 
    opacity-75`}
    >
        {children}
    </div>
  )
})
