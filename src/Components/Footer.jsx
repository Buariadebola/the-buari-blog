import React from 'react'
import logo from '../Images/TBB logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top-footer">
          <div className="footer-content">
          <h2>About Us</h2>
          <ul>
            <li>About TBB</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Advertise with Us</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Resoures</h2>
          <ul>
            <li>FAQs</li>
            <li>Terms & Services</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>News Sections</h2>
          <ul>
            <li>Politics</li>
            <li>Business</li>
            <li>Sports</li>
            <li>Entertainment</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Social Media</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
        </div>
        <div className="bottom-footer">
          <div className='footer-logo'>
            <img src={logo} alt="" />
          </div>
          <p>&copy; 2025 The Buari Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
