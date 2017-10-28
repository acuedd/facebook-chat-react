import React, { Component } from "react";
import Layout from "../Layout";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            login : false
        }
        this.setUsername = this.setUsername.bind(this);
        this.login = this.login.bind(this);
    }

    setUsername(event) {
        this.setState({
            username : event.target.value
        });
    }

    login() {
        if(this.state.username.length > 0 ) {
            localStorage.setItem("userName",this.state.username);
            this.setState({ login : true });
        } else {
            alert("Tu username esta vacio!");
        }
    }

    render() {
        return (
            <Layout>
                <h2>Registrate en el chat</h2>
                <div className="form-group">
                    <label>Ingresa tu username</label>
                    <input type="text" className="form-control" name="username" onChange={this.setUsername} value={this.username}/>
                </div>
                <button className="btn btn-success" onClick={this.login}>Entrar</button>
                { (this.state.login) ? <Redirect to="/"/> : "" }
            </Layout>
        );
    }
}
