import { useMutation } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECT, GET_PROJECTS } from '../queries/projectQueries'
import '../styles/DeleteProjectButton.css'
const DeleteProjectButton = (props) => {

    const [deleteHandler]=useMutation(DELETE_PROJECT, {
        variables: {id: props.projectID},
        update(cache, {data: {deleteProject}}){
            const {projects} = cache.readQuery({
                query: GET_PROJECTS
            })
            cache.writeQuery({
                query: GET_CLIENTS,
                data: {projects: projects.filter(project => project.id !== deleteProject.id)}
            })
        }
    })

  return (
    <div>
      <button className='delete-button' onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default DeleteProjectButton
