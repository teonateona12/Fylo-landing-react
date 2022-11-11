import "./Section.css";
import img from "../images/illustration-2.svg";
import arrow from "../images/icon-arrow.svg";
import Comment from "./Comment.js";

const Section = () => {
  return (
    <div className="div2">
      <img className="illustration" src={img} />
      <div className="cnt-2">
        <p className="stay">Stay productive, wherever you are</p>
        <p className="text2">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. <br /> <br /> Securely
          share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required!
        </p>
        <div className="green-div">
          <div>
            <div className="arrow">
              <p className="how">See how Fylo works</p>
              <img className="arrow-icon" src={arrow} />
            </div>
            <hr></hr>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default Section;
