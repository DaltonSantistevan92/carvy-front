<?php

class Orden_TrabajoController{

    public function nueva(){
        // Renderizar vista para crear nuevo cliente
        require_once 'views/contents/nuevaOrden.php';
    }

    public function gestionar(){
        // Renderizar vista para crear nuevo cliente
        require_once 'views/contents/gestionOrden.php';
    }

    public function pendiente(){
        // Renderizar vista para crear nuevo cliente
        require_once 'views/contents/ordenPendiente.php';
    }

    public function procesos(){
        // Renderizar vista para crear nuevo cliente
        require_once 'views/contents/ordenEnProceso.php';
    }

    public function cancelado(){
        // Renderizar vista para crear nuevo cliente
        require_once 'views/contents/ordenCancelado.php';
    }

    public function atentido(){
        // Renderizar vista para crear nuevo cliente
        require_once 'views/contents/ordenAtendido.php';
    }

    public function repuesto(){
        // Renderizar vista para crear nuevo cliente
        require_once 'views/contents/repuestoOrden.php';
    }
}