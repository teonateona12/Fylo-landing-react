import "./Comment.css";
import image from "../images/icon-quotes.svg";
import image2 from "../images/avatar-testimonial.jpg";

const Comment = () => {
  return (
    <div className="comment">
      <img src={image} />
      <p className="comment-text">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="quote">
        <img className="img2" src={image2} />
        <div className="name-position">
          <p className="name">Kyle Burton</p>
          <p className="position">Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
