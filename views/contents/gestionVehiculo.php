<script src="<?=BASE?>views/dist/js/scripts/sesion.js"></script>

<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Gestionar Vehiculos</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Clientes</a></li>
                    <li class="breadcrumb-item active">Gestionar Vehiculos</li>
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
            <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-2">
                <a class="btn btn-primary" href="<?=BASE?>cliente/nuevo">
                    <i class="fas fa-plus mr-2"></i>
                    Agregar Cliente</a>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-2">
                <a class="btn btn-primary" href="<?=BASE?>cliente/listar">
                    <i class="fas fa-list mr-2"></i>
                    Listar Cliente</a>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-2">
                <a class="btn btn-primary" href="<?=BASE?>cliente/listar_vehiculo">
                    <i class="fas fa-car mr-2"></i>
                    Listar Vehículos</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card card-info">
                    <div class="card-header">
                        <h3 class="card-title">Nuevo Vehículo</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <form id="form-nuevo-vehiculo" type="POST">
                            <div class="form-group">
                                <label for="placa-vehiculo">Placa</label>
                                <input type="text" class="form-control" name="placa" id="placa-vehiculo"
                                    placeholder="AAC-0123" data-mask data-inputmask='"mask":"a{1,3}-9{1,4}"'>
                            </div>
                            <div class="row">
                                <div class="col-10 col-md-9 mb-2">
                                    <div class="form-group">
                                        <label for="select-marca">Marca</label>
                                        <input id="marca-id" type="hidden">
                                        <input type="text" class="form-control" name="marca" id="marca-vehiculo"
                                            placeholder="Chevrolet">
                                        <!-- <select class="form-control" name="marca" id="select-marca">
                                            <option>Seleccione una marca</option>
                                      </select>  -->
                                    </div>
                                </div>
                                <div class="col-1">
                                    <button class="btn btn-dark mb-2 ml-1" style="margin-top: 31px;" data-toggle="modal"
                                        data-target="#modal-marcas" data-backdrop="static" data-keyboard="false"><i
                                            class="fas fa-search"></i></button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="modelo-vehiculo">Modelo</label>
                                <input type="text" class="form-control" name="modelo" id="modelo-vehiculo"
                                    placeholder="Modelo">
                            </div>
                            <div class="form-group">
                                <label for="color-vehiculo">Color</label>
                                <input type="text" class="form-control letras-vd" name="color" id="color-vehiculo"
                                    placeholder="Azul">
                            </div>

                            <div class="form-group">
                                <label for="kilometro-vehiculo">Kilometraje</label>
                                <input type="text" class="form-control" name="kilometro" id="kilometro-vehiculo"
                                    placeholder="12000km">
                            </div>

                            <div class="card-footer">
                                <!-- <input type="submit" value="Guardar"> -->
                                <button type="submit" id="btn-save" class="btn btn-primary"><i
                                        class="far fa-save mr-2"></i>Guardar</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card-body -->
                </div>


            </div>
            <div class="col-12 col-md-6 col-lg-9">
                <div class="card card-info">
                    <div class="card-header">
                        <h3 class="card-title">Gestionar Vehículo</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-4 col-lg-4">
                                <div class="card card-dark">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fas fa-search-plus mr-2"></i>
                                            Clientes
                                        </h3>
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body clearfix">
                                        <div>
                                            <div class="form-group">
                                                <label for="buscar-cliente">Buscar Cliente</label>
                                                <input type="text"
                                                    class="form-control form-control-border border-width-2"
                                                    id="buscar-cliente" placeholder="Cedula, Apellidos, Nombres">
                                            </div>
                                        </div>
                                        <div class="table-cliente" id="box-clientes">
                                            <!-- <div>
                                              <p class="text-danger">No hay datos</p>
                                            </div> -->
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                </div>

                            </div>
                            <div class="col-12 col-md-8 col-lg-8">
                                <div class="row">
                                    <div class="info-box">
                                        <span class="info-box-icon bg-info"><i class="far fa-user"></i></span>
                                        <div class="info-box-content">
                                            <div>
                                                <div>
                                                    <strong>Nombres: </strong><span
                                                        id="buscar-cliente-nombre">------------------</span>
                                                </div>
                                                <div>
                                                    <input type="hidden" id='cliente_id'>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <strong>Cedula: </strong><span
                                                            id="buscar-cliente-cedula">-------------------</span>
                                                    </div>
                                                    <div>
                                                        <strong>Teléfono: </strong><span
                                                            id="buscar-cliente-telefono">-----</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.info-box-content -->
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="">Seleccione un Vehículo</label>
                                                    <select class="form-control" id="select-vehiculo">
                                                        <!-- <option>Seleccione una marca</option> -->
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <button id="btn-vehiculo" class="btn btn-dark mt-4"
                                                    style="margin-top: 30px !important"><i
                                                        class="fas fa-car mr-2"></i>Agregar</button>

                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="table-vehiculo">
                                                    <div class="card card-dark">
                                                        <div class="card-header">
                                                            <h3 class="card-title">Vehículos Disponibles</h3>
                                                        </div>
                                                        <!-- /.card-header -->
                                                        <div class="card-body table-responsive p-0">
                                                            <table class="table table-hover text-nowrap">
                                                                <thead>
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>Placa</th>
                                                                        <th>Marca</th>
                                                                        <th>Modelo</th>
                                                                        <th>Acción</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="body-listado-cliente">
                                                                    <!--  <tr>
                                                    <td>219</td>
                                                    <td>Alexander Pierce</td>
                                                    <td>11-7-2014</td>
                                                    <td><span class="tag tag-warning">Pending</span></td>
                                                    <td>
                                                                    <div>
                                                                        <button class="btn btn-danger" onclick="eliminar_vehiculo(1,1)">
                                                                            <i class="fas fa-trash"></i>
                                                                        </button>
                                                                    </div>
                                                    </td>
                                                    </tr>         -->
                                                                    <!-- <tr>
                                                      <td>
                                                        No hay vehiculos
                                                      </td>               
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

                                </div>

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

<!-- Modales -->
<div class="modal fade" id="modal-marcas">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h4 class="modal-title">Marcas</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Marca</label>
                            <input id="buscar-marca" type="text" class="form-control"
                                placeholder="Ingrese nombre de la marca">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-marca">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Nombre</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="marca-body">
                                   <!--  <tr>
                                        <td>1</td>
                                        <td style="display: none">1</td>
                                        <td>Chevrolet</td>
                                        <td>
                                            <div class="div">
                                                <button class="btn btn-danger btn-sm" onclick="seleccionar_marca(1)">
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

<script src="<?=BASE?>views/plugins/validacion/jquery.validate.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/gestionVehiculo.js?ver=1.1.1.2"></script>