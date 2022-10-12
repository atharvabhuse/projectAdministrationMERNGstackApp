import { useQuery } from '@apollo/client'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DeleteProjectButton from '../components/DeleteProjectButton'
import { GET_PROJECT } from '../queries/projectQueries'
import '../styles/Project.css'
const Project = () => {

    const { id } = useParams()

    const { loading, error, data } = useQuery(GET_PROJECT,
        { variables: { id } })

    if (loading) return <div>Loading</div>
    if (error) return <div>Something went Wrong</div>

    return (
        <div>
            {!loading && !error && (<div className='project'>
                <div className='project-heading'>Project ID:- {data.project.id}</div>
                <div className='project-heading'>Project Name:- {data.project.name}</div>
                <div>Project Description:- {data.project.description}</div>
                <DeleteProjectButton projectID={data.project.id} />
                <Link to='/' ><button className='project-card-button'>Back</button></Link>
            </div>)}
        </div>
    )
}

export default Project
