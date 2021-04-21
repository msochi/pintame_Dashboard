import React from "react";


class productosEnStock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            productos: {}
        }
    }

    componentDidMount = () => {
        fetch("https://pintame.herokuapp.com/apis/productos")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    isLoaded: true,
                    productos: data.meta
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
        const { error, isLoaded, productos } = this.state;
       
        return (
            <div class="col-md-4 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cantidad de Productos en Stock</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{productos.total}</div>
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