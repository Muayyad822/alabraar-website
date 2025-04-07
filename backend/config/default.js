export default {
  development: {
    cors: {
      origin: 'http://localhost:5173', // Vite's default port
      credentials: true
    },
    logLevel: 'dev'
  },
  production: {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true
    },
    logLevel: 'combined'
  }
};