import React from 'react'
import Image from 'next/image'
import { useMoralis } from "react-moralis";
<<<<<<< HEAD
=======
import loginAvatar from '../assets/steve-johnson-2UjheC7FBWQ-unsplash.jpg'
>>>>>>> c55765d (header completed)

function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative ">
            <h1>login screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
<<<<<<< HEAD
                <Image className="object-cover rounded-full" src="https:links.papareact.com/3pi" width={200} height={200} />
=======
                <Image className="object-cover rounded-full" src={loginAvatar} alt="Steve Johnson on Unsplash" width={200} height={200} />
>>>>>>> c55765d (header completed)
                <button className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse" onClick={authenticate}>Login to the MATAVERSE</button>
            </div>
            <div className="w-full h-screen">
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Login
