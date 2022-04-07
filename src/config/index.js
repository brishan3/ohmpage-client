
// Export the API URL
export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://ohmpage-api.herokuapp.com'
    : 'http://localhost:8081';
