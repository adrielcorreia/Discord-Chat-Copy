export default function RightButtons() {
    return (
        <div className='right-btns'>
            <button aria-hidden className='btn gift'><h2 className='fa-solid fa-gift'></h2></button>
            <button aria-hidden className='btn gif'><i className="fi fi-sr-gif-square"></i></button>
            <button aria-hidden className='btn sticker'><h1 className="fa-solid fa-note-sticky"></h1></button>
            <button aria-hidden className='btn emojis'><h1 className='fa-solid fa-face-smile'></h1></button>
        </div>  
    )
}

export function UploadButton() {
    return (
        <button className='btn upload'>
            <h3 aria-hidden className='fa-solid fa-circle-plus'></h3>
        </button>
    )
}