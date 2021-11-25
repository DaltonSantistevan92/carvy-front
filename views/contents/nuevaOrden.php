<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nueva Orden de Trabajo</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Ordenes de Trabajo</a></li>
                    <li class="breadcrumb-item active">Nueva Orden de Trabajo</li>
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
                <a class="btn btn-primary" href="<?=BASE?>orden_trabajo/gestionar">
                    <i class="fas fa-list mr-2"></i>
                    Gestionar Ordenes</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-danger">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    1. Datos del Cliente
                                </h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-10 col-md-6 mb-2">
                                        <input id="cliente-id" type="hidden">
                                        <div class="form-group">
                                            <label for="">Cédula</label>
                                            <input id="cliente-cedula" type="text" class="form-control"
                                                placeholder="Cédula">
                                        </div>
                                    </div>
                                    <div class="col-1">
                                        <button class="btn btn-dark mb-2 ml-1" style="margin-top: 31px;"
                                            data-toggle="modal" data-target="#modal-clientes" data-backdrop="static"
                                            data-keyboard="false"><i class="fas fa-search"></i></button>
                                    </div>
                                    <div class="col-12 col-md-6 mb-2">
                                        <div class="form-group">
                                            <label for="">Nombres</label>
                                            <input id="cliente-nombres" type="text" class="form-control" readOnly
                                                placeholder="Nombres">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-2">
                                        <div class="form-group">
                                            <label for="">Apellidos</label>
                                            <input id="cliente-apellidos" type="text" class="form-control" readOnly
                                                placeholder="Apellidos">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-2">
                                        <div class="form-group">
                                            <label for="">Teléfono</label>
                                            <input id="cliente-telefono" type="text" class="form-control" readOnly
                                                placeholder="Teléfono">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-2">
                                        <div class="form-group">
                                            <label for="">Correo</label>
                                            <input id="cliente-correo" type="text" class="form-control" readOnly
                                                placeholder="Correo">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card card-dark">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    2. Datos del Vehículo
                                </h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-2">
                                        <input type="hidden" id="vehiculo-id">
                                        <div class="form-group">
                                            <label for="">Placa</label>
                                            <select id="select-placa" name="placa" class="form-control">
                                                <option>Seleccione una Placa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-2">
                                        <div class="form-group">
                                            <label for="">Marca</label>
                                            <input id="vehiculo-marca" type="text" class="form-control" readOnly
                                                placeholder="Marca">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-2">
                                        <div class="form-group">
                                            <label for="">Modelo</label>
                                            <input id="vehiculo-modelo" type="text" class="form-control" readOnly
                                                placeholder="Modelo">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-2">
                                        <div class="form-group">
                                            <label for="">Color</label>
                                            <input id="vehiculo-color" type="text" class="form-control" readOnly
                                                placeholder="Color">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card card-danger">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    3. Datos del Mecánico
                                </h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-3">
                                        <div class="div img-mecanico">
                                            <img id="macanico-imagen" src="<?=SERVIDOR?>resources/usuarios/default.jpg"
                                                width=125px>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-9">
                                        <div class="row">
                                            <div class="col-10 col-md-6">
                                            <input id="mecanico-id" type="hidden">
                                                <div class="form-group">
                                                    <label for="">Nombres</label>
                                                    <input id="mecanico-nombre" type="text" class="form-control" readOnly
                                                        placeholder="Nombre">
                                                </div>
                                            </div>
                                            <div class="col-1">
                                                <button class="btn btn-dark mb-2 ml-1" style="margin-top: 31px;"
                                                    data-toggle="modal" data-target="#modal-mecanico"
                                                    data-backdrop="static" data-keyboard="false"><i
                                                        class="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label for="">Apellidos</label>
                                                    <input id="mecanico-apellido" type="text" class="form-control" readOnly
                                                        placeholder="Apellidos">
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="form-group">
                                                    <label for="">Teléfono</label>
                                                    <input id="mecanico-telefono" type="text" class="form-control" readOnly
                                                        placeholder="Teléfono">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card card-dark">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    4. Averías y Fallas
                                </h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-sm-8">
                                        <div class="form-group">
                                            <select id="select-averias" class="form-control">
                                                <option>Seleccione una opción</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-sm-4 mb-2">
                                        <button id="btn-agregar-averia" class="btn btn-primary"><i class="fas fa-plus mr-2"></i>Agregar</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="div">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10px">*</th>
                                                        <th>Descripción</th>
                                                        <th>Precio</th>
                                                        <th>Borrar</th>
                                                        <th class="none">ID</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="items-averias">
                                                    <!-- <tr>
                                                        <td><i class="fas fa-star-of-life"></i></td>
                                                        <td>Cambio de aceite</td>
                                                        <td>$15.50</td>
                                                        <th>
                                                            <div>
                                                                <button class="btn btn-outline-danger"
                                                                    onclick="borrar_item(1)">
                                                                    <i class="fas fa-minus"></i>
                                                                </button>
                                                            </div>
                                                        </th>
                                                    </tr> -->
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card card-danger">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    5. Datos de Trabajo
                                </h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-5 col-md-6">
                                        <div class="form-group">
                                            <label for="">Fecha Inicio</label>
                                            <input id="orden-inicio-fecha" type="date" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-5 col-md-6">
                                        <div class="form-group">
                                            <label for="">Hora Inicio</label>
                                            <input id="orden-inicio-hora" type="time" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-5 col-md-6">
                                        <div class="form-group">
                                            <label for="">Fecha Fin</label>
                                            <input id="orden-fin-fecha" type="date" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-5 col-md-6">
                                        <div class="form-group">
                                            <label for="">Hora Fin</label>
                                            <input id="orden-fin-hora" type="time" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card card-dark">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    6. Información Adicional
                                </h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Descripción</label>
                                            <textarea id="orden-descripcion" class="form-control" rows="3"
                                                placeholder="Ingrese una descripción"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-12 col-md-4">
                <div class="row">
                    <div class="card card-dark" style="width: 100% !important;">
                        <div class="card-header">
                            <h3 class="card-title">
                                Previsualización
                            </h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="row">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info"><i class="fas fa-user-tie"></i></span>
                                    <div class="info-box-content">
                                        <div class="div">
                                            <h5><strong><u>Cliente</u></strong></h5>
                                            <p><i class="fas fa-check-square mr-2"></i><span id="pre-orden-cliente" class="text-primary">------------</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info"><i class="fas fa-car"></i></span>
                                    <div class="info-box-content">
                                        <div class="div">
                                            <h5><strong><u>Vehículo</u></strong></h5>
                                            <p><i class="fas fa-check-square mr-2"></i><span id="pre-orden-vehiculo" class="text-primary">------------</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info"><i class="fas fa-user-cog"></i></span>
                                    <div class="info-box-content">
                                        <div class="div">
                                            <h5><strong><u>Mecánico</u></strong></h5>
                                            <p><i class="fas fa-check-square mr-2"></i><span id="pre-orden-mecanico" class="text-primary">------------</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info"><i class="fas fa-tools"></i></span>
                                    <div class="info-box-content">
                                        <div class="div">
                                            <h5><strong><u>Averías y Fallas</u></strong></h5>
                                            <ul id="pre-averias-lista">
                                                <!-- <li class="text-primary">Cambio de Aceite</li> -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info"><i class="far fa-file-alt"></i></span>
                                    <div class="info-box-content">
                                        <div class="div">
                                            <h5><strong><u>Datos de Trabajo</u></strong></h5>
                                            <p style="margin-bottom: 5px !important;"><i
                                                    class="fas fa-check-square mr-2"></i>Inicia: 
                                                        <span id="fecha_inicio" class="text-primary">-/-/-     </span>
                                                        <span id="hora_inicio" class="text-primary">-:-:-</span>
                                                    </p>
                                                    <p style="margin-bottom: 5px !important;"><i
                                                    class="fas fa-check-square mr-2"></i>Finaliza: 
                                                        <span id="fecha_finaliza" class="text-primary">-/-/-     </span>
                                                        <span id="hora_finaliza" class="text-primary">-:-:-</span>
                                                    </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-box">
                                    <span class="info-box-icon bg-info"><i class="far fa-calendar-check"></i></span>
                                    <div class="info-box-content">
                                        <div class="div">
                                            <h5><strong><u>Estado</u></strong></h5>
                                            <p><i class="fas fa-check-square mr-2"></i><span
                                                    class="text-danger">Pendiente</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>

                    <div class="col-12">
                        <div class="small-box bg-white">
                            <div class="inner">
                                <h3>$ <strong id="pre-orden-total">0.00</strong> </h3>

                                <p>Total Servicio</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                        <div class="row">
                            <button id="guardar-orden" class="btn btn-danger" style="width: 100% !important;">
                                <i class="fas fa-save mr-2"></i>Crear Orden de Trabajo
                            </button>
                            <button id="borrar-datos" class="btn btn-warning mt-2" style="width: 100% !important;">
                                <i class="fas fa-trash mr-2"></i>Limpiar Datos
                            </button>
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

<!-- Modales -->
<div class="modal fade" id="modal-clientes">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h4 class="modal-title">Clientes</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Cliente</label>
                            <input id="buscar-cli" type="text" class="form-control"
                                placeholder="Ingrese cedula o apellido del Cliente">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-cliente">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Cédula</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th style="display: none">Teléfono</th>
                                        <th style="display: none">Correo</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="cliente-body">
                                    <!-- <tr>
                                        <td>1</td>
                                        <td style="display: none">1</td>
                                        <td>2400487963</td>
                                        <td>Pedro</td>
                                        <td>Roca</td>
                                        <td>
                                            <div class="div">
                                                <button class="btn btn-danger btn-sm" onclick="seleccionar_cliente(1)">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr> -->
                                </tbody>
                            </table>
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

<div class="modal fade" id="modal-mecanico">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h4 class="modal-title">Mecánico</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Mecánico</label>
                            <input id="buscar-mecanico" type="text" class="form-control"
                                placeholder="Ingrese cedula o apellido del Mecánico">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-cliente">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Cédula</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th style="display: none">Teléfono</th>
                                        <th style="display: none">Correo</th>
                                        <th>Disponible</th>
                                        <th style="display: none">Imagen</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="mecanico-body">
                                    <!-- <tr>
                                        <td>1</td>
                                        <td style="display: none">1</td>
                                        <td>2400487963</td>
                                        <td>Pedro</td>
                                        <td>Roca</td>
                                        <td>
                                            <div class="div">
                                                <button class="btn btn-danger btn-sm" onclick="seleccionar_cliente(1)">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr> -->
                                </tbody>
                            </table>
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

<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/nuevaOrden.js"></script>