const PLACEHOLDER_IDS = ['YOUR_PROJECT_ID', '669e7a4eac9399413eb8'];

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const isApiConfigured = () => {
  if (!API_BASE_URL) return false;

  return !PLACEHOLDER_IDS.some((id) => API_BASE_URL.includes(id));
};

export const getApiSetupMessage = () =>
  'Configure VITE_API_BASE_URL with your mockapi.io /contacts endpoint in .env and on Vercel.';
