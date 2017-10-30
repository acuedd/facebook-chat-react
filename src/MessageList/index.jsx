import React , { Component } from "react";
import Layout from "../Layout";
import firebase from "../firebase";
import { Redirect } from "react-router-dom";
import Message from "../Message";

export default class MessageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages : []
        };
    }

    componentDidMount() {
        const items = firebase.database().ref("messages");
        items.on("value",(snapshot) => {
            let messages = [];
            console.log(snapshot)
            const messagesFromDB = snapshot.val();
            for(let key in messagesFromDB) {
                console.log(messagesFromDB[key]);
                const { text,username, datetime} = messagesFromDB[key];
                messages.push({
                    text,
                    username,
                    datetime,
                    key : key
                });
            }
            this.setState({ messages : messages });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.messages.map(
                        message => <Message key={message.key} 
                                            id={message.key} 
                                            text={message.text} 
                                            username={message.username}
                                            datetime={message.datetime}/>
                    )
                }
            </div>
        );
    }
}