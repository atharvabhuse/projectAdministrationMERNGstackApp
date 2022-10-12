import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ADD_PROJECT } from '../mutations/projectMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECTS } from '../queries/projectQueries'

const AddProjectPopup = (props) => {

    const [name, setName] = useState()
    const [description, setDesc] = useState()
    const [clientID, setClientID] = useState()

    const clickHandler = () => {
        props.close(false)
    }

    const [ADD] = useMutation(ADD_PROJECT, {
        variables:  { name, description, clientID },
        update(cache, { data: { addProject } }) {
            const { projects } = cache.readQuery({
                query: GET_PROJECTS
            });
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, addProject] }
            })
        }
    })
    
    const submitHandler = (e) => {
        e.preventDefault()
        ADD(name, description, clientID)
    }

    const {loading, error, data} = useQuery(GET_CLIENTS, {errorPolicy: "all"})

  return (
    <div>
                {
                    ReactDOM.createPortal(
                        <div className='overflow' onClick={clickHandler}></div>, document.getElementById('overflow')
                    )
                }
                {
                    ReactDOM.createPortal(
                        <div className='popup'>
                            <div className='popup-heading'>Add Project</div>
                            <div>
                                <form className='popup-form'>
                                    <label className='popup-label'>Name</label>
                                    <input className='popup-input' value={name} onChange={(e) => setName(e.target.value)} />
                                    <label className='popup-label'>Description</label>
                                    <input className='popup-input' value={description} onChange={(e) => setDesc(e.target.value)} />
                                    <label className='popup-label'>Client ID</label>
                                    <select className='popup-select' onChange={(e)=>setClientID(e.target.value)}>{data.clients.map((val)=>(<option className='popup-select' value={val.id}>{val.id}</option>))}</select>
                                    <button className='popup-button' onClick={submitHandler}>Add Project</button>
                                </form>
                            </div>
                        </div>, document.getElementById('popup')
                    )
                }
            </div>
  )
}

export default AddProjectPopup
