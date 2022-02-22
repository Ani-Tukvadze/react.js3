export default function Button({customClass, text, customStyle, onClick, type}) {
    return (
        <button 
        onClick={onClick} 
        className={`btn ${customClass ? customClass : ""}`} 
        style={customStyle}
        type={type}
        >
            {text}
        </button>
   )
}

