export default function RightButtons() {
    return (
        <div className='right-btns'>
            <button className='btn gift'><h2 className='fa-solid fa-gift'></h2></button>
            <button className='btn gif'><i className="fi fi-sr-gif-square"></i></button>
            <button className='btn sticker'><h1 className="fa-solid fa-note-sticky"></h1></button>
            <button className='btn emojis'><h1 className='fa-solid fa-face-smile'></h1></button>
        </div>  
    )
}

export function Upload() {
    return (
        <button className='btn upload'>
            <h3 className='fa-solid fa-circle-plus'></h3>
        </button>
    )
}