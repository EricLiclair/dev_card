import { useState, useEffect } from 'react';
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
import { Auth, Home, Dashboard, Error } from './views';

// auth
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Button } from '@mui/material';

const auth = getAuth();

function App() {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    console.log(auth.currentUser)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        console.log("Anonymous User", user);
      }
    })
  }, [user])


  return (
    <ThemeProvider theme={themeOptions}>
      <userContext.Provider value={{ user }}>
        <div className="App">
          <Router>
            <Routes>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route path="/auth" element={<Auth />} />
              <Route exact path="/404" element={<Error />} />
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </Router>
          {user && <Button onClick={() => signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null);
          }).catch((error) => {
            // An error happened.
          })} >Sign Out</Button>}
          <p>{JSON.stringify(user)}</p>
        </div>
      </userContext.Provider>
    </ThemeProvider >
  );
}

export default App;
