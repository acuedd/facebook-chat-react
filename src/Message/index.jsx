import React , { Component } from "react";


const Message = props => {
    return (
        <div className="alert alert-primary">
            <h4>{props.text}</h4>
            <p> Enviado por : {props.username}</p>
        </div>
    );
};

export default Message;