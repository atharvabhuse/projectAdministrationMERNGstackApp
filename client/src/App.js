import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Client from './components/Client'
import AddClient from './components/AddClient'
import Projects from './components/Projects'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Project from './pages/Project'
import './App.css'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
})

const App = () => {
  return (
    <div className='app'>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='project/:id' element={<Project />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
    </div>
  )
}

export default App;
