<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Categoría</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Productos</a></li>
                    <li class="breadcrumb-item active">Categoría</li>
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
                <a class="btn btn-primary" href="<?=BASE?>producto/nuevo">
                    <i class="fas fa-plus mr-2"></i>
                    Agregar Producto</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-12 col-md-8 col-lg-6 d-flex">
                        <input type="text" class="form-control" placeholder="Nueva categoría" minlength="4" required
                            id="texto-categoria">
                        <button class="btn btn-success ml-2" id="nueva-categoria">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="btn btn-primary ml-2" id="refresh-categoria">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-12 col-md-8 col-lg-8">
                        <div class="card card-success">
                            <div class="card-header">
                                <h3 class="card-title">Listado de Categorías</h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <thead class="text-center">
                                        <tr>
                                            <th style="width: 10px">#</th>
                                            <th>Categoría</th>
                                            <th>Producto</th>
                                            <th>Fecha</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="body-categoria2">
                                        <!-- <tr>
                                            <td>1.</td>
                                            <td>Accesorio</td>
                                            <td>
                                                <div>
                                                    <button class="btn btn-primary">
                                                        <i class="fas fa-eye"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>2021/03/05</td>
                                            <td>
                                                <div>
                                                    <button class="btn btn-warning">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                    <button class="btn btn-danger">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr> -->
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer clearfix">
                                <ul class="pagination pagination-sm m-0 float-right" id="boton-paginacion-categoria">
                                    <!-- <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">&raquo;</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 col-lg-4">
                        <div class="card card-success d-none" id="card-producto">
                            <div class="card-header">
                                <h3 class="card-title">Productos</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                                <!-- /.card-tools -->
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <ul id="body-productos-categoria">
                                    <!-- <li class="mb-2">Lorem ipsum dolor sit amet</li> -->
                                </ul>
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

<!-- Modales --> 
<div class="modal fade" id="actualizar_categoria">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Actualizar Categoría</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="update-categoria" method="post">
                        <input type="hidden" id="categoria-id">
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="">Categoría</label>
                                <input id="upd-categoria" type="text" class="form-control">
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-12">
                            <button id="btn-update" class="btn btn-success"><i class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/categoria.js"></script>