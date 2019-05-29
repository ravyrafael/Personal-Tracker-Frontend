import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.css"
import { Pagination } from "react-bootstrap"
import Object from "../models/objectDetail"

export default class Main extends Component {
    state = {
        objects: [],
        items: [],
        active: 1
    }
    async Delete(object) {
        await api.delete(`/Object/${object._id}`);
        this.loadObjects(this.state.active)
    }
    componentDidMount() {
        this.loadObjects();

    }

    componentDidUpdate(prevProps, prevState) {

    }
    //É importante que os métodos react sejam feitos com arrowFunction para poder vizualizar o escopo this (LEXICO)
    loadObjects = async page => {
        if (!page) {
            page = 1;
        }

        let response = await api.get(`/Objects?page=${page}`);
        if (page > response.data.pages){
            page--;
            response = await api.get(`/Objects?page=${page}`);
        }

        this.setState({ objects: response.data.docs, active: page })
        let items = [];
        for (let number = 1; number <= response.data.pages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === page} onClick={() => this.loadObjects(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        this.setState({ items: items })

    };

    render() {
        const { objects } = this.state
        return (
            <div className="object-list">
                {objects.map(object => (
                    <Object key={object._id} object={object} delete={() => this.Delete(object)}></Object>
                ))}
                <div className="actions">
                    <div>
                        <Pagination size="sm">{this.state.items}</Pagination>
                    </div>
                </div>
            </div>
        )
    }

}