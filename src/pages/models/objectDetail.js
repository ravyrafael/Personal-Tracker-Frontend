
import React, { Component } from 'react';
import "./styles.css"
import { Button, Card, Col, Row } from "react-bootstrap"
import { IconContext } from 'react-icons';
import { MdDelete, MdSearch } from 'react-icons/md';

export default class Main extends Component {
    Delete = () => this.props.delete();
    render() {
        return (
            <Card style={{ margin: '0.9rem 1.8rem' }} key={this.props.object._id}>
                <Card.Header as="h5">
                    <Row>
                        <Col>
                            {this.props.object.title}
                        </Col>
                        <div className="pull-right" style={{ margin: '0rem 0.2rem' }}  >
                            <IconContext.Provider value={{ className: "icons blue" }}>
                                <div>
                                    <MdSearch />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="pull-right" style={{ margin: '0rem 0.2rem' }}>
                            <IconContext.Provider value={{ className: "icons red" }}>
                                <div>
                                    <MdDelete onClick={this.Delete} />
                                </div>
                            </IconContext.Provider>
                        </div>

                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.object.trackcode}</Card.Title>
                    <Card.Text>{this.props.object.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}