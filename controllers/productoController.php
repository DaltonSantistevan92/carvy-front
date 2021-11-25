<?php

class ProductoController{

    public function categoria(){
        // Renderizar vista para crear nuevo cliente
        // echo "View nuevo cliente";
        require_once 'views/contents/categoria.php';
    }

    public function nuevo(){
        require_once 'views/contents/nuevoProducto.php';
    }

    public function listar(){
        require_once 'views/contents/listaProducto.php';
    }
}