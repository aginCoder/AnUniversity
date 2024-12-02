import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../Assets/next.png'
import back from '../../Assets/back.png'
import user1 from '../../Assets/user1.png'
import user2 from '../../Assets/user2.png'
import user3 from '../../Assets/user3.png'
import user4 from '../../Assets/user4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if (tx > -50) {  
            tx -= 25;    
        }
        slider.current.style.transform = `translateX(${tx}%)`;  
    }
    const slideBackward = () => {
        if (tx < 0) { 
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`; 
    }
    return (
        <div className='testimonials'>
            <img src={next} alt="" className='next-btn' onClick={slideForward} />
            <img src={back} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Nguyễn Trần Khánh Vi</h3>
                                    <span>FPT Poly, Đà Nẵng</span>
                                </div>
                            </div>
                            <p>Quyết định theo đuổi bằng cấp tại FPT Poly là
                                một trong những quyết định tốt nhất tôi từng làm.
                                Cộng đồng hỗ trợ, cơ sở vật chất hiện đại và cam
                                kết về sự xuất sắc trong học thuật đã thực sự vượt
                                qua mong đợi của tôi</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Thái Hoàng Quân</h3>
                                    <span>FPT Poly, Đà Nẵng</span>
                                </div>
                            </div>
                            <p>Quyết định theo đuổi bằng cấp tại FPT Poly là
                                một trong những quyết định tốt nhất tôi từng làm.
                                Cộng đồng hỗ trợ, cơ sở vật chất hiện đại và cam
                                kết về sự xuất sắc trong học thuật đã thực sự vượt
                                qua mong đợi của tôi</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Bùi Tuyết Ngân</h3>
                                    <span>FPT Poly, Đà Nẵng</span>
                                </div>
                            </div>
                            <p>Quyết định theo đuổi bằng cấp tại FPT Poly là
                                một trong những quyết định tốt nhất tôi từng làm.
                                Cộng đồng hỗ trợ, cơ sở vật chất hiện đại và cam
                                kết về sự xuất sắc trong học thuật đã thực sự vượt
                                qua mong đợi của tôi</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Đỗ Văn Vũ</h3>
                                    <span>FPT Poly, Đà Nẵng</span>
                                </div>
                            </div>
                            <p>Quyết định theo đuổi bằng cấp tại FPT Poly là
                                một trong những quyết định tốt nhất tôi từng làm.
                                Cộng đồng hỗ trợ, cơ sở vật chất hiện đại và cam
                                kết về sự xuất sắc trong học thuật đã thực sự vượt
                                qua mong đợi của tôi</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
