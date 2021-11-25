<script src="<?=BASE?>views/dist/js/scripts/sesion.js"></script>

<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nuevo cliente</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Clientes</a></li>
                    <li class="breadcrumb-item active">Nuevo cliente</li>
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
                <a class="btn btn-primary" href="<?=BASE?>cliente/listar">
                    <i class="fas fa-list mr-2"></i>
                    Listar Cliente</a>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-3">
                <a class="btn btn-primary" href="<?=BASE?>cliente/vehiculo">
                    <i class="fas fa-car mr-2"></i>
                    Gestionar Vehículo</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card card-info">
                    <div class="card-header">
                        <h3 class="card-title">Nuevos Datos</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <form class="form-horizontal" id="form-nuevo-cliente">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input class="custom-control-input" type="checkbox" id="no-validar">
                                            <label for="no-validar" class="custom-control-label">No Validar
                                                Cédula</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group row">
                                            <label for="cedula" class="col-sm-4 col-form-label">Cédula</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control soloNumeros"  
                                                    placeholder="ejemplo: 2405345494" maxlength="10" minlength="10"
                                                    id="cedula" name="cedula" required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12-col-md-6">
                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-8 col-form-label">Fecha
                                                Registro</label>
                                            <div class="col-sm-4" style="width: 142px !important;">
                                                <small class="badge badge-success"><?php echo(date('d-m-Y'));?></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group row">
                                            <label for="nombres" class="col-sm-4 col-form-label">Nombres</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control danger letras-vd"
                                                    placeholder="ejemplo: Andrés" maxlength="150" minlength="4"
                                                    id="cliente-nombres" name="nombres" required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6">
                                        <div class="form-group row">
                                            <label for="cliente-apellidos"
                                                class="col-sm-4 col-form-label">Apellidos</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control letras-vd"
                                                    placeholder="ejemplo: Romero" maxlength="150" minlength="3"
                                                    id="cliente-apellidos" required name="apellidos">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group row">
                                            <label for="cliente-telefono"
                                                class="col-sm-4 col-form-label">Teléfono</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control numeros-vd"
                                                    placeholder="ejemplo: 09234234234" maxlength="10" minlength="10"
                                                    id="cliente-telefono" name="telefono"> 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6">
                                        <div class="form-group row">
                                            <label for="cliente-correo" class="col-sm-4 col-form-label">Correo</label>
                                            <div class="col-sm-8">
                                                <input type="email" class="form-control"
                                                    placeholder="ejemplo: andres@correo.com" maxlength="150"
                                                    minlength="4" id="cliente-correo" name="correo" required>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Direccion</label>
                                    <textarea class="form-control" rows="3" placeholder="Escribir su dirección"
                                        id="cliente-direccion"></textarea>
                                </div>

                                <div class="form-group row">
                                    <!-- <i class="fas fa-save mr-2"></i> -->
                                    <input type="submit" class="btn btn-success" value="Registrar Cliente">
                                </div>
                            </div>

                        </form>
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

<!-- Validatioin -->
<script src="<?=BASE?>views/plugins/validacion/jquery.validate.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/nuevoCliente.js"></script>