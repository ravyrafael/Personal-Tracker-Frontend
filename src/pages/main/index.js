import React, {Component} from 'react';
import api from "../../services/api";
import "./styles.css"
import Object from "../models/objectDetail"

export default class Main extends Component{
    state = {
        objects:[],
    }
    Delete(object){
        const{ objects } = this.state
            console.log(object)
            var filtered = objects.filter(
                el => el._id !== object._id)
            this.setState({objects: filtered});
    }
    componentDidMount(){
        this.loadObjects();
    }
    
    componentDidUpdate(prevProps,prevState) {

      } 
    //É importante que os métodos react sejam feitos com arrowFunction para poder vizualizar o escopo this (LEXICO)
    loadObjects = async ()=>{
        const response = await api.get(`/Objects`);

        this.setState({objects: response.data.docs})
    };

    render(){
        const{ objects } = this.state
        return (
        <div className="object-list">
        {objects.map(object=>(
            <Object object={object} ></Object>
        ))}
        <div className="actions">
        <button>Anterior</button>
        <button>Próximo</button>
        </div>
        </div>
        )
    }

}