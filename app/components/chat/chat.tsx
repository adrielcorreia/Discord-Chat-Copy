'use client'

import '../../styles/chat-styles/chat.css'
import Message from './message'
import RightButtons from './buttons'
import { useState } from 'react'
import { useReducer } from 'react'
import { Upload } from './buttons'

const styles:object = {
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'column',
    gap: '1rem'
}

function reducer(state:any, action:any):any {
    switch (action.type) {
        case 'add-msg': {
            return {
                messages: [
                    ... state.messages, action.msg 
                ]
            }
        }
        default: 
            return state;
    }
}

export default function Chat() {
    const [state, dispatch] = useReducer(reducer, { messages: [] })
    const [msg, setMsg] = useState('')

    return (
        <div className="chat-div">
            <div className="chat" style={styles}>
                {state.messages.map((element:any) => (
                    <Message profile='/paul.png' userName='adriel' message={element}></Message>
                ))}
            </div>
            
            <div className="chat-submit-container block">
                <div className='chat-text-area flex align-center'>
                    <Upload />

                    <form onSubmit={(event) => {
                        event.preventDefault()

                        if (msg == '') return
                        dispatch({type: 'add-msg', msg}),
                        setMsg('')
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