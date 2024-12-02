import { useState } from 'react';
import './App.css';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Nabar from './Components/Nabar/Nabar.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Title from './Components/Title/Title.jsx';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="App">
      <Nabar />
      <Hero />
      <div className="container">
        <Title subTitle='Chương trình của chúng tôi' title='Những gì chúng tôi cung cấp'/>
        <Programs />
        <Title subTitle='Giới thiệu về chúng tôi' title='Những gì về chúng tôi'/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Thư viện' title='Campus photos'/>
        <Campus/>
        <Title subTitle='Những đánh giá' title='Những đánh giá hoặc phản hồi từ sinh viên'/>
        <Testimonials/>
        <Title subTitle='Liên hệ chúng tôi' title='Thông tin dưới đây'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
