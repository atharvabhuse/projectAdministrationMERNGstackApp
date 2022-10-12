import React from 'react'
import AddClient from '../components/AddClient'
import AddProject from '../components/AddProject'
import Client from '../components/Client'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import '../styles/Home.css'
const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='home-projects'>Projects</div>
            <Projects />
            <div className='home-projects'>Clients</div>
            <Client />
            <div className='home-row'>
            <AddClient />
            <AddProject />
            </div>
        </div>
    )
}

export default Home
