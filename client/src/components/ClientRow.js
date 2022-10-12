import React from 'react'
import {FaTrash} from 'react-icons/fa'
import '../styles/ClientRow.css'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
const ClientRow = (props) => {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: {id: props.client.id},
        // refetchQueries: [{query: GET_CLIENTS}],
        update(cache, {data: {deleteClient}}){
            const {clients} = cache.readQuery({
                query: GET_CLIENTS
            });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: {clients: clients.filter(client => client.id !== deleteClient.id)}
            })
        }
    })

  return (
    <tr className='clientRow-row'>
        <td className='clientRow-table-col'>{props.client.id}</td>
        <td className='clientRow-table-col'>{props.client.name}</td>
        <td className='clientRow-table-col'>{props.client.email}</td>
        <td className='clientRow-table-col'>{props.client.phone}</td>
        <td className='clientRow-table-col'><button className='clietRow-button' onClick={deleteClient}><FaTrash /> Delete</button></td>
    </tr>
  )
}

export default ClientRow
