<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Repuestos por Agotarse</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Reportes</a></li>
                    <li class="breadcrumb-item active">Repuestos por Agotarse</li>
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
            <div class="col-6 col-md-4 col-lg-3 form group">
                <label>Categoría</label>
                <select class="form-control" id="select-categoria">
                    <!-- <option>categoria 1</option> -->
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
                <label for="">Límite</label>
                <select class="form-control" id="date-repuesto-limite">
                    <option value="0">Seleccione una opción</option>
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3" style="margin-top: 32px;">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-primary active">
                        <input type="radio" name="options" id="repuesto-play">
                        <i class="fas fa-play"></i>
                    </label>
                    <label class="btn btn-danger">
                        <input type="radio" name="options" id="repuesto-pdf">
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
                        <h6 style="margin-left: 126px;">REPUESTOS POR AGOTARSE</h6>
                        <!-- <h6 class="pl-5"><span class="text-primary">Top(<b>5</b>)</span></h6> -->
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 text-center">
                        <div class="mt-3">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="text-info">Lista de Repuestos Por Agotarse</h5>
                                    <div class="d-flex justify-content-between">
                                        <small><b>Fecha de Consulta: <span id="fecha-consulta"></span></b> </small>
                                        <small><b>Hora de Consulta: <span id="hora-consulta"></span></b> </small>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body table-responsive p-0">
                                    <div class="div" style="overflow: auto;">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th style="width: 10px">#</th>
                                                    <th>Producto</th>
                                                    <th>Stock</th>
                                                    <th>Stock Mín.</th>
                                                    <th>P.V.</th>
                                                    <th>P.C.</th>
                                                </tr>
                                            </thead>
                                            <tbody id="body-agotarse">
                                                <!--  <tr>
                                                    <td class="pt-25">1</td>
                                                    <td class="pt-25">0225285</td>
                                                    <td class="pt-25">Mavesa</td>
                                                    <td class="pt-25">$200</td>
                                                    <td class="pt-25">12/25/2020</td>  
                                                    <td class="pt-25">
                                                                    <div>
                                                                        <button class="btn btn-primary" onclick="ir_compra_factura(1)">
                                                                            <i class="fas fa-eye"></i>
                                                                        </button>
                                                                    </div>
                                                    </td>
                                                </tr> -->
                                                </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <!-- /.card-body -->
                            </div>
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

<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/reporteAgotarse.js"></script>