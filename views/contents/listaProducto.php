<style>
.box-img-producto {
    width: 95px;
    height: 80px;
    overflow: hidden;
}

.box-img-producto>img {
    width: 100% !important;
    height: 100% !important;
}

.pt-25 {
    padding-top: 30px !important;
}
</style>
<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Listar Productos</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Productos</a></li>
                    <li class="breadcrumb-item active">Listar Productos</li>
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
                <div class="card card-success">
                    <div class="card-header">
                        <h3 class="card-title">Productos - Repuestos</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="div" style="overflow: auto;">
                            <table id="tabla-producto" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>Imagen</th>
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Categoría</th>
                                        <th>Precio Compra</th>
                                        <th>Precio Venta</th>
                                        <th>Stock</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr>
                                        <td class="pt-25">1</td>
                                        <td>
                                            <div class="box-img-producto">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcrOhPzPs268ym34L6y2y4V5MLVSKfV-GLA&usqp=CAU">
                                            </div>
                                        </td>
                                        <td class="pt-25">Win 95+</td>
                                        <td class="pt-25"> 4</td>
                                        <td class="pt-25">X</td>
                                        <td class="pt-25"> 4</td>
                                        <td class="pt-25"><span class="badge bg-green">Activado</span></td>
                                        <td class="pt-25">
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
                                    </tfoot>
                            </table>
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
<div class="modal fade" id="actualizar-producto">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Actualizar Producto</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="update-cliente" method="post">
                        <input type="hidden" id="producto-id">
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Código</label>
                                <input id="upd-codigo" type="text" class="form-control">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Nombre</label>
                                <input id="upd-nombre" type="text" class="form-control letras-vd">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Stock</label>
                                <input id="upd-stock" type="email" readOnly class="form-control numeros-vd">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Precio Venta</label>
                                <input id="upd-pventa" type="text" class="form-control numeros-vd">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="">Descripción</label>
                                <textarea id="upd-descripcion" type="text" rows="2" class="form-control"></textarea>
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-12">
                            <button id="btn-update" class="btn btn-success"><i
                                    class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
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

<div class="modal fade" id="modal-img">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Actualizar Imagen</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                <input type="hidden" id="id-prod">
                    <div class="row">
                        <div class="col-12 text-center">
                            <img id="img-prod" style="width: 230px;height: 250px">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label for="imagen-nueva" class="form-label">Imagen Nueva</label>
                            <input class="form-control" type="file" id="imagen-nueva" accept="image/*">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <button id="btn-actualizar" class="btn btn-success"><i
                                    class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
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
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/vfs_fonts.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>

<script src="<?=BASE?>views/dist/js/scripts/listaProducto.js"></script>