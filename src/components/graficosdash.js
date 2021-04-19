import React from "react";
import ProductosEnStock from "./productosEnStock";
import CantidadDeUsuarios from "./cantidadDeUsuarios";
import TipoDeStock from "./tipoDeProductosStock";
import UltimoProducto from "./ultimoProducto";
import UltimoUsuario from "./ultimoUsuario";


function Graficosdash () {
 
  
    return (

    <div class="container-fluid">

    {/* Page Heading*/ }
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">REPORTE STANDARD</h1>
    </div>

    {/* Content Row*/}
    <div class="row">          
            {/*COMPONENTE PRODUCTOS EN STOCK*/}
            <ProductosEnStock/>         
       
        {/*COMPONENTE Cantidad de usuarios*/}
        <CantidadDeUsuarios/>
      
        {/*COMPONENTE Tipo de Productos en Stock*/}
        <TipoDeStock/>
    </div>
     
    <div class="row">
           {/*COMPONENTE ULTIMO USUARIO CARGADO*/}
           <UltimoProducto/>
            {/*COMPONENTE ULTIMO USUARIO CARGADO*/}
            <UltimoUsuario/>
      

        {/* Categories in DB  -PUEDE ESER UN COMPONENTE*/}
        <div class="col-lg-6 mb-4">						
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Categorias</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Category 01
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Category 02
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Category 03
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Category 04
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Category 05
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Category 06
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   
  );
}


export default Graficosdash;