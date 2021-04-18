import React from "react";
import ProductosEnStock from "./productosEnStock";
import CantidadDeUsuarios from "./cantidadDeUsuarios";

function Graficosdash () {
 
  
    return (

    <div class="container-fluid">

    {/* Page Heading*/ }
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">REPORTE STANDARD</h1>
    </div>

    {/* Content Row*/}
    <div class="row">

           {/*Amount of Products in DB  - PUEDE ESER UN COMPONENTE*/}
            {/*PRODUCTOS EN STOCK*/}
            <ProductosEnStock/>
       

    {/* $$$ of all products in DB* -PUEDE ESER UN COMPONENTE*/}
       
        {/*Cantidad de usuarios*/}
        <CantidadDeUsuarios/>

       {/* Amount of users in DB  -PUEDE ESER UN COMPONENTE*/}
        <div class="col-md-4 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Familias Relevantes
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">va algo</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Content Row  -PUEDE ESER UN COMPONENTE*/}
    <div class="row">
        {/* Last Product in DB*/}
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Último producto cargado</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
						<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "25rem"}} src="assets/images/product_dummy.svg" alt="dummy"/>
					</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                    <a target="_blank" rel="nofollow" href="/">Categorías</a>
                </div>
            </div>
        </div>

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