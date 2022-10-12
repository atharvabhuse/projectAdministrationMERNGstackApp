import React, { useState } from 'react'
import AddProjectPopup from './AddProjectPopup'

const AddProject = () => {
    const [popup, setPopup]=useState(false)
    const clickHandler=()=>{
        setPopup(true)
    }
    const closeHandler=(data)=>{
        setPopup(data)
    }

    return (
        <div>
            <button className='addClient-button' onClick={clickHandler}>
                Add Project
            </button>
            { popup && <AddProjectPopup close={closeHandler} />}
        </div>
    )
}

export default AddProject
