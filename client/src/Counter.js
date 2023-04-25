import React, { Component } from "react";

export class Click extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    Updatecount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onMouseEnter={this.Updatecount}>Clicked {count} times</button>
            </div>
        );
    }
}

export default Click;