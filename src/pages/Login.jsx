import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  doc,
  setDoc
} from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuid } from "uuid";
import { keyGenerator } from '../utils/keyGenerator'

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('user', JSON.stringify(user))
      let keys = keyGenerator();
      localStorage.setItem('keys', JSON.stringify(keys))
      let userId = JSON.parse(localStorage.getItem('user')).user.uid;
      await setDoc(doc(db, "keys", userId), {
        publicKey: keys.publicKey
      });
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
