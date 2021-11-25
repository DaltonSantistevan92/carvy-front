<?php


class InicioController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function recepcionista(){
        require_once 'views/contents/recepcionista.php';
    }
    
    public function administrador(){
        require_once 'views/contents/administrador.php';
    }

    public function bodega(){
        require_once 'views/contents/viewBodega.php';
    }

    public function mecanico(){
        require_once 'views/contents/viewMecanico.php';
    }

    public function notificaciones(){
        require_once 'views/contents/notificacionDetalle.php';
    }
}