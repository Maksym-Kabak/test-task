import React, { useContext, useEffect, useState } from 'react';
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = ({ Login, error, clearError }) => {
    const auth = useContext(AuthContext);
    const message = useMessage(error);

    const [details, setDetails] = useState({ email: "", password: "" });

    const changeHandler = event => {
        setDetails({ ...details, [event.target.name]: event.target.value })
    };
    useEffect(() => {

    }, []);

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    const submitHandler = e => {
        e.preventDefault();
        auth.login(details.email);
    };

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1 className="center">Incora Task</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <form onSubmit={ submitHandler }>
                                <div className="input-field">
                                    <input
                                        required={true}
                                        placeholder="Enter email"
                                        id="email"
                                        type="email"
                                        name="email"
                                        onChange={ changeHandler }
                                        value={ details.email }
                                        className="validate"
                                    />
                                    <label htmlFor="first_name">email</label>
                                </div>

                                <div className="input-field">
                                    <input
                                        required={true}
                                        placeholder="Enter password"
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="validate"
                                        onChange={ changeHandler }
                                        value={ details.password }
                                    />
                                    <label htmlFor="first_name">Password</label>
                                </div>

                                <div className="card-action center">
                                    <input className="btn yellow darken-4" type="submit"
                                           value="LOGIN"/>
                                </div>

                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
