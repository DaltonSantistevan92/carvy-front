<!-- Content Header (Page header) --> 
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Repuestos más Vendidos</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Reportes</a></li>
                    <li class="breadcrumb-item active">Repuestos más Vendidos</li>
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
            <div class="col-6 col-md-4 col-lg-3 form-group">
                <label for="">Desde</label>
                <input type="date" class="form-control" id="date-compra-inicio">
            </div>
            <div class="col-6 col-md-4 col-lg-3 form-group">
                <label for="">Hasta</label>
                <input type="date" class="form-control" id="date-compra-fin">
            </div>
            <div class="col-6 col-md-4 col-lg-3">
                <label for="">Top</label>
                <select class="form-control" id="date-compra-top">
                    <option value="0">Seleccione una opción</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3" style="margin-top: 32px;">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-primary active">
                        <input type="radio" name="options" id="compra-play">
                        <i class="fas fa-play"></i>
                    </label>
                    <label class="btn btn-danger">
                        <input type="radio" name="options" id="compra-pdf">
                        <i class="far fa-file-pdf"></i>
                    </label>
                </div>
            </div>
        </div>
        <div id="tabla-reporte" class="row bg-white d-none">
            <div class="col-12 mt-3">
                <div class="row">
                    <div class="col-6 col-md-4 col-lg-3">
                        <img src="<?=BASE?>views/dist/img/carvy.jpeg" alt="Logo de carvy" width="260px">
                    </div>
                    <div class="col-6 col-md-8 col-lg-9 " style="padding-left: 125px">
                        <h3><b>CARVY SOLUCIONES AUTOMOTRICES</b></h3>
                        <h6 style="margin-left: 126px;">REPUESTOS MÁS VENDIDOS</h6>
                        <h6 class="text-danger" style="margin-left: 98px;">DESDE: <span
                                class="text-dark" id="inicio-reporte">2021/01/10</span> - HASTA: <span id="fin-reporte" class="text-dark">2021/05/15</span>
                        </h6>
                        <!-- <h6 class="pl-5"><span class="text-primary">Top(<b>5</b>)</span></h6> -->
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 text-center">
                        <div class="mt-3">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="text-info">Lista de Repuestos Más Vendidos</h5>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Producto</th>
                                                <th>Cantidad</th>
                                                <th>P.V.</th>
                                                <th>Total $</th>
                                            </tr>
                                        </thead>
                                        <tbody id="body-mas-comprado">
                                            <!-- <tr>
                                                <td>1</td>
                                                <td>Ruliman</td>
                                                <td>10</td>
                                                <td>$20</td>
                                                <td>$200.50</td>
                                            </tr> -->
                                        </tbody>
                                    </table>
                                </div>
                                <!-- /.card-body -->
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-right mb-2">
                        <h4>Total General: $<span id="totalg"></span> </h4>
                    </div>
                    <div class="col-12 col-md-6">
                    <h3 class="card-title"> <b>Cantidad de Productos Más Vendidos</b> </h3>
                        <div class="w-100" id="box-canva1">
                            
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                    <h3 class="card-title"> <b>Porcentaje de Productos Más Vendidos</b> </h3>
                        <div class="w-100" id="box-canva2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script src="<?=BASE?>views/plugins/chart.js/Chart.min.js"></script>
<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/repuestoMasComprado.js"></script>