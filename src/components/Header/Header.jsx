import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';
import Cookies from 'js-cookie';

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Products', path: '/products' },
  { label: 'Inventory In', path: '/inventory/in' },
  { label: 'Inventory Out', path: '/inventory/out' },
  { label: 'Reports', path: '/reports' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    Cookies.remove('token'); // Remove token from cookies
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        px: 4,
        py: 1.2,
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo bên trái */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', flex: 1 }}>
          IMA
        </Typography>

        {/* Menu giữa */}
        <Box sx={{ display: 'flex', flex: 2, justifyContent: 'center', gap: 3 }}>
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                disableRipple
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                sx={{
                  backgroundColor: 'transparent !important',
                  boxShadow: 'none !important',
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>

        {/* Avatar phải */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleMenuOpen} className={styles.avatarBtn}>
            <Avatar
              sx={{
                width: 30,
                height: 30,
                boxShadow: '0 0 6px rgba(0,0,0,0.15)',
                border: '1px solid #ccc',
              }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
