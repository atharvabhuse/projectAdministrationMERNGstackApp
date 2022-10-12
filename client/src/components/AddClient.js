import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { FaUser } from 'react-icons/fa'
import AddClientPopup from './AddClientPopup'
import '../styles/AddClient.css'

const AddClient = () => {
    const [popup, setPopup]=useState(false)
    const clickHandler=()=>{
        setPopup(true)
    }

    const closeHandler=(data)=>{
        setPopup(data)
    }

    return (
        <div>
            <button type="button" className='addClient-button' onClick={clickHandler}>
                Add Client
            </button>
           { popup && <AddClientPopup close={closeHandler} />}
        </div>
    )
}

export default AddClient
