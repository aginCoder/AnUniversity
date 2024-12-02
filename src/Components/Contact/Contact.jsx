import React from 'react'
import './Contact.css'
import msg from '../../Assets/msg.png'
import mail from '../../Assets/mail.png'
import phone from '../../Assets/phone.png'
import location from '../../Assets/location.png'
import white from '../../Assets/white.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", 
                        "9d16e5ec-e642-493f-b6ec-f0961419e8a9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Gửi lời nhắn cho chúng tôi <img src={msg} alt="" /></h3>
                <p>Hãy liên hệ với chúng tôi thông qua biểu mẫu liên hệ hoặc tìm
                    thông tin liên lạc của chúng tôi bên dưới. Phản hồi, câu hỏi
                    và đề xuất của bạn rất quan trọng đối với chúng tôi khi chúng
                    tôi nỗ lực cung cấp dịch vụ xuất sắc cho cộng đồng đại học của mình.</p>
                <ul>
                    <li><img src={mail} alt="" />phamgiaan545@gmail.com</li>
                    <li><img src={phone} alt="" />+84 964-950-510</li>
                    <li><img src={location} alt="" />77 Pham Nhu Xuong, Da Nang <br />Viet Nam</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Tên của bạn</label>
                    <input type="text" name="name" id="" placeholder='Nhập tên của bạn' required />
                    <label>Số điện thoại</label>
                    <input type="tel" name="phone" id="" placeholder='Nhập số điện thoại' required />
                    <label>Viết lời nhắn</label>
                    <textarea name="message" rows="6" placeholder='Nhập lời nhắn của bạn' required></textarea>
                    <button type='submit' className='btn dark-btn'>Gửi ngay <img src={white} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
