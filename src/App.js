import React, { useState, useEffect } from "react";
import "./App.css";
import db, { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import FirstPage from "./FirstPage";
import Navigation from "./Navigation";
import Details from "./Details";

function App() {
  const [userName, setUserName] = useState('');

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
    db.collection("users")
      .doc(auth.currentUser.email)
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUserName(doc.data().username)
        })
      })
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      {user ? (
        <div>
          {userName ? (
            <Details />
          ) : (
            <FirstPage />
          )}
        </div>
      ) : (
        <h1 className="error">
          You need to be logged in first before proceeding
        </h1>
      )}
    </div>
  );
}

export default App;
