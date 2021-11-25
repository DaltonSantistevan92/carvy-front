<?php

class GestionController{

    public function listar(){
        require_once 'views/contents/listar.php';
    }

    public function rol(){
        require_once 'views/contents/rol.php';
    }

    public function nuevo(){
        require_once 'views/contents/nuevoUsuario.php';
    }

    public function permisos(){
        require_once 'views/contents/gestionPermiso.php';
    }
}