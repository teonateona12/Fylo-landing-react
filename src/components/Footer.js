import "./Footer.css";
import img from "../images/logo.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FaAdn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <img className="image" src={img} />
        <div className="phone">
          <img src={phone} />
          <p className="txt">Phone: +1-543-123-4567</p>
        </div>
        <div className="email">
          <img src={email} />
          <p className="txt">example@fylo.com</p>
        </div>
      </div>
      <div className="div-3">
        <p className="txt-2">About Us</p>
        <p className="txt-2">Jobs</p>
        <p className="txt-2">Press</p>
        <p className="txt-2">Blog</p>
      </div>
      <div className="div-3">
        <p className="txt-2">Contact Us</p>
        <p className="txt-2">Terms</p>
        <p className="txt-2">Privacy</p>
      </div>
      <div className="logo-div">
        <FaAdn />
      </div>
    </footer>
  );
};

export default Footer;
