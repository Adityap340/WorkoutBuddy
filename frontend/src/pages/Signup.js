import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoaading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
        // console.log(email, password)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h2>Signup</h2>

            <label>Email:</label>
            <input 
                type='email' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />

            <label>Password:</label>
            <input 
                type='password' 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <button disabled={isLoaading} type='submit'>Signup</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Signup