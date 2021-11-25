<?php

class ClienteController{

    public function nuevo(){
        // Renderizar vista para crear nuevo cliente
        // echo "View nuevo cliente";
        require_once 'views/contents/nuevoCliente.php';
    }

    public function listar(){
        require_once 'views/contents/listaCliente.php';
    }

    public function vehiculo(){
        require_once 'views/contents/gestionVehiculo.php';
    }

    public function listar_vehiculo(){
        require_once 'views/contents/listaVehiculo.php';
    }

    public function marca(){
        require_once 'views/contents/gestionMarca.php';
    }
}