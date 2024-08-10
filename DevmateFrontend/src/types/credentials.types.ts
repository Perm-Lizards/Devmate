// Интерфейс для данных формы
export interface FormData {
  login: string;
  password: string;
  name: string;
}

// Интерфейс для ответа от сервера
export interface ServerResponse {
  success: boolean;
  message: string;
}
