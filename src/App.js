import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage.jsx';
import InventoryInPage from './pages/InventoryInPage';
import InventoryOutPage from './pages/InventoryOutPage.jsx';
import ReportsPage from './pages/ReportsPage';
import ProtectedRoute from './components/route/ProtectedRoute'; 
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inventory/in"
            element={
              <ProtectedRoute>
                <InventoryInPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inventory/out"
            element={
              <ProtectedRoute>
                <InventoryOutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <ReportsPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


