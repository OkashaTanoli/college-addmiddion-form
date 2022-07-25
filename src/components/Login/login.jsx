import React, { useEffect, useState } from 'react';
import './login.css'
import '../admitcard/loader.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";


function Login() {

    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [load, setLoad] = useState(false)
    const [err, setErr] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('login')) {
            navigate('/adminpanel', { replace: true })
            return;
        }
    }, [])
    
    const Login = (e) => {
        e.preventDefault()
        setLoad(true)
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                localStorage.setItem("login", true);
                setLoad(false)
                navigate('/adminpanel', { replace: true })
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setErr(true)
                setLoad(false)
                setTimeout(() => {
                    setErr(false)
                }, 2000)
            });
    }

    return (
        <div className='container'>
            <div className='clip_path'></div>
            <div className='loginBox'>
                <h2>ADMIN PANEL</h2>
                <form onSubmit={(e) => { Login(e) }}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' required />
                    <br />
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='password' required />
                    <br />
                    <button>{load ? <div class="loader2"></div> : 'LOGIN'}</button>
                    {
                        err &&
                        <p style={{ color: 'red', textAlign: 'center' }}>email or password is wrong</p>
                    }
                </form>
            </div>
        </div>
    );
}

export default Login;