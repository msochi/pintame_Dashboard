import React from "react";


function Menusuperior() {
  return (

    
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <div className="encabezadoDash">
        <p>DASBHARD</p>
        </div>
    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
    </button>

    <ul className="navbar-nav ml-auto">

       
  

        <div className="topbar-divider d-none d-sm-block"></div>

        
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Jerónimo Sola</span>
                <button className= "vueltaConsola"><a className="consola" href="https://pintame.herokuapp.com/admin/consolaadmin">Volver a Consola</a></button>
            </a>
        </li>

    </ul>

</nav>
  





   
  );
}

export default Menusuperior;