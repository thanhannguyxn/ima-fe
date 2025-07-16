import { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Container,
} from '@mui/material';

const DashboardPage = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); // Redirect to login if no token
      return;
    }

    const savedUsername = localStorage.getItem('username');
    setUsername(savedUsername || 'Unknown');
    setLoading(false);
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Card
          sx={{
            backgroundColor: '#e8f0fe',
            color: '#000',
            borderRadius: 3,
            border: '1px solid #bbdefb',
            boxShadow: '0 2px 10px rgba(25, 118, 210, 0.1)',
            mb: 4,
            px: 3,
            py: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Welcome to IMA, {username} 👋
            </Typography>
            <Typography variant="body2" mt={1}>
              This is your dashboard where you can manage products, track inventory in/out, and view insightful reports.
            </Typography> 
          </CardContent>
        </Card>


      </Container>
    </>
  );
};

export default DashboardPage;



