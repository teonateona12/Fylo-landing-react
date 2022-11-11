import img from "../images/logo.svg";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container">
      <img className="image" src={img} />
      <div className="cont2">
        <p className="p">Features</p>
        <p className="p">Team</p>
        <p className="p">Sign In</p>
      </div>
    </div>
  );
};

export default Menu;
