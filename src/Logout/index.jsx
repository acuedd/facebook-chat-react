import React , { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logout : false
        }
    }

    componentWillMount() {
        const user = localStorage.removeItem("userName");
        this.setState({ logout : true });
    }

    render() {
        return (<div>{ (this.state.logout) ? <Redirect to="/login"/> : "" }</div>);
    }
}