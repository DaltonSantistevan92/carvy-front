<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nuevo Producto</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Productos</a></li>
                    <li class="breadcrumb-item active">Nuevo Producto</li>
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
            <div class="col-12 col-sm-4 col-md-3 col-lg-3">
                <a class="btn btn-primary" href="<?=BASE?>producto/categoria">
                    <i class="fas fa-plus mr-2"></i>
                    Agregar Categoría</a>
            </div>
            <div class="col-12 col-sm-4 col-md-3 col-lg-2">
                <a class="btn btn-primary" href="<?=BASE?>producto/listar">
                    <i class="fas fa-list mr-2"></i>
                    Listar Productos</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 col-lg-9">
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
                        <form id="form-nuevo-producto" type="POST" enctype="multipart/formdata">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Categoría</label>
                                            <select class="form-control" id="select-categoria">
                                                <!-- <option>option 1</option> -->
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label for="codigo-producto">Código</label>
                                            <input type="text" name="codigo" id="codigo-producto" class="form-control"
                                                placeholder="Código" minlength="4">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="nombre-producto">Nombre</label>
                                    <input type="text" class="form-control letras-vd" name="nombre" id="nombre-producto"
                                        placeholder="Nombre" minlength='5'>
                                </div>

                                <div class="form-group">
                                    <label for="imagen-producto" class="form-label">Imagen</label>
                                    <input class="form-control" type="file" id="imagen-producto" accept="image/*">
                                    <!-- <div class="input-group">
                                        <div class="custom-file">
                                            <label class="custom-file-label" for="exampleInputFile">Subir
                                                Archivo</label>
                                            <input type="file" name="imagen" id="imagen-producto"
                                                class="custom-file-input" accept="image/*">
                                        </div>
                                        <div class="input-group-append">
                                            <span class="input-group-text">Subir</span>
                                        </div>
                                    </div> -->
                                </div>

                                <div class="form-group">
                                    <label>Descripción</label>
                                    <textarea class="form-control letras-vd" id="descripcion-producto" rows="3"
                                        placeholder="Descripción"></textarea>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-gruop">
                                            <label>Stock Mínimo</label>
                                            <input type="text" id="precio-venta-stock-minimo" class="form-control numeros-vd">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-gruop">
                                            <label>Stock Máximo</label>
                                            <input type="text"  id="precio-venta-stock-maximo" class="form-control numeros-vd">
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-gruop">
                                            <label>Precio Venta</label>
                                            <input type="text" name="precio_venta" id="precio-venta-producto"
                                                class="form-control numeros-vd" data-mask data-inputmask='"mask":"9{1,5}.9{1,2}"'>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-gruop">
                                            <label>Fecha</label>
                                            <input type="date" name="fecha" id="fecha-producto" class="form-control">
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

            <div class="col-12 col-md-4 col-lg-3">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-info">
                            <div class="card-header">
                                <h3 class="card-title">Vista Imagen Producto</h3>
                                <!-- /.card-tools -->
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12" style="width: 218px; height: 260px">
                                        <img id="img-preview"
                                            src="<?=SERVIDOR?>resources/productos/producto-default.png"
                                            style="width: 209px;height: 250px" class="mx-auto d-block">
                                    </div>
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

<!-- Validatioin -->
<script src="<?=BASE?>views/plugins/validacion/jquery.validate.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/nuevoProducto.js"></script>