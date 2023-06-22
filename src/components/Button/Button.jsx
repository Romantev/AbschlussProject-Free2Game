import "./Button.css";

const Button = (props) => {
  return (
    <div className="button">
      <button>{props.btntext}</button>
    </div>
  );
};

export default Button;
