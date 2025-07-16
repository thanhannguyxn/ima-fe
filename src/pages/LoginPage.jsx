import LoginForm from '../components/LoginForm';
import authService from '../components/authorization/authService';
import { use, useState, useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const navigate = useNavigate();
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    // Check if the user is already logged in
    const token = Cookies.get('token');
    if (token) {
      navigate('/dashboard'); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  const handleLogin = async (credentials) => {
    try {
      const res = await authService.login(credentials);
      localStorage.setItem('token', res.token); // Store the token in local storage
      localStorage.setItem('username', res.username); // Store the username in local storage
      setSnack({ open: true, message: 'Login successful!', severity: 'success' });

      setTimeout(() => {
        navigate('/dashboard'); // Redirect to the dashboard after a successful login
      }, 1000);
    } catch (err) {
      setSnack({ open: true, message: 'Invalid username or password', severity: 'error' });
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleLogin} /> 
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setSnack({ ...snack, open: false })} severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginPage;

