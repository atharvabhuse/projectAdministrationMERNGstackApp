import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
mutation AddProject($name: String!, $description: String!, $clientID: ID!){
    addProject(name: $name, description: $description, clientID: $clientID){
        id
        name
        description
        client{
            id
            name
            phone
        }
    }
}`

const DELETE_PROJECT = gql`
mutation DeleteProject($id: ID!){
    deleteProject(id: $id){
        id
        name
        description
    }
}
`

export {ADD_PROJECT, DELETE_PROJECT}