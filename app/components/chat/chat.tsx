'use client'

import '../../styles/chat-styles/chat.css'
import { useState, useReducer } from 'react'
import { Upload } from './buttons'
import Message from './message'
import RightButtons from './buttons'

const styles:object = {
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'column',
    gap: '.5rem'
}

function reducer(state:any, action:any):any {
    switch (action.type) {
        case 'add-msg': {
            return {
                messages: [
                    ... state.messages, [action.msg]
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
    const [arr, setArr] = useState([])

    return (
        <div className="chat-div">
            <div className="chat" style={styles}>

                {state.messages.map((element:string, key: number) => (
                    <Message key={key} profile='/paul.png' userName='adriel' message={element}></Message>
                ))}
                
            </div>
            
            <div className="chat-submit-container block">
                <div className='chat-text-area flex align-center'>
                    <Upload />

                    <form onSubmit={(event) => {
                        event.preventDefault()

                        if (msg != '') {
                            dispatch({type: 'add-msg', msg}),
                            setMsg('')
                        }
                        
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