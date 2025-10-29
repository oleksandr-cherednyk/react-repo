import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    background: {
      default: mode === 'light' ? '#f7f7f9' : '#0f1115',
      paper: mode === 'light' ? '#ffffff' : '#12161c',
    },
  },
  shape: { borderRadius: 12 },
});

const StyledButton = styled('button')(() => ({
  padding: '10px 16px',
  borderRadius: 12,
  border: 'none',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease',
  backgroundColor: '#1976d2',
  color: '#fff',
  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  '&:hover': {
    transform: 'translateY(-1px)',
    backgroundColor: '#115293',
    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  },
}));

export default function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleMode = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            minHeight: '100dvh',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Box
            sx={{
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 3,
              display: 'grid',
              gap: 2,
              justifyItems: 'center',
              textAlign: 'center',
              minWidth: 280,
            }}
          >
            <Typography variant="h4" component="h1">
              {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Typography>

            <StyledButton onClick={toggleMode}>Toggle Theme</StyledButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

