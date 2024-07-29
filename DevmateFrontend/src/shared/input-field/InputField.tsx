import './InputField.scss';

interface InputFieldProps {
  name: string;
}

const InputField: React.FC<React.PropsWithChildren<InputFieldProps>> = ({ name }) => {
  return (
    <div className="input-field-container">
      <p className="upper-field">{name}</p>
      <input type="text" className="lower-field"></input>
    </div>
  );
};

export default InputField;
