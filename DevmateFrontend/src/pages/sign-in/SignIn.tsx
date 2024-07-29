import './SignIn.scss';
import InputField from '../../shared/input-field/InputField';
import { Button } from '@mui/material';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <h1 className="sign-in-title">Регистрация аккаунта</h1>
      <InputField name="Имя:" />
      <InputField name="Фамилия:" />
      <InputField name="Логин:" />
      <InputField name="Пароль:" />
      <div className="already-reg">
        <p>Уже зарегистрированы? </p>
        <a href="/sign-up">
          <p className="already-reg-link"> Войти в аккаунт.</p>
        </a>
      </div>
      <Button className="sign-in-button" variant="outlined">
        Регистрация
      </Button>
    </div>
  );
};

export default SignIn;
