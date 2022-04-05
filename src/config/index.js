// TODO update the urls to match your deployed heroku app and local development port

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://ohmpage-api.herokuapp.com'
    : 'http://localhost:8081';
