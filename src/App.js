import React, { useState, useEffect } from "react";
import "./App.css";
import db, { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Navigation from "./Navigation";

function App() {
  const [data, setData] = useState([]);

  const [user] = useAuthState(auth)

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          username: doc.data().username,
        }))
      );
    });
  }, [db]);

  return (
    <div className="App">
      <Navigation />
      {user ? (
        <div>
          {data ? (
            <SecondPage />
              ) : (
            <FirstPage />
          )}
        </div>
      ): (
        <h1 className="error">You need to be logged in first!!!</h1>
      )}
    </div>
  );
}

export default App;
