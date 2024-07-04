import React, { useState } from 'react'
import { onboardImgUrl } from '../../utils/constants'
import { Button, Input } from '@nextui-org/react';
import { useNavigate } from 'react-router';

const LoginScreen = () => {
    const navigate = useNavigate()
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="min-h-screen bg-primary-100 p-5 flex">
            <div className="flex-1 hidden md:block">
                <img
                    alt="Starvation"
                    src={onboardImgUrl}
                    className="h-full w-full object-cover rounded-lg"
                />
            </div>
            <div className='flex-1 flex flex-col items-center justify-center'>
                <h1 className="font-semibold text-xl sm:text-2xl text-primary-200 cursor-pointer">Ahar</h1>
                <div className='w-3/4 my-10'>
                    <Input label="Email" size='sm' variant='faded' className='my-3' value={userEmail} onValueChange={setEmail}/> 
                    <Input label="Password" type='password' size='sm' variant='faded' className='my-3' value={password} onValueChange={setPassword}/> 
                    <Button className='w-full bg-primary-200 text-white font-semibold mt-10'>Login</Button>
                    <p onClick={() => navigate('/signup')} className='cursor-pointer text-center mt-5 text-sm'>Don't have an account ? <span className='font-semibold text-primary-200'>Create Account</span></p>
                </div>
                

            </div>
        </div>
    )
}

export default LoginScreen