import './imageList.css'
import React from 'react'


const ImageList = (props) => {

    const ImageList = props.images.map((image) => {
        return <img key={image.id} src={image.urls.regular} alt={image.description}/>

    })

    return(
        <div className='image-list'>
            {ImageList}
        </div>
    )
}

export default ImageList