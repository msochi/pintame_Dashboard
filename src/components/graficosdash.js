import React from "react";
import ProductosEnStock from "./productosEnStock";
import CantidadDeUsuarios from "./cantidadDeUsuarios";
import TipoDeStock from "./tipoDeProductosStock";
import UltimoProducto from "./ultimoProducto";
import UltimoUsuario from "./ultimoUsuario";
import CategoriasProducto from "./categoriasProductos";
import ListaProductos from "./listaProductos";

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
      
          {/*COMPONENTE ULTIMO USUARIO CARGADO*/}
          <CategoriasProducto/>
        {/* Categories in DB  -PUEDE ESER UN COMPONENTE*/}
       
    </div>
    <div>
        <ListaProductos />
        </div>    



</div>
   
  );
}


export default Graficosdash;