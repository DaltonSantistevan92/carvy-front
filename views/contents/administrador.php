<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Administrador</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
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
                        <h3 id="conta_proveedor">0</h3>

                        <p>Proveedores</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-truck-moving"></i>
                    </div>
                    <a href="<?=BASE?>proveedor/listar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-success">
                    <div class="inner">
                        <h3 id="conta_categoria">0<sup style="font-size: 20px"></sup></h3>

                        <p>Categorías</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-tags"></i>
                    </div>
                    <a href="<?=BASE?>producto/categoria" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3 id="conta_producto" style="color: white;">0</h3>

                        <p style="color: white;">Productos</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-box-open"></i>
                    </div>
                    <a href="<?=BASE?>producto/listar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-danger">
                    <div class="inner">
                        <h3 id="total_compra">$ 0</h3>

                        <p id="mes_compra">Compras (Mensual)</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <a href="<?=BASE?>compra/listar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-orange">
                    <div class="inner">
                        <h3 id="conta_usuario" style="color: white;">0</h3>

                        <p>Usuarios</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <a href="<?=BASE?>gestion/listar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-navy">
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
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-primary">
                    <div class="inner">
                        <h3 id="conta_vehiculo">0</h3>

                        <p>Vehículos</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-car-alt"></i>
                    </div>
                    <a href="<?=BASE?>cliente/listar_vehiculo" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-lime">
                    <div class="inner">
                        <h3 id="total_venta" style="color: white;">$ 0</h3>

                        <p id="mes_venta" style="color: white;">Ventas (Mensual)</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <a href="<?=BASE?>venta/listar" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card card-danger shadow">
                    <div class="card-header">
                        <h3 class="card-title">Stock de Productos por Categoría</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="stock-productos"></div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card card-danger shadow">
                    <div class="card-header">
                        <h3 class="card-title">Cantidad de Productos Por Categoría</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body" style="min-height: 382px;">
                        <canvas id="categoria_productos"
                            style="min-height: 250px; height: 250px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card card-danger shadow">
                    <div class="card-header">
                        <h3 class="card-title">Reporte de Compra y Venta Anual</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="compras-reporte"></div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header bg-danger">
                        <h3 class="card-title">Ordenes Recientes</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0" style="height: 385px; overflow: auto;">
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
    </div>
    <!-- /.container-fluid -->
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


<script src="<?=BASE?>views/plugins/morris/raphael-min.js"></script>
<script src="<?=BASE?>views/plugins/morris/morris.min.js"></script>
<script src="<?=BASE?>views/plugins/chart.js/Chart.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/admindashboard.js"></script>