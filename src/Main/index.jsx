import React , { Component } from "react";
import Layout from "../Layout";
import MessageList from "../MessageList";
import MessageForm from "../MessageForm";
import firebase from "../firebase";
import { Redirect } from "react-router-dom";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth : false
        };
    }

    componentWillMount() {
        const user = localStorage.getItem("userName");
        if(user != null) {
            this.setState({
                auth : true
            });
        }
    }

    render() {
        return (
            <Layout>
                { (this.state.auth == false) ? <Redirect to="/login"/> : "" }
                <h3>Bienvenido al chat de la comunidad de Facebook Developer Circles</h3>
                <MessageList/>
                <MessageForm/>
            </Layout>
        );
    }
}