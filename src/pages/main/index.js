import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.css"
import { Pagination,CardColumns } from "react-bootstrap"
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
        if (page > response.data.pages) {
            page--;
            response = await api.get(`/Objects?page=${page}`);
        }

        this.setState({ objects: response.data.docs, active: page })
        let items = [];
        let limitItems = 10;
        let minPageShow = page > limitItems / 2 ? page - limitItems / 2 : 1
        minPageShow = Math.min(minPageShow, response.data.pages - limitItems)
        let maxPageShow = Math.min(minPageShow + limitItems, response.data.pages);
        items.push(<Pagination.First disabled={page === 1} onClick={() => this.loadObjects(1)} />);
        items.push(<Pagination.Prev disabled={page === 1} onClick={() => this.loadObjects(page - 1)} />);
        for (let number = minPageShow; number <= maxPageShow; number++) {
            items.push(
                <Pagination.Item key={number} active={number === page} onClick={() => this.loadObjects(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        items.push(<Pagination.Next disabled={page === response.data.pages} onClick={() => this.loadObjects(page + 1)} />);
        items.push(<Pagination.Last disabled={page === response.data.pages} onClick={() => this.loadObjects(response.data.pages)} />);
        this.setState({ items: items })

    };

    render() {
        const { objects } = this.state
        return (
            <div className="object-list">
                <CardColumns>
                {objects.map(object => (
                    <Object key={object._id} object={object} delete={() => this.Delete(object)}></Object>
                ))}
                </CardColumns>
                <div className="actions justify-content-center">
                    <div>
                        <Pagination size="sm">{this.state.items}</Pagination>
                    </div>
                </div>
            </div>
        )
    }

}