import React, { useState, useEffect } from "react";
import db, { auth } from "./firebase";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";

import Template from "./Template";

function Details() {
  const [userName, setUserName] = useState("");
  const [userAdmission, setUserAdmission] = useState("");
  const [userClass, setUserClass] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userMother, setUserMother] = useState("");
  const [userFather, setUserFather] = useState("");

  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      db.collection("users").doc(auth.currentUser.email).onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUserName(doc.data().username);
          setUserAdmission(doc.data().admission);
          setUserClass(doc.data().classLevel);
          setUserBirth(doc.data().birth);
          setUserMother(doc.data().mother);
          setUserFather(doc.data().father);
        });
      });
    }
  }, []);

  return (
    <div className="mainDetails">
      <h1 className="detailsHeading">Here are your details</h1>
      <Template title={"Name"} subTitle={userName} />
      <Template title={"Admission"} subTitle={userAdmission} />
      <Template title={"Class"} subTitle={userClass} />
      <Template title={"Birth"} subTitle={userBirth} />
      <Template title={"Mother"} subTitle={userMother} />
      <Template title={"Father"} subTitle={userFather} />
    </div>
  );
}

export default Details;
