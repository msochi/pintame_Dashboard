import React from "react";


function Menulateral() {
  return (
  	
<div>

    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

   
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
        <img className="logomarca"  src={"/assets/images/Pintamev2.png"}  alt="" width="60" />
        </div>
        <div className="sidebar-brand-text mx-3">PINTAME ADMIN</div>
    </a> 

  
    <hr className="sidebar-divider my-0"/> 

 
    <li className="nav-item active">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>DASHBOARD</span></a>
    </li>

  
    <hr className="sidebar-divider"  />

 
    <div className="sidebar-heading">ACCIONES</div>

    
    <li className="nav-item">
        <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>PAGINAS</span>
        </a>
    </li>

  
    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>GRAFICOS</span></a>
    </li>

 
    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>TABLAS</span></a>
    </li>


    <hr className="sidebar-divider d-none d-md-block"/>
</ul>

</div>



   
  );
}

export default Menulateral;