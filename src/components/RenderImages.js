import './ImageList.css';
import React from 'react';
import ImageCards from "./ImageCards";

const RenderImages = (props)=>{
    const renderedImages = props.images.map((image)=>{
        return <ImageCards key={image.id} image={image}/>
    });
    return <div className='image-list'>{renderedImages}</div>
}

export default RenderImages;