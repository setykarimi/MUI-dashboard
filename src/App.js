
import { Stack } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Navabar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="App">
      <Navabar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
    </div>
  );
}

export default App;
