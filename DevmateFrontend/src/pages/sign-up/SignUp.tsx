import { Button } from '@mui/material';
import InputField from '../../shared/input-field/InputField';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <h1 className="sign-up-title">Вход в аккаунт</h1>
      <InputField name="Логин:" />
      <InputField name="Пароль:" />
      <div className="no-acc">
        <p>Нет аккаунта? </p>
        <a href="/sign-in">
          <p className="no-acc-link"> Зарегистрироваться.</p>
        </a>
      </div>
      <Button className="sign-up-button" variant="outlined">
        Вход
      </Button>
    </div>
  );
};

export default SignUp;
