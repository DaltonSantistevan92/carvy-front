<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Factura</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Compra</a></li>
                    <li class="breadcrumb-item">Listar Ventas</li>
                    <li class="breadcrumb-item active">Factura</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row mb-3">
            <div class="col-12">
                <a class="btn btn-danger" href="<?=BASE?>venta/listar">
                    <i class="fas fa-arrow-circle-left mr-2"></i>
                    Regresar</a>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-9 col-lg-8">
                <div class="card card-dark" id="factura-venta">
                    <div class="card-header">
                        Factura
                    </div>

                    <div class="card-body">
                        <div class="factura">
                            <div class="factura-header">
                                <div class="row">
                                    <div class="col-12 col-md-8">
                                        <img src="<?=BASE?>views/dist/img/carvy.jpeg" alt="Logo de carvy" width="260px">
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <div class="text-right">
                                            <h2 class="lead p-4 factura-title">Factura N° <b id="compra_id"></b></h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="factura-header-prov" style="overflow: auto;">
                                    <span>N° de Serie: <b id="compra_numero_serie"></b></span>
                                    <span>Cliente: <b id="compra_proveedor"></b></span>
                                    <span>Fecha de Venta: <b id="compra_fecha"></b></span>
                                </div>
                            </div>

                            <div class="factura-body mt-4" style="overflow: auto;">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>#</td>
                                            <td>Producto</td>
                                            <td>Cantidad</td>
                                            <td>Precio</td>
                                            <td>Total</td>
                                        </tr>
                                    </thead>

                                    <tbody id="body_detalle_venta">
                                        <!-- <tr>
                                            <td>1</td>
                                            <td>Llanta cuadrada</td>
                                            <td>4</td>
                                            <td>10.56</td>
                                            <td>44.56</td>
                                        </tr> -->
                                    </tbody>
                                </table>
                            </div>

                            <div class="row mt-4">

                                <div class="col-6 col-md-3  box-items">
                                    <div class="item-valores">
                                        <b>$ Subototal</b>
                                        <span id="compra_subtotal" class="text-center">0.00</span>
                                    </div>
                                </div>

                                <div class="col-6 col-md-3  box-items">
                                    <div class="item-valores">
                                        <b>$ Iva</b>
                                        <span id="compra_iva" class="text-center">0.00</span>
                                    </div>
                                </div>

                                <div class="col-6 col-md-3 box-items">
                                    <div class="item-valores">
                                        <b>$ Descuento</b>
                                        <span id="compra_descuento" class="text-center">0.00</span>
                                    </div>
                                </div>

                                <div class="col-6 col-md-3  box-items">
                                    <div class="item-valores">
                                        <b>$ Total</b>
                                        <span id="compra_total" class="text-center">0.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main class="mt-3 text-right">
                    <button class="btn btn-danger" id="btn-imprimir">
                        <i class="fas fa-print mr-2"></i>
                        Descargar PDF
                    </button>
                </main>
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/ventaFactura.js"></script>