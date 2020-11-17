import React, {useEffect, useState} from 'react'
import fire from './fire';
import Login from './components/login';
import Welcome from './components/welcome';
import './index.css';
function App() {
const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [hasAccount, setHasAccount] = useState(false);

const clearInput = () => {
  setEmail('');
  setPassword('');
}

const clearError = () => {
  setEmailError('');
  setPasswordError('');
}

const handleLogOut = () => {
  fire.auth().signOut();
}


const handleLogin = () =>{
  clearError();
  fire.auth().signInWithEmailAndPassword(email, password)
  .catch((err) => {
    switch(err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        setEmailError(err.message);
        break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;
    }
  })
}

const handleSignUp = () =>{
  clearError();
  fire.auth().createUserWithEmailAndPassword(email, password)
  .catch((err) => {
    switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
        setEmailError(err.message);
        break;
      case "auth/weak-password":
        setPasswordError(err.message);
        break;
    }
  })
}

const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      clearInput();
      setUser(user)
    }else{
      setUser('');
    }
  })
}

useEffect(() => {
  authListener()
},[]);

  return (
    <div className="App">
      {user ? (
        <Welcome handleLogOut={handleLogOut}/>
      ):(
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin ={handleLogin}
        handleSignUp ={handleSignUp}
        emailError={emailError}
        passwordError={passwordError}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        />
      )}
    </div>
  );
}

export default App;
