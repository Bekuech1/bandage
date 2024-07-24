import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='justifyCenter grid'>
        <h3 className='h3Text blue noMargin capitalize'>Not Found</h3>
        <Link to='/' className='noDeco h5Text noMargin sky capitalize'>Go to home</Link>
    </div>
  )
}

export default NotFound