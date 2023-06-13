import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/main.css"
import { FaLinkedin, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div class="footer">
        <nav class="footer-menu">
            <Link to="https://www.linkedin.com/in/shih-hsin-chuang/" target="_blank"><FaLinkedin /></Link>
            <Link to="https://discord.gg/fw86keGk" target="_blank"><FaDiscord/></Link>
            <Link to="https://www.facebook.com/profile.php?id=100015488111213" target="_blank"><FaFacebook /></Link>
            <Link to="https://www.instagram.com/phoebe.0723/" target="_blank"><FaInstagram/></Link>
        </nav>
        <div class="footer-text">Copyright © 2023 SHIH-HSIN CHUANG All Rights Reserved.</div>
    </div>
  )
}

export default Footer