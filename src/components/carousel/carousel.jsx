import React, { useState } from 'react'

function Carousel({images}) {

  const [imageIndex, setImageIndex] = useState(0)

  const handleLeft = () => {
    const newIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
    setImageIndex(newIndex)
  }
  const handleRight = () => {
    const newIndex = (imageIndex + 1) % images.length;
    setImageIndex(newIndex) 
  }

  return (
    <div>
      <i className='fa fa-arrow-left' onClick={handleLeft}></i>
      
      <img src={images[imageIndex]} alt="" />
      
      <i className='fa fa-arrow-right' onClick={handleRight}></i>
    </div>
  )
}



export default Carousel