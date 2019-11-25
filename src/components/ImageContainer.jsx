import React from 'react'

const ImageContainer = props => {
    return (
        <div style={props.style}>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export default ImageContainer;