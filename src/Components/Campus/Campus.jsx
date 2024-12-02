import React from 'react'
import './Campus.css'
import gallery_1 from '../../Assets/gallery_1.png'
import gallery_2 from '../../Assets/gallery_2.png'
import gallery_3 from '../../Assets/gallery_3.png'
import gallery_4 from '../../Assets/gallery_4.png'
import white from '../../Assets/white.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>Xem nhiều hơn <img src={white} alt="" /></button>
    </div>
  )
}

export default Campus
