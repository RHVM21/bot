import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Функция для инициализации Telegram Web Apps SDK
function initializeTelegramWebApp() {
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Подготовка SDK
    tg.ready();

    // Пример использования SDK
    tg.MainButton.text = "Start";
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      tg.sendData("Button clicked!"); // Пример отправки данных
    });

    // Дополнительные параметры, если у вас есть
    tg.MainButton.setParams({ key: "value" }); // Пример использования Record<string, unknown> для параметров

    console.log('Telegram Web App initialized');
  }
}

// Инициализация Telegram Web App
initializeTelegramWebApp();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);