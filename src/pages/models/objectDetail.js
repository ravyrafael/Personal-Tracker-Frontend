
import React, {Component} from 'react';
import "./styles.css"
import { Button } from "react-bootstrap"

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = props
    }

    Delete(object){

    }
    render() {
        return (
            <article key={this.state.object._id}>
                <strong>{this.state.object.title}</strong>
                <p>{this.state.object.description}</p>
                <p>{this.state.object.trackcode}</p>
                <Button onClick={() => this.Delete(this.state.object)}>Apagar</Button>
            </article>
        )
    }
}