import React from 'react'
import { useMoralis } from "react-moralis";

function ChangeUsername() {

    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()})`);
        if (!username) return;
        setUserData({ username })
    }

    return (
        <div className="text-sm absolute top-5 right-5 hover:text-pink-700">
            <button disabled={isUserUpdating}
                onClick={setUsername}
            >Change your username</button>
        </div>
    )
}

export default ChangeUsername
