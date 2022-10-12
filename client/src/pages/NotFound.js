import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFound.css'
const NotFound = () => {
    return (
        <div className='NotFound'>
            <div className='NotFound-heading'>Page Not Found</div>
            <Link to='/'>
                <button className='NotFound-button'> Go Back</button>
            </Link>
        </div>
    )
}

export default NotFound
