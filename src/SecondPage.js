import React, { useState } from "react";
import "./App.css";
import db, {auth} from "./firebase";
import firebase from "firebase";

function SecondPage() {
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    await db
      .collection("users").doc(auth.currentUser.email)
      .add({
        username: username,
        time: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setUsername("");
      });
  };

  return (
    <div id="main" className="main">
      <h3 className="sub-heading">Submit your information through here</h3>
      <form className="data-entry">
        <label className="fill-title" htmlFor="full name">
          Guardian Name
        </label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="fill"
          type="text"
          id="guardian_name"
          placeholder="Enter your Guardian Name"
          required
        />
      </form>
      <div id="next" className="next">
        <button id="next-btn" onClick={handleSubmit} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default SecondPage;
