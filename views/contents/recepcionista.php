<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Recepcionista</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Recepcionista</li>
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
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-info">
                    <div class="inner">
                        <h3 id="conta_cliente">0</h3>

                        <p>Clientes</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <a href="<?=BASE?>cliente/listar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-danger">
                    <div class="inner">
                        <h3 id="orden_pendiente_re">0<sup style="font-size: 20px"></sup></h3>

                        <p>Ordenes Pendientes</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-toggle-off"></i>
                    </div>
                    <a href="<?=BASE?>orden_trabajo/gestionar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3 id="orden_proceso_re">0</h3>

                        <p>Ordenes En Proceso</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <a href="<?=BASE?>orden_trabajo/gestionar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-success">
                    <div class="inner">
                        <h3 id="orden_atendida_re">0</h3>

                        <p id="mes_compra">Ordenes Atendidas</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-toggle-on"></i>
                    </div>
                    <a href="<?=BASE?>orden_trabajo/gestionar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-6">
                <div class="card shadow">
                    <div class="card-header bg-danger">
                        <h3 class="card-title">Gráfica de Ordenes <span id="mes_orden"></span></h3>
                    </div>
                    <div class="card-body">
                        <canvas id="grafica1"
                            style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header bg-danger">
                        <h3 class="card-title">Ordenes Recientes</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0" style="height: 290px; overflow: auto;">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Orden</th>
                                    <th>Estado</th>
                                    <th>Progress</th>
                                    <th style="width: 40px">%</th>
                                    <th>Ver Detalle</th>
                                </tr>
                            </thead>
                            <tbody id="body-progreso">
                                <!--    <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar progress-bar-danger" style="width: 10%"></div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-danger">10%</span></td>
                                </tr> -->
                            </tbody>
                        </table>
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

<!-- Modales -->
<div class="modal fade" id="modal_actividad">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Actividad</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Listado de Actividades</h3>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Actividad</th>
                                                <th>Progreso %</th>
                                                <th>Faltante %</th>
                                            </tr>
                                        </thead>
                                        <tbody id="body-actividades">
                                            <!-- <tr>
                                                            <td>1</td>
                                                            <td>John Doe</td>
                                                            <td>10</td>
                                                            <td>80</td>
                                                        </tr> -->
                                        </tbody>
                                    </table>
                                </div>
                                <!-- /.card-body -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>


<script src="<?=BASE?>views/plugins/chart.js/Chart.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/recepcionista.js"></script>