'use client'

import '../../styles/chat-styles/chat.css'
import Message from './message'
import RightButtons from './buttons'
import { useState } from 'react'
import { useReducer } from 'react'
import { Upload } from './buttons'
//import Messages from './chat/message'

const styles:object = {
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: '1rem'
}

function reducer(state:any, action:any):any {
    switch (action.type) {
        case 'add-msg': {
            return {
                message: [
                    ... state.message,
                    { message: action.msg }
                ]
            }
        }
        default: 
            return state;
    }
}

export default function Chat() {
    const [state, dispatch] = useReducer(reducer, { message: [] })
    const [msg, setMsg] = useState('')

    return (
        <div className="chat-div">
            <div className="chat" style={styles}>
                {alert(state.message)!}

                <Message profile='/paul.png' userName='adriel' message='saudação de Paulo'></Message>
            </div>
            
            <div className="chat-submit-container block">
                <div className='chat-text-area flex align-center'>
                    <Upload />

                    <form onSubmit={(event) => {
                        dispatch({type: 'add-msg', msg})
                        event.preventDefault()
                    }}>
                        <input
                            value={msg}
                            type='text' 
                            placeholder='Conversar em #general'
                            onChange={(e) => setMsg(e.target.value)}>
                        </input>
                    </form>

                    <RightButtons /> 
                </div>
            </div>
        </div>
    )
}