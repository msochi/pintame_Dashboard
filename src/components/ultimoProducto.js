import React from "react";


class ultimoProducto extends React.Component {

    refresh = () => {
        // re-renders the component
        this.setState({});
      };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            productos: {},
            ultimoProducto:{},
            marca:{}
        }
    }

    componentDidMount = () => {
        fetch("https://pintame.herokuapp.com/apis/productos")
            .then(response => response.json())
            .then(data => {
            
            let ultimo = data.data.products.pop();
            console.log(ultimo.marcas)
             
               //console.log(data.data.products)
              // console.log(array)
                this.setState({
                    isLoaded: true,
                    productos: data.data,
                    ultimoProducto: ultimo,
                    marca: ultimo.marcas                     
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
 
    refresh = () => {
        // re-renders the component
        window.location.reload(false);;
      };
    

    
render(){
    
        console.log("estoy renderizando prod");
       const { error, isLoaded, productos, ultimoProducto, marca } = this.state;   
     
        return (
            <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Último Producto cargado</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
						<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "15rem"}} src={"https://pintame.herokuapp.com/imagen_producto/"+ultimoProducto.imagen_producto }  alt="{ultimoProducto.imagen_producto}"/>
					</div>
                    <div>
                    
                    <p> <strong><u>Sku N° </u> : </strong> {ultimoProducto.sku}</p>
                    <p><strong><u>Marca</u> : </strong> {marca.marca}</p>                   
                    <p><strong><u>Título</u> : </strong>{ultimoProducto.titulo_producto}</p>
                    <p><strong><u>Precio</u> : </strong> $ {ultimoProducto.precio}</p>
                    <p><strong><u>Costo</u> : </strong> $ {ultimoProducto.costo}</p>
                    <div className= "botondash">
                    <button className= "botonActualizar" onClick={ this.refresh } >Actualizar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
            );

        }    
   

    }
    export default ultimoProducto;