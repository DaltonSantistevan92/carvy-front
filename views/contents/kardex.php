<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Kardex General</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Kardex</a></li>
                    <li class="breadcrumb-item active">Ver Kardex</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-3 form group">
                <label>Categoría</label>
                <select class="form-control" id="select-categoria">
                    <!-- <option>categoria 1</option> -->
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3 form group">
                <label>Producto</label>
                <select class="form-control" id="select-productos">
                    <option>Seleccione un Producto</option>
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3 form group">
                <label>Desde</label>
                <input type="date" class="form-control" id="date-kardex-inicio">
                <!-- <select class="form-control" id="select-anio">
                </select> -->
            </div>
            <div class="col-6 col-md-4 col-lg-3 form group">
                <label>Hasta</label>
                <input type="date" class="form-control" id="date-kardex-fin">
                <!-- <select class="form-control" id="select-mes">
                </select> -->
            </div>
            <div class="col-12 mt-2">
                <button class="btn btn-danger" id="btn-consultar"><i class="fas fa-play mr-2"></i>Consultar</button>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <div class="card">
                    <div class="div" style="overflow: auto;">
                        <table id="tabla-inventario" class="table table-bordered table-striped table-hover d-none">
                            <thead>
                                <tr>
                                    <th rowspan="2">N°</th>
                                    <th rowspan="2">Fecha</th>
                                    <th rowspan="2">Movimiento</th>
                                    <th colspan="3" class="text-center">Entradas</th>
                                    <th colspan="3" class="text-center">Salidas</th>
                                    <th colspan="3" class="text-center">Disponibles</th>
                                </tr>
                                <tr>
                                    <th>Cant.</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                    <th>Cant.</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                    <th>Cant.</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr>
                                    <td class="pt-25">1</td>
                                    <td class="pt-25">12/5/2021</td>
                                    <td class="pt-25">Entrada</td>
                                    <td class="pt-25">1</td>
                                    <td class="pt-25">12.85</td>
                                    <td class="pt-25">20.58</td>
                                    <td class="pt-25">1</td>
                                    <td class="pt-25">12.85</td>
                                    <td class="pt-25">20.58</td>
                                    <td class="pt-25">1</td>
                                    <td class="pt-25">12.85</td>
                                    <td class="pt-25">20.58</td>                                
                                </tr> -->
                                </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card card-success">
                    <div class="card-header">
                        <h3 class="card-title">Entradas</h3>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                    <i class="fas fa-dice-one mr-2"></i>Cantidad
                                </span>
                                <span id="entrada-cantidad">
                                    0
                                </span>
                            </div>
                            <span class="hr hr-success"></span>
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                <i class="fas fa-dollar-sign mr-2"></i>Precio
                                </span>
                                <span id="entrada-precio">
                                    0
                                </span>
                            </div>
                            <span class="hr hr-success"></span>
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                    <i class="fas fa-dollar-sign mr-2"></i>Total
                                </span>
                                <span id="entrada-total">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card card-danger">
                    <div class="card-header">
                        <h3 class="card-title">Salidas</h3>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                    <i class="fas fa-dice-one mr-2"></i>Cantidad
                                </span>
                                <span id="salida-cantidad">
                                    0
                                </span>
                            </div>
                            <span class="hr hr-danger"></span>
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                    <i class="fas fa-dollar-sign mr-2"></i>Precio
                                </span>
                                <span id="salida-precio">
                                    0
                                </span>
                            </div>
                            <span class="hr hr-danger"></span>
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                    <i class="fas fa-dollar-sign mr-2"></i>Total
                                </span>
                                <span id="salida-total">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Disponibles</h3>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                    <i class="fas fa-dice-one mr-2"></i>Cantidad
                                </span>
                                <span id="disponibles-cantidad">
                                    0
                                </span>
                            </div>
                            <span class="hr hr-primary"></span>
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                    <i class="fas fa-dollar-sign mr-2"></i>Precio
                                </span>
                                <span id="disponibles-precio">
                                    0
                                </span>
                            </div>
                            <span class="hr hr-primary"></span>
                            <div class="col-12 d-flex justify-content-between">
                                <span>
                                    <i class="fas fa-dollar-sign mr-2"></i>Total
                                </span>
                                <span id="disponibles-total">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/vfs_fonts.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>

<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/kardex.js"></script>