import React, {Component} from "react";
import PropTypes from "prop-types";

class tipoDeStock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tipoProducto: {}
        }
    }

    componentDidMount = () => {
        fetch("https://pintame.herokuapp.com/apis/productos")
            .then(response => response.json())
            .then(data => {
               // console.log(data.data.countTipos)
                this.setState({
                    isLoaded: true,
                    tipoProducto: data.data.countTipos
                    
                })
            })
            .catch(error =>{
                console.log(error)
                this.setState({
                    isLoaded: true,
                    error
                  });
            }) 
    }
 
                  
      

render(){
    
        console.log("estoy renderizando prod");
        const { error, isLoaded, tipoProducto } = this.state;
       const tipos= tipoProducto;
      var cantidadTipoProductos = Object.keys(tipos).length;
       
        return (
            <div class="col-md-4 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Categorías de Productos en Stock
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{cantidadTipoProductos}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
            );

        }    
   

    }
    export default tipoDeStock;




