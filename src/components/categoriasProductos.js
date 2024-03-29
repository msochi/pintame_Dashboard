import React from "react";


function run(props) {
    console.log(props)
   var result = Object.keys(props).map((key) => [key, props[key]]); 

    console.log(result);

    return (
    <div class="row">
    {result.map(tipo => <div class="col-lg-12 mb-12" id= "categorias">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    <p> <strong><u>Categoría </u> : </strong> { tipo[0] }.</p>
                                    <p><strong><u>Cantidad </u> : </strong> {tipo[1]}</p> 
                                </div>
                            </div>
                        </div>)}
    </div>
    );

}
class categoriasProductos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tipoProducto: [],
            //productos:{},
            //marcas:{},
            
        }
    }

    
        componentDidMount = () => {
        fetch("https://pintame.herokuapp.com/apis/productos")
            .then(response => response.json())
            .then(data => {
                console.log(data.data.countTipos);
               
                this.setState({
                    isLoaded: true,
                    tipoProducto: data.data.countTipos,
                    productos: data.data.products,
                    marcas: data.data.products.marca,
                    
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

       // {this.state.tipoProducto.map((tipoProducto,index)=>{ return(<li key={`data-${index}`}> {tipoProducto}</li> )})}
 
render(){
    
        console.log("estoy renderizando prod");
    
    const { error, isLoaded, productos, tipoProducto } = this.state;  
    
        return (

            <div class="col-lg-12 mb-4">						
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">CATEGORIAS</h6>
                </div>
                <div class="card-body " >
                    <div class="row">
                            {run(tipoProducto)}
                        </div>
                    </div>
                </div>
            </div>            
            );

        }    
   

    }
    export default categoriasProductos;