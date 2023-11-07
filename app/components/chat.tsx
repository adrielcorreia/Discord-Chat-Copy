'use client'

import '../styles/chat.css'
import TextArea from './chat/text-area'
import Messages from './chat/message'

export default function Chat() {
    return (
        <div className="chat-div">
            <Messages></Messages>
            
            <div className="chat-submit-container block">
                <TextArea></TextArea>
            </div>
        </div>
    )
}