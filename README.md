# Учи Тропарь - Инструкция по запуску

Это приложение создано в Google AI Studio. 

## Как запустить на GitHub Pages (бесплатно)

1. Создайте репозиторий на GitHub.
2. Загрузите в него все файлы из этого архива.
3. Перейдите в **Settings -> Pages**.
4. В пункте **Build and deployment** измените **Source** на **GitHub Actions**.
5. Сайт соберется автоматически и будет доступен по ссылке, которую выдаст GitHub (обычно `https://your-username.github.io/your-repo-name/`).

## Аудиофайлы
Приложение настроено на чтение аудио из вашего репозитория: `https://github.com/skulanov/Uchi_Tropar/tree/main/audio`.
Если вы измените структуру папок или название репозитория, проверьте функцию `getAudioUrl` в `src/App.tsx`.

## Разработка
Для локального запуска:
1. `npm install`
2. `npm run dev`
