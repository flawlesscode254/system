import React from "react";
import "./App.css";
import { auth } from "./firebase";
import firebase from "firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const handleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
};

const handleLogout = () => {
  auth.signOut()
};

function Navigation() {

  const [user] = useAuthState(auth);

  return (
    <div className="navigation">
      <h1 className="title">
        Synth<span className="sub-title">Wave</span>
        <span className="dot"> . </span> <span className="io">io</span>
      </h1>
      {user && <h3 className="super">{auth.currentUser.displayName}</h3>}
      {user ? (
        <button onClick={handleLogout} className="login">
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} className="login">
          Login with Google
        </button>
      )}
    </div>
  );
}

export default Navigation;
