import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <hr />
                    <Link to="/add">Add Workout</Link>
                </div>
            </div>
        </header>

    )
}

export default Navbar