import React from 'react';

import Content from '../Content'; 
import ImageContainer from '../ImageContainer'; 

import './Card.css';

const Card = ({ src, text, empty, loading, withImage, withTitle})=> {

    const cardImageStyle = {
        width: "10px"
    }
 
    if (loading) {
        return <div className="card">loading</div>;
      }
    
    return (
        <div className="card">
            <Content text={text} />
            <ImageContainer style={cardImageStyle} src={src} />       
        </div>
    )
}



export default Card; 

