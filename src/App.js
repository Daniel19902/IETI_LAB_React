import logo from './logo.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1> Login </h1>
          <TextField id="outlined-basic" label="User Or Email" variant="outlined" />
          <br/>
          <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
          />
          <br/>
          <br/>
          <Button variant="contained">Sing In</Button>
      </header>
    </div>
  );
}

export default App;
