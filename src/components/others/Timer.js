import React, { Component } from "react";

export default class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.stick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    stick() {
        const { seconds } = this.state;
        this.setState({
            seconds: seconds + 1
        })
    }

    render = () => {
        const { seconds } = this.state;

        return (<h1>You spent { seconds } on this page!</h1>)
    }

}