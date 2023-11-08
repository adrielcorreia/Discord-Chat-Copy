import '../../styles/messages.css'

import Image from 'next/image'

const styles:object = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column-reverse'
}

const msgStyle:object = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '40px 1fr',
    padding: '.2rem 1rem',
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

export function Message(props: Mensagem) {
    const data_atual = new Date()
    return (
        <div className='msg' style={msgStyle}>
            <Image alt='' src={props.profile} style={imgStyle} width={40} height={40} quality={100}/>
            <span className='username'>{props.userName}</span>
            <span className='msg-individual'>{props.message}</span>
        </div>
    )
}

export default function Messages() {
    return (
        <div className="chat" style={styles}>
            <Message profile='/paul.png' userName='lokevir' message='ola mundo'></Message>
        </div>
    )
}