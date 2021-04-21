import React from "react";


class cantidadDeUsuarios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            usuarios: {}
        }
    }

    componentDidMount = () => {
        fetch("https://pintame.herokuapp.com/apis/usuarios")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    isLoaded: true,
                    usuarios: data.meta
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
        const { error, isLoaded, usuarios } = this.state;
       
        return (
            <div class="col-md-4 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Cantidad de Usuarios</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{usuarios.total}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
            );

        }    
   

    }
    export default cantidadDeUsuarios;