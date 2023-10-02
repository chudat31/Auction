import "./style.scss";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"
import {FaUserFriends} from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <div className="left_bar">
          <h4>Discover</h4>
          <p>Buy And Sell</p>
          <p>Service</p>
          <p>Contact</p>
          <p>Blog</p>
          <p>Merchant</p>
        </div>
        <div className="center_bar">
          <h4>About</h4>
          <p>About us</p>
          <p>Staff</p>
          <p>Career</p>
          <p>Team</p>
          <p>Privacy</p>
        </div>
        <div className="right_bar">
          <h4>Soical</h4>
          <p>Facebook</p>
          <p>Instagram </p>
          <p>Twitter</p>
          <p>Medium</p>
          <p>Email</p>
        </div>
        <div className="right_bar">
          <h4>Theme and Template</h4>
          <p>Website Templates</p>
          <p>HTML Templates</p>
          <p>WordPress Template</p>
          <p>CSS Templates</p>
          <p>One Page Templates</p>
        </div>
      </div>
      <div className="footer_right">
        <p>This website provides a various kind of latest smart devices on technology such as Phone, Laptop and so on.
            You will receive the information of our list product include Iphone 12, Pro, ProMax, 13, Pro, ProMax, Macbook Air, 
            Macbook pro
        </p>
        <p>Follow us: </p>
        <div className="icons">
            <BsTwitter className="icon_item"/>
            <BsFacebook className="icon_item" />
            <BsInstagram className="icon_item" />
            <FaUserFriends className="icon_item" />
            <BsYoutube className="icon_item" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
