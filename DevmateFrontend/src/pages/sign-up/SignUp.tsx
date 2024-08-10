import { Button } from '@mui/material';
import InputField from '../../shared/input-field/InputField';
import './SignUp.scss';
import { useState } from 'react';
import { FormData, ServerResponse } from '../../types/credentials.types';

const SignUp = () => {
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
      const response = await fetch('http://92.63.102.249/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ServerResponse = await response.json();
      if (response.ok) {
        console.log('Authorisation successful:', result);
      } else {
        console.error('Authorisation failed:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="sign-up-container">
      <h1 className="sign-up-title">Вход в аккаунт</h1>
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
      <div className="no-acc">
        <p>Нет аккаунта? </p>
        <a href="/sign-in">
          <p className="no-acc-link"> Зарегистрироваться.</p>
        </a>
      </div>
      <Button className="sign-up-button" variant="outlined" onClick={handleSubmit}>
        Вход
      </Button>
    </div>
  );
};

export default SignUp;
