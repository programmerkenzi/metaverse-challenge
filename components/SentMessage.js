import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SentMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis()
    const [message, setMessage] = useState()
    const sentMessage = (e) => {
        e.preventDefault();

        if (!message) return;
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();
        messages
            .save({
                message,
                username: user.getUsername(),
                ethAddress: user.get("ethAddress")
            })

            .then(message => {
                endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
                setMessage("");
            }), (error) => {
                console.log(error)
            }


    }
    return (
        <form className="flex w-11/12 fixed bottom-10 opacity-80 px-6 py-4 max-w-2xl bg-black shadow-xl rounded-full border-4 border-blue-400">
            <input className="  pr-5 outline-none bg-transparent text-white placeholder-gray-500 flex-grow "
                type="text"
                placeholder={`Enter a Message ${user.getUsername()}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="font-bold text-pink-500" type="submit" onClick={sentMessage}>Send</button>
        </form>
    )
}

export default SentMessage
