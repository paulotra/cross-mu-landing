export const getBaseUrl = () =>
  typeof window !== 'undefined' ? '' : (process.env.BASE_URL ?? '')
