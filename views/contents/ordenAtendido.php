<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Ordenes Atendidas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Ordenes de Trabajo</a></li>
                    <li class="breadcrumb-item active">Ordenes Atendidas</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
    <div class="row" id="orden-proceso-detalle">
            <!-- <div class="col-12 col-md-6 col-lg-4">
                <div class="card card-success shadow">
                    <div class="card-header d-flex">
                        Orden :
                        <b class="ml-3" id="orden-proceso-id">4</b>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <small class="ml-2 text-danger title-orden-card">Datos de la Orden</small>
                            <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                <label>
                                    <i class="fas fa-key mr-2"></i>
                                    <span>Código</span></label>
                                <span> 484848</span>
                            </div>
                            <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                <label>
                                    <i class="fas fa-calendar-day mr-2"></i>
                                    <span>Creado</span></label>
                                <span> 15/06/2021</span>
                            </div>

                            <small class="ml-2 text-danger title-orden-card">Trabajo</small>
                            <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                <label>
                                    <i class="fas fa-car mr-2"></i>
                                    <span>Placa</span></label>
                                <span> CVX-123</span>
                            </div>
                            <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                <label>
                                    <i class="fas fa-clock mr-2"></i>
                                    <span>Inicio</span></label>
                                <span> 28/2/2021 12:00:00</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 btn-group-sm text-center">
                                <button class="btn btn-primary w-100 mt-2" data-toggle="modal" data-target="#orden_detalle"
                                    data-backdrop="static" data-keyboard="false"><i
                                        class="fas fa-eye mr-2"></i>Detalle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!-- Modales -->
<div class="modal fade " id="orden_detalle">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Detalle de la Orden</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <section class="orden-trabajo" id="modal-body-orden">
                        <div class="row d-flex align-items-center sin-margin-y">
                            <div class="col-12 col-sm-6 text-start pl-2 d-flex justify-content-center">
                                <div class="ml-4">
                                    <img src="<?=BASE?>views/dist/img/carvy.jpeg" alt="Logo de carvy" width="200px">
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="row">
                                    <div class="col-12">
                                        <p class="text-primary mb-0 text-center">
                                            <b>Dirección: Ruta del Spondylus, Parroquia</b>
                                        </p>
                                        <p class="text-primary text-center" style="margin-bottom: 5px">
                                            <b>Colonche - Palmar</b>
                                        </p>
                                    </div>

                                    <div class="col-12">
                                        <p class="text-primary text-center" style="margin-bottom: 5px">
                                            <b>
                                                Teléfono: 0983294110
                                            </b>
                                        </p>
                                    </div>

                                    <div class="col-12">
                                        <p class="text-primary text-center" style="margin-bottom: 5px">
                                            <b>
                                                Santa Elena - Ecuador
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex border-top sin-margin-y">
                            <div class="col-6 sin-padding-y border-rigth">
                                <div class="row">
                                    <div class="col-12"><span class="title-orden">Datos del vehiculo</span></div>
                                </div>

                                <div class="row">
                                    <div class="col-12 pl-3 pr-3">
                                        <span class="text-primary d-flex justify-content-between">
                                            <b>Placa: </b> <b id="proceso-placa-orden"></b>
                                        </span>
                                    </div>

                                    <div class="col-12 pl-3 pr-3">
                                        <span class="text-primary d-flex justify-content-between">
                                            <b>Marca: </b> <b id="proceso-marca-orden"></b>
                                        </span>
                                    </div>

                                    <div class="col-12 pl-3 pr-3">
                                        <span class="text-primary d-flex justify-content-between">
                                            <b>Modelo: </b> <b id="proceso-modelo-orden"></b>
                                        </span>
                                    </div>

                                    <div class="col-12 pl-3 pr-3">
                                        <span class="text-primary d-flex justify-content-between">
                                            <b>Color: </b> <b id="proceso-color-orden"></b>
                                        </span>

                                        
                                    </div>

                                    <div class="col-12 pl-3 pr-3">
                                        <span class="text-primary d-flex justify-content-between">
                                            <b>Kilometro: </b> <b id="proceso-kilometro-orden"></b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-12 sin-padding-y">
                                        <div class="row">
                                            <div class="col-12"><span class="title-orden">Orden de trabajo</span></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-12 col-lg-6 pl-3 pr-3">
                                                <span class="text-primary d-flex">
                                                    <b class="mr-2">Fecha: </b> <b id="proceso-fecha-orden"></b>
                                                </span>
                                            </div>

                                            <div class="col-12 col-lg-6 pl-3">
                                                <span class="text-primary d-flex">
                                                    <b class="mr-2">N°: </b> <b id="proceso-id-orden"></b>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-2">
                                    <div class="col-12 sin-padding-y">
                                        <div class="row">
                                            <div class="col-12"><span class="title-orden">Datos del cliente</span></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-12 pl-3 pr-3">
                                                <span class="text-primary d-flex justify-content-between">
                                                    <b>Cédula: </b> <b id="proceso-cedula-cliente-orden"></b>
                                                </span>
                                            </div>

                                            <div class="col-12 pl-3 pr-3">
                                                <span class="text-primary d-flex justify-content-between">
                                                    <b>Nombre: </b> <b id="proceso-nombre-cliente-orden"></b>
                                                </span>
                                            </div>

                                            <div class="col-12 pl-3 pr-3">
                                                <span class="text-primary d-flex justify-content-between">
                                                    <b>Telefono: </b> <b id="proceso-telefono-cliente-orden"></b>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row sin-margin-y border-top">
                            <div class="col-12 sin-padding-y">
                                <div class="row">
                                    <div class="col-12"><span class="title-orden">Averias y Fallas</span></div>
                                </div>
                            </div>

                            <div class="col-12 sin-padding-y border box-items-averias" id="proceso-averias-orden">
                               <!-- <p class="sin-margin-x"> <i class="fas fa-check-circle fa-sm mr-2"></i> Cambio de aceite</p> -->
                       <!--         <p class="sin-margin-x"> <i class="fas fa-check-circle fa-sm mr-2"></i>Cambio de llantas</p>
                               <p class="sin-margin-x"> <i class="fas fa-check-circle fa-sm mr-2"></i>Cambio de motor</p>
                               <p class="sin-margin-x"> <i class="fas fa-check-circle fa-sm mr-2"></i>Reparacion de bugías</p>
                               <p class="sin-margin-x"> <i class="fas fa-check-circle fa-sm mr-2"></i>Reparacion de amortiguador</p>
                               <p class="sin-margin-x"> <i class="fas fa-check-circle fa-sm mr-2"></i>Reparacion de frenos</p> -->
                            </div>
                        </div>

                        <div class="row border-top sin-margin-y">
                            <div class="col-12 sin-padding-y">
                                <div class="row">
                                    <div class="col-12"><span class="title-orden">Concepto de material y mano de Obra</span></div>
                                </div>

                                <div class="row d-flex flex-column sin-margin-y" id="material_orden">
                                   <!--  <div class="col-12 pl-2">
                                        <p class="sin-margin-x">Llanta Fx12</p>
                                    </div>
                                    <div class="col-12 pl-2 border-top">
                                        <p class="sin-margin-x">Llanta Fx12</p>
                                    </div>
                                    <div class="col-12 pl-2 border-top">
                                        <p class="sin-margin-x">Llanta Fx12</p>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                        <div class="row  border-top sin-margin-y">
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-6 sin-padding-y"><span class="title-orden">Monto: </span></div>
                                    <div class="col-6 sin-padding-y">$<span id="monto_orden"></span></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-6 sin-padding-y"><span class="title-orden">Suma: </span></div>
                                    <div class="col-6 sin-padding-y">$<span id="proceso-suma-orden"></span></div>
                                </div>
                            </div>
                        </div>

                        <div class="row border-top sin-margin-y">
                            <div class="col-12">
                                <span class="text-primary"><b>Operario: </b></span>
                                <span class="text-dark" id="proceso-operario-orden"></span>
                            </div>
                        </div>
                    </section>

                    <main class="mt-3">
                        <button class="btn btn-primary" id="btn-imprimir">
                            <i class="fas fa-print mr-2"></i>
                            Descargar PDF
                        </button>
                    </main>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/ordenAtendido.js"></script>