import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProjectCard.css'
const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <div className='card'>
                <div>{props.project.name}</div>
                <Link to={`/project/${props.project.id}`}><button className='project-card-button'>View</button></Link>
            </div>
        </div>
    )
}

export default ProjectCard
