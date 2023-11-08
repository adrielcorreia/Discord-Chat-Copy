'use client'

import '../styles/chat.css'
import TextArea from './chat/text-area'
import Messages from './chat/message'
import { mensagens } from './chat/message'

export default function Chat() {
    return (
        <div className="chat-div">
            <Messages arr={mensagens}></Messages>
            
            <div className="chat-submit-container block">
                <TextArea></TextArea>
            </div>
        </div>
    )
}