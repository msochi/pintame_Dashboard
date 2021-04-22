import React, {Component} from "react";



function run(props) {
    console.log(props)
    var result = Object.keys(props).map((key) => [key, props[key]] ) ;
  
    console.log(result);
    
  

    return (
    <div class="row" >
    {result.map(result => <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    <div className= "interiorTarjeta">
                                         <div className= "imagencard">
                                            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "15rem"} } src={"https://pintame.herokuapp.com/imagen_producto/"+result[1].imagen_producto }  alt="{ultimoProducto.imagen_producto}"/>
                                        </div>
                                        <div className= "textoTarjeta">
                                            <p><strong> <u>Sku N°</u>: </strong>{result[1].sku}</p>
                                            <p><strong> <u>Marca</u>: </strong>{ result[1].marcas.marca} </p>
                                            <p><strong> <u>Título</u>: </strong> {result[1].titulo_producto}</p> <p><strong> <u>Precio</u>: </strong>{result[1].precio}</p>
                                            <p><strong> <u>Costo</u>: </strong>{result[1].costo} </p>
                                        </div>
                                    </div>
                               </div> 
                            </div>
                        </div>)}
    </div>
    );
    
}

class ListaProductos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            productos:{},
           
        }
    }

    componentDidMount = () => {
        fetch("https://pintame.herokuapp.com/apis/productos")
            .then(response => response.json())
            .then(data => {    
                console.log(data.data.products,)        
                    this.setState({
                    isLoaded: true,
                    productos: data.data.products,
                                        
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
        const { error, productos,Lista  } = this.state;
             

       
        return (
            <div class=" mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1"> 
                            <p>PRODUCTOS EN STOCK</p>
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800" key="{item}">  {run(productos)}
 </div>
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
    export default ListaProductos;
    //
    