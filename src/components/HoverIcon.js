import React, {useRef, useState} from 'react';
import '../styles/HoverIcon.css';
const HoverIcon = ({children, className ='', id=""}) =>{
    const divRef = useRef(null);
    const [moved, setMoved] = useState(false);
    const handleClick = ()=>{
        const div = divRef.current;
        div.style.transition = 'transform 0.5s ease-in-out';
        if(div.id !== 'hover-icon-guarenteed-satisfaction'){
            div.style.transform = moved ? 'translateX(62%)' : 'translateX(0)';
        } else {
            div.style.transform = moved ? 'translateX(73%)' : 'translateX(0)';
        }
        
        setMoved(!moved);
    }
    return (
        <div 
            id={id}
            ref={divRef}
            className ={`hover-icons p-4 ${className}`}
            onClick = {handleClick}
            style={{
                display: 'inline-block',
                cursor: 'pointer',
            }}
            >
            {children}
        </div>
    );
};
export default HoverIcon;