import React from 'react';
import { Container, ThemeProvider, ThemeUICSSObject } from 'theme-ui';
import { theme } from './theme';
import Studies from './views/studies/Studies';

const styles: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: theme.colors?.background
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Container sx={styles}>
      <Studies />
    </Container>
  </ThemeProvider>
);

export default App;
