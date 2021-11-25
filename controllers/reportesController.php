<?php

class ReportesController{

    public function respuestos(){
        // Renderizar vista para crear nuevo cliente
        // echo "View nuevo cliente";
        require_once 'views/contents/reporteMasComprado.php';
    }

    public function ordenes(){
        // Renderizar vista para crear nuevo cliente
        // echo "View nuevo cliente";
        require_once 'views/contents/reporteOrdenes.php';
    }

    public function ventas_mensuales(){
        // Renderizar vista para crear nuevo cliente
        // echo "View nuevo cliente";
        require_once 'views/contents/reporteVentas.php';
    }

    public function agotarse(){
        // Renderizar vista para crear nuevo cliente
        // echo "View nuevo cliente";
        require_once 'views/contents/reporteAgotarse.php';
    }

    public function categoria(){
        // Renderizar vista para crear nuevo cliente
        // echo "View nuevo cliente";
        require_once 'views/contents/reporteVentaCategoria.php';
    }

    public function vehiculo(){
        // Renderizar vista para crear nuevo cliente
        // echo "View nuevo cliente";
        require_once 'views/contents/reporteVehiculoReparado.php';
    }
}