import React, {Component} from 'react';
import api from "../../services/api";
import "./styles.css"

export default class Main extends Component{
    state = {
        products:[],
    }
    Delete(){
        this.loadProducts();
    }
    componentDidMount(){
        this.loadProducts();
    }
    componentDidUpdate(prevProps,prevState) {

      } 
    //É importante que os métodos react sejam feitos com arrowFunction para poder vizualizar o escopo this (LEXICO)
    loadProducts = async ()=>{
        const response = await api.get(`/Objects`);

        this.setState({products: response.data.docs})
    };

    render(){
        const{ products} = this.state
        return (
        <div className="product-list">
        {products.map(product=>(
            <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a onClick={()=>{
                console.log(product)
                var filtered = products.filter(
                    el => el._id != product._id)
                this.setState({products: filtered});
            }       
        }>Apagar</a>
            </article>
        ))}
        <div className="actions">
        <div>{this.state.products.length}</div>
        <button>Anterior</button>
        <button>Próximo</button>
        </div>
        </div>
        )
    }

}