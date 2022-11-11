import "./Form.css";

const Form = ({input,button}) => {
  return (
    <form>
      <input className="input" placeholder={input}></input>
      <button className="button">{button}</button>
    </form>
  );
};

export default Form;
