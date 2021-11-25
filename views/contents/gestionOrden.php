<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Gestionar Orden</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Orden de Trabajo</a></li>
                    <li class="breadcrumb-item active">Gestionar Orden</li>
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
                <a class="btn btn-primary" href="<?=BASE?>orden_trabajo/nueva">
                    <i class="fas fa-plus mr-2"></i>
                    Agregar Orden</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex p-0">
                        <h3 class="card-title p-3">Ordenes</h3>
                        <ul class="nav nav-pills ml-auto p-2">
                            <li class="nav-item"><a class="nav-link active" href="#tab_1"
                                    data-toggle="tab">Pendientes</a></li>
                            <li class="nav-item"><a class="nav-link" href="#tab_2" data-toggle="tab">Proceso</a></li>
                            <li class="nav-item"><a class="nav-link" href="#tab_3" data-toggle="tab">Atendidos</a></li>

                        </ul>
                    </div><!-- /.card-header -->
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tab_1"> 
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div class="form-group">
                                            <select id="orden-filtrar-pendiente" class="form-control">
                                                <option value="1">Hoy</option>
                                                <option value="2">Ayer</option>
                                                <option value="3">últimos 5 días</option>
                                                <option value="4">última semana</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 col-md-5">
                                        <div class="card card-dark shadow">
                                            <div class="card-header">
                                                <h3 class="card-title">Lista de órdenes Pendientes</h3>
                                            </div>

                                            <!-- /.card-header -->
                                            <div class="card-body">

                                                <div class="box-acordeon">
                                                    <div id="accordion">
                                                        <!-- <div class="card card-danger">
                                                            <div class="card-header">
                                                                <h4 class="card-title w-100">
                                                                    <a class="d-block w-100" data-toggle="collapse"
                                                                        href="#collapse1">
                                                                        Código de orden: 123123
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapse1" class="collapse show"
                                                                data-parent="#accordion">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-user mr-2"></i>
                                                                                <span>Cliente</span></label>
                                                                            <strong> Miguel Solís</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-car-side mr-2"></i>
                                                                                Vehículo</label>
                                                                            <strong>XYZ - 123</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-user-cog mr-2"></i>
                                                                                Mecánico</label>
                                                                            <strong>Gabriel Hidalgo</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <span>
                                                                                <small>Creado: </small>
                                                                                <small>21/12/2021</small>
                                                                                <small>12:12:00</small>
                                                                            </span>

                                                                            <span>
                                                                                <small class="text-primary">
                                                                                    <a>Ver más</a>
                                                                                </small>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> -->
                                                    </div>
                                                </div>

                                            </div>
                                            <!-- /.card-body -->
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-7">
                                        <div class="card card-dark shadow container-box-orden"
                                            style="min-height: 386px;">
                                            <div class="card-header">
                                                <h3 class="card-title">Visualizar Orden</h3>
                                            </div>
                                            <div class="card-body">
                                                <div id="orden-default-pendiente" class="box-default">
                                                    <div class="img-carvy"></div>
                                                    <span>
                                                        No hay orden seleccionada
                                                    </span>
                                                </div>

                                                <div id="orden-pendiente" class="box-orden d-none">
                                                    <div class="orden-general d-flex flex-column">

                                                        <div class="datos-primarios">
                                                            <div class="datos-vehiculos">
                                                                <strong class="title-orden">Datos del Vehículo</strong>
                                                                <span><strong>Marca: </strong><span id="orden_marca_vehiculo"></span> </span>
                                                                <span><strong>Modelo: </strong><span id="orden_modelo_vehiculo"></span>
                                                                </span>
                                                                <span><strong>Placa: </strong><span id="orden_placa_vehiculo"></span>
                                                                </span>
                                                                <span><strong>color: </strong><span id="orden_color_vehiculo"></span>
                                                                </span>
                                                                <span><strong>Kilometraje: </strong><span id="orden_kilometro_vehiculo"></span>
                                                                </span>
                                                            </div>

                                                            <div class="datos-orden">
                                                                <strong class="title-orden">Orden de trabajo</strong>
                                                                <div>
                                                                    <span><strong>Fecha:
                                                                        </strong><span id="orden_fecha"></span> </span>
                                                                    <span><strong>N°: </strong><span id="orden_id"> </span> </span>
                                                                </div>

                                                                <div class="mt-2 cliente">
                                                                    <strong class="title-orden">Datos del Cliente</strong>

                                                                    <div class="datos-cliente">
                                                                        <span><strong>Cédula: </strong><span id="orden_cedula_cliente"></span></span>
                                                                        <span><strong>Nombres: </strong><span id="orden_nombres_cliente"></span></span>
                                                                        <span><strong>Telefono: </strong><span id="orden_telefono_cliente"></span></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="datos-averias">
                                                            <strong class="title-averias">Averias Y Fallas</strong>
                                                        </div>

                                                        <div class="items-averias">
                                                            <ul class="" id="orden-averias">
                                                                <!-- <li>hola</li> -->
                                                            </ul>
                                                        </div>

                                                        <div class="datos-averias">
                                                            <strong class="title-averias">Operario</strong>
                                                        </div>

                                                        <div class="item-operario">
                                                            <strong class="pl-2" id="orden_nombres_operario">Diego Maldonado</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.tab-pane -->
                            <div class="tab-pane" id="tab_2">
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div class="form-group">
                                            <select id="orden-filtrar-proceso" class="form-control">
                                                <option value="1">Hoy</option>
                                                <option value="2">Ayer</option>
                                                <option value="3">últimos 5 días</option>
                                                <option value="4">última semana</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-5">
                                        <div class="card card-dark shadow">
                                            <div class="card-header">
                                                <h3 class="card-title">Lista de órdenes En Proceso</h3>
                                            </div>

                                            <!-- /.card-header -->
                                            <div class="card-body">

                                                <div class="box-acordeon">
                                                    <div id="accordion2">
                                                      <!--   <div class="card card-warning">
                                                            <div class="card-header">
                                                                <h4 class="card-title w-100">
                                                                    <a class="d-block w-100" data-toggle="collapse"
                                                                        href="#collapse1">
                                                                        Código de orden: 123123
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapse1" class="collapse show"
                                                                data-parent="#accordion2">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-user mr-2"></i>
                                                                                <span>Cliente</span></label>
                                                                            <strong> Miguel Solís</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-car-side mr-2"></i>
                                                                                Vehículo</label>
                                                                            <strong>XYZ - 123</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-user-cog mr-2"></i>
                                                                                Mecánico</label>
                                                                            <strong>Gabriel Hidalgo</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <span>
                                                                                <small>Creado: </small>
                                                                                <small>21/12/2021</small>
                                                                                <small>12:12:00</small>
                                                                            </span>

                                                                            <span>
                                                                                <small class="text-primary">
                                                                                    <a>Ver más</a>
                                                                                </small>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> -->
                                                    </div>
                                                </div>

                                            </div>
                                            <!-- /.card-body -->
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-7">
                                        <div class="card card-dark shadow container-box-orden"
                                            style="min-height: 386px;">
                                            <div class="card-header">
                                                <h3 class="card-title">Visualizar Orden</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="box-default" id="orden-default-proceso">
                                                    <div class="img-carvy"></div>
                                                    <span>
                                                        No hay orden seleccionada
                                                    </span>
                                                </div>

                                                <div id="orden-proceso" class="box-orden d-none">
                                                    <div class="orden-general d-flex flex-column">

                                                        <div class="datos-primarios">
                                                            <div class="datos-vehiculos">
                                                                <strong class="title-orden">Datos del Vehículo</strong>
                                                                <span><strong>Marca: </strong><span id="orden_marca_vehiculo_pro"></span> </span>
                                                                <span><strong>Modelo: </strong><span id="orden_modelo_vehiculo_pro"></span>
                                                                </span>
                                                                <span><strong>Placa: </strong><span id="orden_placa_vehiculo_pro"></span>
                                                                </span>
                                                                <span><strong>color: </strong><span id="orden_color_vehiculo_pro"></span>
                                                                </span>
                                                                <span><strong>Kilometraje: </strong><span id="orden_kilometro_vehiculo_pro"></span>
                                                                </span>
                                                            </div>

                                                            <div class="datos-orden">
                                                                <strong class="title-orden">Orden de trabajo</strong>
                                                                <div>
                                                                    <span><strong>Fecha:
                                                                        </strong><span id="orden_fecha_pro"></span> </span>
                                                                    <span><strong>N°: </strong><span id="orden_id_pro"></span> </span>
                                                                </div>

                                                                <div class="mt-2 cliente">
                                                                    <strong class="title-orden">Datos del
                                                                        cliente</strong>

                                                                    <div class="datos-cliente">
                                                                        <span><strong>Cedula: </strong><span id="orden_cedula_cliente_pro"></span></span>
                                                                        <span><strong>Nombres: </strong><span id="orden_nombres_cliente_pro"></span> </span>
                                                                        <span><strong>Telefono: </strong><span id="orden_telefono_cliente_pro"></span> </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="datos-averias">
                                                            <strong class="title-averias">Averias Y Fallas</strong>
                                                        </div>

                                                        <div class="items-averias">
                                                            <ul class="" id="orden-averias_pro">
                                                                <!-- <li>hola</li> -->
                                                            </ul>
                                                        </div>

                                                        <div class="datos-averias">
                                                            <strong class="title-averias">Operario</strong>
                                                        </div>

                                                        <div class="item-operario">
                                                            <strong class="pl-2" id="orden_nombres_operario_pro"></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.tab-pane -->
                            <div class="tab-pane" id="tab_3">
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div class="form-group">
                                            <select id="orden-filtrar-atendida" class="form-control">
                                                <option value="1">Hoy</option>
                                                <option value="2">Ayer</option>
                                                <option value="3">últimos 5 días</option>
                                                <option value="4">última semana</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-5">
                                        <div class="card card-dark shadow">
                                            <div class="card-header">
                                                <h3 class="card-title">Lista de órdenes Atendidos</h3>
                                            </div>

                                            <!-- /.card-header -->
                                            <div class="card-body">

                                                <div class="box-acordeon">
                                                    <div id="accordion3">
                                                        <!-- <div class="card card-success">
                                                            <div class="card-header">
                                                                <h4 class="card-title w-100">
                                                                    <a class="d-block w-100" data-toggle="collapse"
                                                                        href="#collapse1">
                                                                        Código de orden: 123123
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapse1" class="collapse show"
                                                                data-parent="#accordion3">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-user mr-2"></i>
                                                                                <span>Cliente</span></label>
                                                                            <strong> Miguel Solís</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-car-side mr-2"></i>
                                                                                Vehículo</label>
                                                                            <strong>XYZ - 123</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <label class="text-primary">
                                                                                <i class="fas fa-user-cog mr-2"></i>
                                                                                Mecánico</label>
                                                                            <strong>Gabriel Hidalgo</strong>
                                                                        </div>

                                                                        <div class="col-12 form-group d-flex justify-content-between"
                                                                            style="margin-bottom: 0px">
                                                                            <span>
                                                                                <small>Creado: </small>
                                                                                <small>21/12/2021</small>
                                                                                <small>12:12:00</small>
                                                                            </span>

                                                                            <span>
                                                                                <small class="text-primary">
                                                                                    <a>Ver más</a>
                                                                                </small>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> -->
                                                    </div>
                                                </div>

                                            </div>
                                            <!-- /.card-body -->
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-7">
                                        <div class="card card-dark shadow container-box-orden"
                                            style="min-height: 386px;">
                                            <div class="card-header">
                                                <h3 class="card-title">Visualizar Orden</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="box-default" id="orden-default-atendida">
                                                    <div class="img-carvy"></div>
                                                    <span>
                                                        No hay orden seleccionada
                                                    </span>
                                                </div>

                                                <div class="box-orden d-none" id="orden-atendida">
                                                    <div class="orden-general d-flex flex-column">

                                                    <div class="datos-primarios">
                                                            <div class="datos-vehiculos">
                                                                <strong class="title-orden">Datos del Vehículo</strong>
                                                                <span><strong>Marca: </strong><span id="orden_marca_vehiculo_ate"></span> </span>
                                                                <span><strong>Modelo: </strong><span id="orden_modelo_vehiculo_ate"></span>
                                                                </span>
                                                                <span><strong>Placa: </strong><span id="orden_placa_vehiculo_ate"></span>
                                                                </span>
                                                                <span><strong>color: </strong><span id="orden_color_vehiculo_ate"></span>
                                                                </span>
                                                                <span><strong>Kilometraje: </strong><span id="orden_kilometro_vehiculo_ate"></span>
                                                                </span>
                                                            </div>

                                                            <div class="datos-orden">
                                                                <strong class="title-orden">Orden de trabajo</strong>
                                                                <div>
                                                                    <span><strong>Fecha:
                                                                        </strong><span id="orden_fecha_ate"></span> </span>
                                                                    <span><strong>N°: </strong><span id="orden_id_ate"></span> </span>
                                                                </div>

                                                                <div class="mt-2 cliente">
                                                                    <strong class="title-orden">Datos del
                                                                        cliente</strong>

                                                                    <div class="datos-cliente">
                                                                        <span><strong>Cedula: </strong><span id="orden_cedula_cliente_ate"></span></span>
                                                                        <span><strong>Nombres: </strong><span id="orden_nombres_cliente_ate"></span> </span>
                                                                        <span><strong>Telefono: </strong><span id="orden_telefono_cliente_ate"></span> </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="datos-averias">
                                                            <strong class="title-averias">Averias Y Fallas</strong>
                                                        </div>

                                                        <div class="items-averias">
                                                            <ul class="" id="orden-averias_ate">
                                                                <!-- <li>hola</li> -->
                                                            </ul>
                                                        </div>

                                                        <div class="datos-averias">
                                                            <strong class="title-averias">Operario</strong>
                                                        </div>

                                                        <div class="item-operario">
                                                            <strong class="pl-2" id="orden_nombres_operario_ate"></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.tab-pane -->
                        </div>
                        <!-- /.tab-content -->
                    </div><!-- /.card-body -->
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script src="<?=BASE?>views/dist/js/scripts/gestionOrden.js"></script>