import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Conlangs from './conlangs/Conlangs.tsx';
import Sumskiwa from './conlangs/sumskiwa/Sumskiwa.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/conlangs',
    element: <Conlangs />
  },
  {
    path: '/conlangs/sumskiwa',
    element: <Sumskiwa />
  }
]);

const theme = responsiveFontSizes(createTheme({}));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
