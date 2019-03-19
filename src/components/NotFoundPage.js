import React from 'react'
import { Link } from 'react-router-dom'

// Link component stops the page from refreshing
// when clicking a link by using client side routing.
const NotFoundPage = () => (
  <div>
    404 - 
    <Link to='/'>Go Home</Link>
  </div>
)

export default NotFoundPage