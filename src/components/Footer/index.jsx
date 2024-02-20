import { FaLocationPinLock } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import "./index.css"

const Footer = () =>{
    return(
        <div className="footer-bg">
            <img src="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="nav-img" alt="footer-img"/>
            <p className="footer-name">Ahead Up</p>
            <div className="address-container">
                <p ><FaLocationPinLock className="address-logo"/>  Texas us-123</p>
                <p><FaMailBulk  className="mail-logo"/>ahead@gmail.com</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png" alt="apple-logo" className="apple-logo"/>
            <p>@2024 Ahead up Rights are Reserved</p>
        </div>
    )

}
export default Footer