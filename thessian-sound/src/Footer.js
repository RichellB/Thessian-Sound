import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Footer(props){
  return(
    <div className="footer">
        <div class="footer-content">
        <div class="footer-section about"></div>
        <div class="footer-section links"></div>
        <div class="footer-section contact-form"></div>
        <div class="footer-bottom">
          &copy; thessiansound.com | Designed by Thessiah
        </div>    
    </div>
</div>
  )
}

export default Footer;