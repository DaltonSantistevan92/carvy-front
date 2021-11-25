<?php

class VentaController{

    public function nueva(){
        require_once 'views/contents/nuevaVenta.php';
    }

    public function listar(){
        require_once 'views/contents/listaVenta.php';
    }

    public function factura(){
        require_once 'views/contents/ventaFactura.php';
    }
}