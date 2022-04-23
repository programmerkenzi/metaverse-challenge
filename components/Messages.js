import React, { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis"
import Message from './Message';
import SentMessage from './SentMessage';

const MINS_DURATION = 1000;

function Messages() {
    const { user } = useMoralis()
    const endOfMessagesRef = useRef(null)
    const { data, loading, error } = useMoralisQuery(
        "Messages",
        (query) =>
            query
                .ascending("createdAt")
                .greaterThan("createdAt", new Date(Date.now() - MINS_DURATION * 60 * 1000)),
        [],
        {
            live: true,
        }


    )



    return (
        <div className="pb-56">
            <div className="my-5"></div>
            <ByMoralis variant="dark" style={{ marginLeft: "auto", marginRight: "auto" }} />
            <div className="p-4 space-y-10">
                {data.map(message => <Message message={message} />)}
            </div>
            <div className="flex justify-center">
                <SentMessage endOfMessagesRef={endOfMessagesRef} />
            </div>
            <div ref={endOfMessagesRef} className="mt-5 text-center text-gray-400">
                <p>You're up to date {user.getUsername()}!</p>
            </div>
        </div>
    )
}

export default Messages
