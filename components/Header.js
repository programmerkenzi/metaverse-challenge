import Image from 'next/image';
import React from 'react'
import { useMoralis } from "react-moralis";
import loginAvatar from '../assets/steve-johnson-2UjheC7FBWQ-unsplash.jpg'
import Avatar from '../components/Avatar';
import ChangeUsername from '../components/ChangeUsername';

function Header() {
    const { user, logout } = useMoralis();

    return (
        <div className=" text-pink-500 sticky top-0 p-5 z-50 bg-black border-b-2 border-pink-500">
            <div className=" grid grid-cols-5 lg:grid-col-6 items-end lg:items-center">
                <div className=" relative h-24 w-24  hidden lg:flex lg:flex-row">
                    <Image src={loginAvatar} layout="fill" className="rounded-full " objectFit="cover" />
                </div>

                <div className=" col-span-3 flex flex-col text-left lg:text-center">
                    <div className="h-48 w-48 relative lg:mx-auto border-8 rounded-full border-pink-500">
                        <Avatar logoutOnPress={logout} />
                    </div>

                    <h1 className="text-3xl">Welcome to the Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    <ChangeUsername />
                </div>
            </div>

        </div>
    )
}

export default Header
