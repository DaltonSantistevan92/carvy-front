<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Mecánico</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li class="breadcrumb-item active">Mecánico</li>
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
            <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-box bg-danger">
                    <div class="inner">
                        <h3 id="orden_pendiente">0</h3>

                        <p>Ordenes Pendientes</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-toggle-off"></i>
                    </div>
                    <a href="<?=BASE?>orden_trabajo/pendiente" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3 id="orden_proceso">0<sup style="font-size: 20px"></sup></h3>

                        <p>Ordenes En Proceso</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <a href="<?=BASE?>orden_trabajo/procesos" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-4 col-6">
                <!-- small box -->
                <div class="small-box bg-success">
                    <div class="inner">
                        <h3 id="orden_atendida">0</h3>

                        <p id="mes_compra">Ordenes Atendidas</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-toggle-on"></i>
                    </div>
                    <a href="<?=BASE?>orden_trabajo/atentido" class="small-box-footer">Ver Más <i
                            class="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <!-- ./col -->
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <h3>Vista Rápida</h3>
            </div>
        </div>
        <div class="row mt-2" id="vista_rapida">
           <!--  <div class="col-12 col-md-4">
                <div class="card card-danger shadow">
                    <div class="card-header d-flex">
                        Orden :
                        <b class="ml-3">4</b>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                <label>
                                    <i class="fas fa-key mr-2"></i>
                                    <span>Código</span></label>
                                <span> 484848</span>
                            </div>
                            <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                <label >
                                    <i class="fas fa-car mr-2"></i>
                                    <span>Placa</span></label>
                                <span> CVX-123</span>
                            </div>
                            <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                <label>
                                    <i class="fas fa-calendar-day mr-2"></i>
                                    <span>Fecha</span></label>
                                <span> 22/6/2021</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button class="btn btn-success" onclick="cambiar_estado(1,2)"><i class="fas fa-check"></i></button>
                                <a class="btn btn-primary" href="<?=BASE?>orden_trabajo/pendiente"><i class="fas fa-info-circle"></i></a>
                                <button class="btn btn-danger" onclick="cambiar_estado(1,2)"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script src="<?=BASE?>views/dist/js/scripts/mecanicodashboard.js"></script> 
