//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

//Components
import HeroImage from './components/HeroImage'
import SearchImage from './components/SearchImage';

//CSS
import './App.css';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <HeroImage />
        <SearchImage />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
