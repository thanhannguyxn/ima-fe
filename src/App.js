import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage.jsx';
import InventoryInPage from './pages/InventoryInPage';
import InventoryOutPage from './pages/InventoryOutPage.jsx';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/inventory/in" element={<InventoryInPage />} />
          <Route path="/inventory/out" element={<InventoryOutPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


