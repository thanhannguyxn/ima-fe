const BASE_URL = 'https://localhost:5000/api/auth';

const login = async ({ username, password }) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  return await res.json();
};

export default {
  login
};
