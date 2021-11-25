<script src="<?=BASE?>views/dist/js/scripts/sesion.js"></script>

<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nuevo Usuario</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Usuarios</a></li>
                    <li class="breadcrumb-item active">Nuevo Usuario</li>
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
                <a class="btn btn-primary" href="<?=BASE?>gestion/listar">
                    <i class="fas fa-list mr-2"></i>
                    Listar Usuarios</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8">
                <div class="card card-dark">
                    <div class="card-header">
                        <h3 class="card-title">Formulario</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <!-- we are adding the accordion ID so Bootstrap's collapse plugin detects it -->
                        <div id="accordion">
                            <div class="card card-success">
                                <div class="card-header">
                                    <h4 class="card-title w-100">
                                        <a id="acordion-persona" class="d-block w-100" data-toggle="collapse"
                                            href="#collapseOne">
                                            Datos Personales
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                    <div class="card-body">
                                        <form class="form-horizontal" id="form-nuevo-persona">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group row">
                                                            <label for="cedula"
                                                                class="col-sm-4 col-form-label">Cédula</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control soloNumeros"
                                                                    placeholder="ejemplo: 2405345494" maxlength="10"
                                                                    minlength="10" id="cedula" name="cedula" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group row">
                                                            <label for="persona-nombres"
                                                                class="col-sm-4 col-form-label">Nombres</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control danger letras-vd"
                                                                    placeholder="ejemplo: Andrés" maxlength="150"
                                                                    minlength="4" id="persona-nombres" name="nombres"
                                                                    required>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group row">
                                                            <label for="persona-apellidos"
                                                                class="col-sm-4 col-form-label">Apellidos</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control letras-vd"
                                                                    placeholder="ejemplo: Romero" maxlength="150"
                                                                    minlength="4" id="persona-apellidos" required
                                                                    name="apellidos">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group row">
                                                            <label for="persona-telefono"
                                                                class="col-sm-4 col-form-label">Telefono</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control numeros-vd"
                                                                    placeholder="ejemplo: 09234234234" maxlength="10"
                                                                    minlength="10" id="persona-telefono"
                                                                    name="telefono">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-6">
                                                        <div class="form-group row">
                                                            <label for="persona-correo"
                                                                class="col-sm-4 col-form-label">Correo</label>
                                                            <div class="col-sm-8">
                                                                <input type="email" class="form-control"
                                                                    placeholder="ejemplo: andres@correo.com"
                                                                    maxlength="150" minlength="4" id="persona-correo"
                                                                    name="correo" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label>Direccion</label>
                                                    <textarea class="form-control" rows="3"
                                                        placeholder="Escribir su dirección"
                                                        id="persona-direccion"></textarea>
                                                </div>

                                                <div class="form-group row">
                                                    <!-- <i class="fas fa-save mr-2"></i> -->
                                                    <button type="submit" class="btn btn-success"><i
                                                            class="fas fa-chevron-right mr-2"
                                                            id="btn-nueva-persona"></i>Siguiente</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h4 class="card-title w-100">
                                        <a id="acordion-usuario" class="d-block w-100" data-toggle="collapse"
                                            href="#collapseTwo">
                                            Datos de Usuario
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <form id="form-nuevo-usuario" action="" method="post">
                                            <div class="row">
                                                <div class="col-12 col-md-6 col-lg-5">
                                                    <div class="form-group">
                                                        <label for="">Cargo</label>
                                                        <select id="select-cargo" class="form-control">
                                                            <!-- <option value="0">Seleccione un Cargo</option> -->
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-12 col-md-6 col-lg-5">
                                                    <div class="form-group">
                                                        <label for="">Usuario</label>
                                                        <input type="text" name="usuario" id="usuario-us"
                                                            class="form-control" placeholder="Usuario">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 col-md-6 col-lg-5">
                                                    <div class="form-group">
                                                        <label for="">Contraseña</label>
                                                        <input type="password" name="clave" class="form-control"
                                                            id="usuario-clave" placeholder="Contraseña">
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-5">
                                                    <div class="form-group">
                                                        <label for="">Confirmar Contraseña</label>
                                                        <input type="password" name="confclave" id="usuario-conf-clave"
                                                            class="form-control" placeholder="Confirmar Contraseña">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="img-usuario">Imagen</label>
                                                        <div class="input-group">
                                                            <div class="custom-file">
                                                                <input type="file" name="img" id="img-usuario"
                                                                    class="custom-file-input" accept="image/*">
                                                                <label class="custom-file-label"
                                                                    for="exampleInputFile">Subir Archivo</label>
                                                            </div>
                                                            <div class="input-group-append">
                                                                <span class="input-group-text">Subir</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <!-- <i class="fas fa-save mr-2"></i> -->
                                                <button type="submit" class="btn btn-primary"><i
                                                        class="fas fa-save mr-2"></i>Guardar</button> 
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card card-dark">
                    <div class="card-header">
                        <h3 class="card-title">Vista Imagen Usuario</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12" style="width: 218px; height: 315px">
                                <img id="imagen-usuario" src="<?=SERVIDOR?>resources/usuarios/default.jpg"
                                    style="width:75%; height:95%; border-radius: 20%" class="mx-auto d-block">
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

<!-- Validatioin -->
<script src="<?=BASE?>views/plugins/validacion/jquery.validate.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/nuevoUsuario.js?ver=1.1.1.1"></script> 