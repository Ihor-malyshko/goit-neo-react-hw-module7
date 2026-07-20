# goit-neo-react-hw-module7

Contact Book app built with React, Redux Toolkit, and mockapi.io.

## Налаштування mockapi.io

1. Зареєструйтесь на [mockapi.io](https://mockapi.io/) через GitHub.
2. Створіть новий проєкт.
3. Додайте ресурс **contacts** з полями:
   - `name` — String
   - `number` — String
4. Скопіюйте URL ендпоінту з dashboard (формат: `https://YOUR_ID.mockapi.io/contacts`).

## Локальний запуск

1. Створіть файл `.env` у корені проєкту:

```
VITE_API_BASE_URL=https://YOUR_ID.mockapi.io/contacts
```

2. Встановіть залежності та запустіть:

```bash
npm install
npm run dev
```

## Деплой на Vercel

1. Імпортуйте репозиторій на [vercel.com](https://vercel.com/).
2. У **Settings → Environment Variables** додайте:
   - Name: `VITE_API_BASE_URL`
   - Value: `https://YOUR_ID.mockapi.io/contacts`
3. Перезапустіть деплой (**Redeploy**).

> Якщо бачите `Error: Request failed with status code 500`, це означає, що URL бекенду не налаштований або вказаний неправильний ID проєкту mockapi.io.

## Здача домашньої роботи

Надайте два посилання:

- вихідні файли: GitHub репозиторій
- робоча сторінка: URL деплою на Vercel
