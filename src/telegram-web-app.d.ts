// telegram-web-app.d.ts

interface TelegramWebApp {
    MainButton: {
      text: string;
      show(): void;
      hide(): void;
      onClick(callback: () => void): void;
      setParams(params: Record<string, unknown>): void; // Используем Record вместо any
    };
    ready(): void;
    sendData(data: string): void;
  }
  
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }