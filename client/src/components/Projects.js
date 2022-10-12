import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_PROJECTS } from '../queries/projectQueries'
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'
const Projects = () => {

    const {loading, error, data}=useQuery(GET_PROJECTS)
    if(loading) return <div>Loading</div>
    if(error) return <div>Something went wrong</div>
  return (
    <div className='projects'>
      {
        data.projects.map((project)=>{
            return(
                <ProjectCard project={project} />
            )
        })
      }
    </div>
  )
}

export default Projects
