import React from "react";


class ultimoUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            usuarios: {},
            ultimoUsuario:{},
            localidad: {},
            provincia: {}
        }
    }

    componentDidMount = () => {
        //Traigo todos los users
        fetch("https://pintame.herokuapp.com/apis/usuarios")
            .then(response => response.json())
            .then(data => {
            
            let ultimo = data.data.users.pop();
            console.log(ultimo)
                    //Traigo la provincia del ultimo user con el id_provincia de el api call anterior
                fetch("https://pintame.herokuapp.com/apis/usuarios/provincia/"+ultimo.id_provincia)
                .then(response => response.json())
                .then(data2 => {
                let ultimo2 = data2.respuesta.data.provincia;
                console.log(ultimo2)

                //Traigo la localidad del ultimo user con el id_localidad de el api call anterior
                fetch("https://pintame.herokuapp.com/apis/usuarios/localidad/"+ultimo.id_localidad)
                .then(response => response.json())
                .then(data3 => {
                let ultimo3 = data3.respuesta.data.localidad;
                console.log(ultimo3)
                    this.setState({
                        isLoaded: true,
                        usuarios: data.data,
                        ultimoUsuario: ultimo,
                        localidad: ultimo3,
                        provincia: ultimo2
                    })
                
                })           
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
       const { error, isLoaded, productos, ultimoUsuario, localidad, provincia } = this.state;   
     
        return (
            <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Último Usuario Generado</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
						<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "10rem"}} src={"https://pintame.herokuapp.com/uploadsAvatars/"+ultimoUsuario.avatar }  alt="{ultimoUsuario.avatar}"/>
					</div>
                    <div>
                    <p></p>
                    <p><strong><u>Nombre</u> : </strong> {ultimoUsuario.nombre} </p>
                    <p><strong><u>Apellido</u> : </strong> {ultimoUsuario.apellido} </p>
                    <p><strong><u>Localidad</u> : </strong> {localidad.localidad} </p>
                    <p><strong><u>Provincia</u> : </strong> {provincia.provincia} </p>
                    <p><strong><u>Teléfono</u> : </strong> {ultimoUsuario.telefono} </p>
                    <p><strong><u>Email</u> : </strong> {ultimoUsuario.email} </p>
                    
                    <div className= "botondash">
                    <button className= "botonActualizar" onClick={ this.refresh }>Actualizar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
            );

        }    
   

    }
    export default ultimoUsuario;