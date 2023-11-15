'use client'

import '../../styles/chat-styles/messages.css'
import Image from 'next/image'
import { useRef } from 'react'

const msgStyle:object = {
    display: 'grid',
    gridTemplateRows: '.8fr 1fr',
    gridTemplateColumns: '40px 1fr',
    padding: '0 1rem',
    columnGap: '1rem'
}

const imgStyle:object = {
    objectFit: 'cover',
    borderRadius: '100%',
    cursor: 'pointer',
    gridRow: '1/3'
}

interface Mensagem {
    profile: string,
    userName: string,
    data?: string,
    message: string
}

export default function Message(props: Mensagem) {
    const data = new Date()
    const data_atual = useRef(data.toLocaleString('pt-br'))

    return (
        <div className='msg' style={msgStyle}>
            <Image alt='' src={props.profile} style={imgStyle} width={40} height={40} quality={100}/>

            <span className='username'>
                {props.userName} 
                <p className='data'>{data_atual.current}</p>
            </span>

            <span className='msg-individual'>{props.message}</span>
        </div>
    )
}