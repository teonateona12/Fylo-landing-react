import "./FirstForm.css";
import image from "../images/illustration-1.svg";
import Form from "../components/Form";

const FirstForm = () => {
  return (
    <div className="div">
      <img className="img" src={image} />
      <div className="order1">
        <h1 className="text">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-two">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <Form input="Enter your email..." button="Get Started" />
      </div>
    </div>
  );
};
export default FirstForm;
