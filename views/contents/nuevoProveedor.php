<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nuevo Proveedor</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Proveedores</a></li>
                    <li class="breadcrumb-item active">Nuevo Proveedor</li>
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
                <a class="btn btn-primary" href="<?=BASE?>proveedor/listar">
                    <i class="fas fa-list mr-2"></i>
                    Listar Proveedores</a>
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
                        <form id="form-nuevo-proveedor" type="POST">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label for="ruc-proveedor">RUC</label>
                                            <input type="text" name="ruc" id="ruc-proveedor"
                                                class="form-control numeros-vd" placeholder="RUC" maxlength='13'
                                                maxlength='13'>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label for="codigo-producto">Razón Social</label>
                                            <input type="text" name="razon_social" id="razon-social-proveedor"
                                                class="form-control letras-vd" placeholder="Razón Social" minlength='6'>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Dirección</label>
                                    <textarea class="form-control" id="descripcion-proveedor" rows="3"
                                        placeholder="Dirección"></textarea>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-gruop">
                                            <label>Correo</label>
                                            <input type="email" name="correo" id="correo-proveedor" class="form-control"
                                                placeholder="Correo">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-gruop">
                                            <label>Teléfono</label>
                                            <input type="tel" name="telefono" id="telefono-proveedor"
                                                class="form-control numeros-vd" placeholder="Teléfono" maxlength='10'>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Guardar</button>
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
<script src="<?=BASE?>views/dist/js/scripts/nuevoProveedor.js"></script>