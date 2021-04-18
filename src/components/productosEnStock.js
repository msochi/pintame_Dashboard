import React, {Component} from "react";
import PropTypes from "prop-types";

class productosEnStock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            productos: {}
        }
    }

    componentDidMount() {
        fetch("https://pintame.herokuapp.com/apis/productos")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    productos: data.data
                })
                console.log(data.data.products)
            })
            .catch(error =>{
                console.log("Problema")
            }) 
    }
 
                  
      

render(){
        console.log("estoy renderizando prod");
       
        return (
            <div class="col-md-4 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cantidad de Productos en Stock</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">ACA EL PRODUCTO{this.productos}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
            );

        }    
   

    }
    export default productosEnStock;