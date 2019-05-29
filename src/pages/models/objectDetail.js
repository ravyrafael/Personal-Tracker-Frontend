
import React, {Component} from 'react';
import "./styles.css"
import { Button } from "react-bootstrap"

export default class Main extends Component {
    Delete = () => this.props.delete();
    render() {
        return (
            <article key={this.props.object._id}>
                <strong>{this.props.object.title}</strong>
                <p>{this.props.object.description}</p>
                <p>{this.props.object.trackcode}</p>
                <Button onClick={this.Delete}>Apagar</Button>
            </article>
        )
    }
}