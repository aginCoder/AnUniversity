import React from 'react'
import './Hero.css';
import dark from '../../Assets/dark.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Chúng tôi đảm bảo một nền giáo dục tốt hơn cho một thế giới tốt đẹp</h1>
        <p>Chương trình giảng dạy tiên tiến của chúng tôi được thiết kế để trang bị cho học sinh những kiến thức, 
          kỹ năng và trải nghiệm cần thiết để vượt trội trong lĩnh vực giáo dục đầy năng động.</p>
          <button className='btn'>Explore more <img src={dark} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

