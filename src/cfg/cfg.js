export const cfg = {
  API: {
    HOST:
      process.env.NODE_ENV === 'production'
        ? 'https://price-it-api.vercel.app/'
        : 'http://localhost:3000',
  },

  key: 'ef8eb942-17a7-4aab-bba8-e0e6ea3a3629',
};
