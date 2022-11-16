
import { createTheme, Stack, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Feed from './components/Feed';
import Navabar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navabar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
          <Add />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
