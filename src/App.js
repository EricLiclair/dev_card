// theming
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './theme/themeOptions';

// routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { PrivateRoute } from './utils';

// views
import { Auth, Home, Dashboard } from './views';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/dashboard' element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
