import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ fontSize: 90, margin: 0, color: '#1976d2', fontWeight: 900, letterSpacing: 0 }}>404</h1>
      <p style={{ fontSize: 18, color: '#64748b', margin: '16px 0 32px', fontWeight: 500 }}>
        Oops! Page not found.
      </p>
        <Button
            variant="contained"
            type="submit"
            sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
            onClick={() => navigate('/dashboard')} 
        >
            {'Back to Home'}
        </Button>
    </div>
  );
};

export default NotFoundPage;