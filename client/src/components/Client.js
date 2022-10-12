import React from 'react'
import {gql, useQuery} from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'
import '../styles/Client.css'
import Spinner from './Spinner'

const Client = () => {

    const {loading, error, data} = useQuery(GET_CLIENTS, {errorPolicy: "all"})
    if(loading) return <Spinner />
    if(error) return <p>Something went wrong</p>

  return (
    <div className='client'>
      {!loading && !error && (
      <table className='client-table'>
        <tr>
          <th className='client-table-col'>ID</th>
          <th className='client-table-col'>Name</th>
          <th className='client-table-col'>Email</th>
          <th className='client-table-col'>Phone</th>
          <th className='client-table-col'>Delete</th>
        </tr>
        {data.clients.map((client)=>{
          return(
            <ClientRow key={client.id} client={client} />
          )
        })}
      </table>
      )}
    </div>
  )
}

export default Client
