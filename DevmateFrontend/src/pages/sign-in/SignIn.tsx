import './SignIn.scss';
import InputField from '../../shared/input-field/InputField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { FormData, ServerResponse } from '../../types/credentials.types';

const SignIn = () => {
  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: '',
    name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://92.63.102.249/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ServerResponse = await response.json();
      if (response.ok) {
        console.log('Registration successful:', result);
      } else {
        console.error('Registration failed:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="sign-in-container">
      <h1 className="sign-in-title">Регистрация аккаунта</h1>
      <InputField
        name="Имя:"
        value={formData.name}
        onChange={handleChange}
        fieldName="name"
      />
      <InputField
        name="Логин:"
        value={formData.login}
        onChange={handleChange}
        fieldName="login"
      />
      <InputField
        name="Пароль:"
        value={formData.password}
        onChange={handleChange}
        fieldName="password"
      />
      <div className="already-reg">
        <p>Уже зарегистрированы? </p>
        <a href="/sign-up">
          <p className="already-reg-link"> Войти в аккаунт.</p>
        </a>
      </div>
      <Button className="sign-in-button" variant="outlined" onClick={handleSubmit}>
        Регистрация
      </Button>
    </div>
  );
};

export default SignIn;
