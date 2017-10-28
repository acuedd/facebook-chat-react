import React , { Component } from "react";
import firebase from "../firebase";

class Message extends Component  {

    constructor(props) {
        super(props);
        this.deleteMessage = this.deleteMessage.bind(this);
    }

    deleteMessage() {
        const user = localStorage.getItem("userName");
        if(user == this.props.username) {
            const ref = firebase.database().ref().child("messages").child(this.props.id);
            ref.remove();
        } else {
            alert("El mensaje que desear eliminar, no es tuyo")
        }
    }

    render() {
        return (
            <div className="alert alert-primary" style={{marginTop:"10px"}}>
                <h4>{this.props.text}</h4>
                <p> Enviado por : {this.props.username}</p>
                <button className="btn btn-danger" onClick={this.deleteMessage}>Eliminar</button>
            </div>
        );
    }
};

export default Message;