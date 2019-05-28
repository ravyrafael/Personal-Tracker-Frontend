import React, {Component} from 'react';
import api from "../../services/api";
import "./styles.css"

export default class Main extends Component{
    state = {
        objects:[],
    }
    Delete(object){
        const{ objects } = this.state
            console.log(object)
            var filtered = objects.filter(
                el => el._id != object._id)
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
            <article key={object._id}>
            <strong>{object.title}</strong>
            <p>{object.description}</p>
            <p>{object.trackcode}</p>
            <a onClick={()=>this.Delete(object)}>Apagar</a>
            </article>
        ))}
        <div className="actions">
        <div>{this.state.objects.length}</div>
        <button>Anterior</button>
        <button>Próximo</button>
        </div>
        </div>
        )
    }

}