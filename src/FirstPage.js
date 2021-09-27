import React, { useState } from "react";
import "./App.css";
import db, {auth} from "./firebase";
import firebase from "firebase";

function FirstPage() {
  const [username, setUsername] = useState("");
  const [admission, setAdmission] = useState("");
  const [classLevel, setClassLEvel] = useState("");
  const [birth, setBirth] = useState("");
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");

  const handleSubmit = async () => {
    await db
      .collection("users").doc(auth.currentUser.email)
      .add({
        username: username,
        admission: admission,
        classLevel: classLevel,
        birth: birth,
        mother: mother,
        father: father,
        time: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setUsername("");
        setAdmission("");
        setClassLEvel("");
        setBirth("");
        setMother("");
        setFather("");
      });
  };

  return (
    <div>
      <div id="main" className="main">
        <h3 className="sub-heading">Submit your information through here</h3>
        <form className="data-entry">
          <label className="fill-title" htmlFor="full name">
            Full Name
          </label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="fill"
            type="text"
            id="username"
            placeholder="Enter your Full Names"
            required
          />
          <label className="fill-title" htmlFor="admission number">
            Admission Number
          </label>
          <input
            value={admission}
            onChange={(event) => setAdmission(event.target.value)}
            className="fill"
            type="text"
            id="admission"
            placeholder="Enter your Admission Number"
            required
          />
          <label className="fill-title" htmlFor="birth year">
            Birth Year
          </label>
          <input
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
            className="fill"
            id="birth"
            type="date"
            name="birth-date"
            required
          />
          <label className="fill-title" htmlFor="class">
            Class
          </label>
          <select
            name="classes"
            value={classLevel}
            onChange={(event) => setClassLEvel(event.target.value)}
            className="fill"
            id="classes"
            required
          >
            <option className="opts" id="fill" value="form one">
              Form One
            </option>
            <option className="opts" id="fill" value="form two">
              Form Two
            </option>
            <option className="opts" id="fill" value="form three">
              Form Three
            </option>
            <option className="opts" id="fill" value="form four">
              Form Four
            </option>
          </select>
          <label className="fill-title" htmlFor="mother name">
            Mother's Name
          </label>
          <input
            value={mother}
            onChange={(event) => setMother(event.target.value)}
            className="fill"
            type="text"
            id="mother"
            placeholder="Enter your Mother's Name"
            required
          />
          <label className="fill-title" htmlFor="father name">
            Father's Name
          </label>
          <input
            value={father}
            onChange={(event) => setFather(event.target.value)}
            className="fill"
            type="text"
            id="father"
            placeholder="Enter your Father's Name"
            required
          />
        </form>
        <div id="next" className="next">
          <button id="next-btn" onClick={handleSubmit} className="next-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
