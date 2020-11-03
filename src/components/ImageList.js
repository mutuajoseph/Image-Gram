import React from 'react'

function ImageList(props) {

    const image = props.images.map((image) => {
        return <img src={image.urls.regular} key={image.id} alt={image.description}/>
    })

    return (
        <div>
           {image}
        </div>
    )
}

export default ImageList
