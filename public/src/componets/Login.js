import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { App } from '../App'
import { useHistory } from "react-router-dom";
import '../css/Login.css';
import { connect } from 'react-redux';
const API_HOST = "http://localhost:8000";
const Account_API_URL = `${API_HOST}/user`;


function Login(props) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [account, setaccount] = useState([]);
    const [validate, setvalidate] = useState(false);
    const history = useHistory()
    const handleChange = (e) => {
        validater();
        //<Redirect to="/dashboard"/>
    // <Link to="/order" replace />
        App();

    }
    const accountdetails = () => {
        fetch(`${Account_API_URL}`).then(res => res.json()).then(json => setaccount(json))
    }
    const validater = () => {
        for (let index = 0; index < account.length; index++) {
            if (account[index].mailid === email && account[index].password === password) {
                setvalidate(() => true)
                sessionStorage.setItem("usertype", account[index].usertype);
                sessionStorage.setItem("login", true)
                return true
            }
        }
    }
    useEffect(() => {
        accountdetails()
        console.log(account);
    }, []);

    // <div>{`${validate}`? `${"enter correct details"}`:`${validate}`}</div>
    //{validate == true && <p>enter correct details</p> }
    return (
        <div className="background">
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Application<br /> FoodServ</h2>
                    <p>Part of the secret to success in life is to eat what you like and let the food fight it out inside.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form method="" action ="/">
                            <div className="form-group">
                             <div class="form-group row">
                                <label>User Name</label>
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                            </div>
                            <div className="form-group">
                            <div class="form-group row">
                                <label>Password</label>
                                <input
                                    className="password"
                                    type="password"
                                    name="passworf"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                            </div>
                            </div>
                            <button type ="submit" className="btn btn-black" id="login" onClick={handleChange}>Login</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
