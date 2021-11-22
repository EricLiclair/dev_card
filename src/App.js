import { userContext } from './context/usercontext';

// theming
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './theme/themeOptions';

// routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// views
import { Auth, Home, Dashboard, Error, Navbar } from './views';

// auth
import { GetUser } from './utils/auth/user';
import { getUserData } from './utils/firestore';


function App() {
  const [user, loading] = GetUser();
  const [userData, userDataIsLoading] = getUserData(user?.uid);
  console.log("LOADING APP")
  return (
    <ThemeProvider theme={themeOptions}>
      <userContext.Provider value={{ user, loading, userData, userDataIsLoading }}>
        <Navbar />
        <div className="App" style={{ padding: "1rem", display: "flex", justifyContent: "center", }}>
          <Router>
            <Routes>
              <Route exact path='/dashboard' element={<Dashboard userData={userData} />} />
              <Route path="/auth" element={<Auth />} />
              <Route exact path="/404" element={<Error />} />
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </Router>
        </div>
      </userContext.Provider>
    </ThemeProvider >
  );
}

export default App;
