import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../styles/AddClientPopup.css'
import { ADD_CLIENT } from '../mutations/clientMutations'
import { useMutation } from '@apollo/client'
import { GET_CLIENTS } from '../queries/clientQueries'

const AddClientPopup = (props) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const clickHandler = () => {
        props.close(false)
    }

     const [ADD] = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({
                query: GET_CLIENTS
            });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] }
            })
        }
    })
    
    const submitHandler = (e) => {
        e.preventDefault()
        ADD(name, email, phone)
    }

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
                            <div className='popup-heading'>Add Client</div>
                            <div>
                                <form className='popup-form'>
                                    <label className='popup-label'>Name</label>
                                    <input className='popup-input' value={name} onChange={(e) => setName(e.target.value)} />
                                    <label className='popup-label'>Email</label>
                                    <input className='popup-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label className='popup-label'>Phone</label>
                                    <input className='popup-input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    {/* {error && <div>Please enter all the fields</div>} */}
                                    <button className='popup-button' onClick={submitHandler}>Add Client</button>
                                </form>
                            </div>
                        </div>, document.getElementById('popup')
                    )
                }
            </div>
    )
}

export default AddClientPopup
