import '../../styles/messages.css'

const styles:object = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column-reverse'
}

const msgStyle:object = {
    
}

export function Message() {
    return (
        <div className='msg'>
            
        </div>
    )
}

export default function Messages() {
    return (
        <div className="chat" style={styles}>
            <Message></Message>
        </div>
    )
}