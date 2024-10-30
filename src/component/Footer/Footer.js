import React from 'react'
import playStore from "../../images/assets/playstore.png"
import appStore from "../../images/assets/Appstore.png"
import "./Footer.css"

const Footer = () => {
  return (
   <footer id="footer">
    <div className='leftFooter'>
<h4>Download our app</h4>
<p>Download our app for android phons</p>
<img src={playStore} alt="play" />
<img src={appStore} alt="app" />
    </div>

    <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High quailty is our first priority always</p>

        <p>Copyright 2023 &copy; Mehar Shahraiz Ali</p>
    </div>

    <div className="rightFooter">
        <h4>Follow Us</h4>
              <a href="https://github.com/shahraiz109/jim-project.git">Github</a>
    </div>
   </footer>
   
  )
}

export default Footer
