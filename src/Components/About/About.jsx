import React from 'react'
import './About.css'
import about from '../../Assets/about.png'
import play from '../../Assets/play.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt="" className='about-img' />
            <img src={play} alt="" className='play-img' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>GIỚI THIỆU VỀ TRƯỜNG ĐẠI HỌC</h3>
            <h2>Nuôi dưỡng những nhà lãnh đạo tương lai ngay hôm nay</h2>
            <p>Bắt đầu hành trình giáo dục chuyển mình với các chương trình giáo dục toàn diện của trường đại học chúng tôi. Chương trình giảng dạy tiên tiến của chúng tôi được thiết kế để trang bị cho sinh viên những kiến thức, kỹ năng và trải nghiệm cần thiết để vượt trội trong lĩnh vực giáo dục đầy năng động.</p>
            <p>Với sự tập trung vào đổi mới, học tập thực hành và sự hướng dẫn cá nhân, các chương trình của chúng tôi giúp những nhà giáo dục tương lai tạo ra tác động sâu sắc trong lớp học, trường học và cộng đồng.</p>
            <p>Dù bạn mong muốn trở thành giáo viên, quản lý, tư vấn viên hay nhà lãnh đạo giáo dục, chúng tôi cung cấp một loạt các chương trình đa dạng, là con đường hoàn hảo để bạn đạt được mục tiêu và phát huy tiềm năng của mình trong việc định hình tương lai của giáo dục.</p>
        </div>
    </div>
  )
}

export default About
