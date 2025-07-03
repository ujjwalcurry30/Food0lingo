import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderComplete from './pages/OrderComplete';
import Orders from './pages/Orders';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3', // Light blue
      light: '#6ec6ff',
      dark: '#0069c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#90caf9', // Lighter blue
      light: '#e3f2fd',
      dark: '#5d99c6',
      contrastText: '#000',
    },
    background: {
      default: '#e3f2fd', // Very light blue background
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-complete" element={<OrderComplete />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
