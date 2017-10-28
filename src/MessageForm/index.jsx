import React , { Component } from "react";
import Layout from "../Layout";
import firebase from "../firebase";

export default class MessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text : ""
        };
        this.setTextMessage = this.setTextMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    setTextMessage(event) {
        this.setState({
            text : event.target.value
        })
    }

    sendMessage() {
        const username = localStorage.getItem("userName");
        if(this.state.text.length >= 4) {
            firebase.database().ref("messages").push({
                text : this.state.text,
                username : username
            });
            this.setState({
                text : ""
            });
        } else {
            alert("Este mensaje es muy corto!");
        }
    }


    render() {
        return (
            <div className="form-group">
                <label>Mensaje:</label>
                <textarea onChange={this.setTextMessage} value={this.state.text} className="form-control"></textarea>
                <hr/>
                <button className="btn btn-primary" onClick={this.sendMessage}>Enviar</button>
            </div>
        );
    }
}