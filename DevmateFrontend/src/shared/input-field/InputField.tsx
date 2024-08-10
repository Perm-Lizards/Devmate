import './InputField.scss';
interface InputFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldName: string;
}

const InputField: React.FC<React.PropsWithChildren<InputFieldProps>> = ({
  name,
  value,
  onChange,
  fieldName,
}) => {
  return (
    <div className="input-field-container">
      <p className="upper-field">{name}</p>
      <input
        type="text"
        className="lower-field"
        name={fieldName}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputField;
