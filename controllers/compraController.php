<?php

class CompraController{

    public function nueva(){
        require_once 'views/contents/nuevaCompra.php';
    }

    public function listar(){
        require_once 'views/contents/listaCompra.php';
    }

    public function factura(){
        require_once 'views/contents/compraFactura.php';
    }
}