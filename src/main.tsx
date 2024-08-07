import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

declare global {
  interface TelegramWebApp {
    MainButton: {
      text: string;
      show(): void;
      hide(): void;
      onClick(callback: () => void): void;
      setParams(params: Record<string, unknown>): void;
    };
    ready(): void;
    sendData(data: string): void;
    expand(): void;
    contract(): void; // Добавлен метод contract
    isExpanded: boolean; // Добавлено свойство isExpanded
    setHeaderColor(color: string): void;
    setBackgroundColor(color: string): void;
    enableClosingConfirmation(): void;
    BackButton: {
      show(): void;
    };
  }

  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}

// Функция для инициализации Telegram Web Apps SDK
function initializeTelegramWebApp() {
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Подготовка SDK
    tg.ready();

    // Проверяем, развернуто ли приложение
    if (!tg.isExpanded) {
      tg.expand(); // Развернуть приложение на весь экран
    }

    // Установка цвета заголовка и фона
    tg.setHeaderColor('#fff');
    tg.setBackgroundColor('#fff');

    // Включаем подтверждение закрытия и показываем кнопку назад
    tg.enableClosingConfirmation();
    tg.BackButton.show();

    console.log('Telegram Web App initialized');
  } else {
    console.error('Telegram WebApp SDK is not available');
  }
}

// Инициализация Telegram Web App
initializeTelegramWebApp();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);