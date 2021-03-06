<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Proyecciones de Ventas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Proyecciones</a></li>
                    <li class="breadcrumb-item active">Proyecciones de Ventas</li>
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
            <div class="col-6 col-md-4 col-lg-3">
                <label for="">Período</label>
                <select class="form-control" id="date-periodo-venta">
                    <option value="0">Seleccione una opción</option>
                    <option value="2021">2021</option>
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3" style="margin-top: 32px;">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-primary active">
                        <input type="radio" name="options" id="proy-play">
                        <i class="fas fa-play mr-2"></i>Proyectar
                    </label>
                    <label class="btn btn-danger">
                        <input type="radio" name="options" id="proy-pdf">
                        <i class="far fa-file-pdf"></i>
                    </label>
                </div>
            </div>
            <div id="num-dias" class="col-6 col-md-4 col-lg-2 d-none">
                <label for="">Número de días</label>
                <input type="text" class="form-control numeros-vd" id="proy-dias" maxlength="3">
            </div>
            <div id="calcular-proy" class="col-6 col-md-4 col-lg-3 d-none">
                <div class="btn-group btn-group-toggle" data-toggle="buttons" style="margin-top: 30px;">
                    <label class="btn btn-primary active">
                        <input type="radio" name="options" id="proy-calcular">
                        <i class="fas fa-play mr-2"></i>$ Calcular
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="text-info">Tabla de Datos</h5>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Fecha</th>
                                    <th>Cantidad</th>
                                    <th>Total $</th>
                                </tr>
                            </thead>
                            <tbody id="body-proy-venta">
                                <!-- <tr>
                                    <td>1</td>
                                    <td>2021/2/15</td>
                                    <td>2</td>
                                    <td>25.81</td>
                                </tr> -->
                            </tbody>
                        </table>
                        <input type="hidden" id="const-a">
                        <input type="hidden" id="const-b">
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-danger shadow">
                            <div class="card-header">
                                <h3 class="card-title">Diagrama de Dispersión</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body" style="min-height: 250px;">
                                <div class="w-100" id="box-canva1">
                                    <!--  <canvas id="dispersion-box"
                                        style="min-height: 250px; height: 250px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas> -->
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card card-danger shadow">
                            <div class="card-header">
                                <h3 class="card-title">Proyección</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body" style="min-height: 250px;">
                                <div class="w-100" id="box-canva2">
                                    <!--  <canvas id="dispersion-box"
                                        style="min-height: 250px; height: 250px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas> -->
                                </div>
                            </div>
                            <!-- /.card-body -->
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
<script src="<?=BASE?>views/dist/js/scripts/proyeccionVenta.js"></script>