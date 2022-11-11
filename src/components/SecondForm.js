import "./SecondForm.css";
import Form from "../components/Form";

const SecondForm = () => {
  return (
    <div className="second-div">
      <div className="cnt">
        <h1 className="second-text">Get early access today</h1>
        <p className="text-2">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <Form input="email@example.com" button="Get Started For Free" />
    </div>
  );
};

export default SecondForm;
