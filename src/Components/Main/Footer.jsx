import React from 'react'
import { Link } from 'react-router-dom'
import applestor from '../../Image/pay/app.jpg'
import playstor from '../../Image/pay/play.jpg'
import PayImage from '../../Image/pay/pay.png'
import "./Footer.css"

export default function Footer() {
    return (
        <footer id="footer" className='fix-top'>
            <div className="col">
                <Link className="icon" to="/">ShopNow.com</Link>
                <h4>Contact</h4>
                <p><strong>Address:</strong>Ayodhya, Uttar Pradesh, India</p>
                <p><strong>Phone:</strong>+91-9151590709</p>
                <p><strong>Hours:</strong>10:00 - 18:00(Monday - Sunday)</p>
                <h4>Follow</h4>
                <div className="follow-icons">
                    <a title='Linkedin Yogesh' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hrithikpandeyyo/"><i className="fa-brands fa-linkedin" /></a>
                    <a title='Facebook Yogesh' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/yogeshpandeyyo/"><i className="fa-brands fa-facebook" /></a>
                    <a title='Twitter Yogesh' target="_blank" rel="noopener noreferrer" href="https://twitter.com/hrithikpandeyy"><i className="fa-brands fa-twitter" /></a>
                    <a title='Youtube Yogesh' target="_blank" rel="noopener noreferrer" href="https://https://www.youtube.com/@hrithikpandeyyo"><i className="fa-brands fa-youtube" /></a>
                    <a title='Instagram Yogesh' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hrithikpandeyyo/"><i className="fa-brands fa-instagram" /></a>
                    <a title='Github Yogesh' target="_blank" rel="noopener noreferrer" href="https://github.com/hrithkpandeyyo"><i className="fa-brands fa-github" /></a>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Delivery Information</Link>
                <Link to="/contact">Privacy Policy</Link>
                <Link to="/contact">Terms &amp; Conditions</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <Link to="/cart"     >Sign In</Link>
                <Link to="/cart" >View Cart</Link>
                <Link to="/cart">My Watchlist</Link>
                <Link to="/cart">Track My Order</Link>
                <Link to="/cart">Help</Link>
            </div>
            <div className="col">
                <h4>Install App</h4>
                <p>From App Stor or Google Play Store</p>
                <div className="install-img">
                    <img src={applestor} alt="Download from App Store" />
                    <img src={playstor} alt="Download from Google Play Store" />
                </div>
                <p>Secure Payment Getway</p>
                <img src={PayImage} alt="Download from Google Play Store" />
            </div>
        </footer>
    )
}
