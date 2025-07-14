import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid,
  CircularProgress,
} from '@mui/material';

const LoginForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: '#f5f6fa' }}
    >
      <Grid item xs={11} sm={8} md={4}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ mb: 3 }}
          >
            Inventory Manager Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
              autoComplete="username"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              autoComplete="current-password"
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
              disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}
            >
              {'Log In'}
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginForm;


