import React from 'react'

const ImageList = (props) => {

    const ImageList = props.images.map((image) => {
        return <img src={image.urls.regular} alt='image '/>

    })

    return(
        <div>
            {ImageList}
        </div>
    )
}

export default ImageList