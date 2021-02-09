import React, {useState, useEffect} from 'react';
import {
  Home,
  Login,
  News,
  Profile
} from './pages/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {ROUTES} from './constants/routes';
import {fire} from './fire';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case "auth/invalid-email" :
          case "auth/user-disabled" :
          case "auth/user-not-found" :
            setEmailError(err.message);
            break;
          case "auth/wrong-password" :
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case "auth/email-already-in-use" :
          case "auth/invalid-email" :
            setEmailError(err.message);
            break;
          case "auth/weak-password" :
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    })
  }

  useEffect( () => {
    const isLogged = localStorage.getItem('isLogged') ? JSON.parse(localStorage.getItem('isLogged')) : [];
    setUser(isLogged);
    
  }, []);

  useEffect( () => {
    localStorage.setItem('isLogged', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={ROUTES.NEWS}>
            <News />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <Login 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              emailError={emailError}
              passwordError={passwordError}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              user={user}
            />
          </Route>
          <Route path={ROUTES.PROFILE}>
            <Profile user={user} handleLogout={handleLogout} />
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
