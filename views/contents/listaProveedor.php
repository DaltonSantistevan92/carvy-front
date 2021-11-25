<style>
.box-img-usuario {
    width: 88px;
    height: 90px;
    overflow: hidden;
}

.box-img-usuario>img {
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
                <h1 class="m-0">Listar Proveedores</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Proveedores</a></li>
                    <li class="breadcrumb-item active">Listar Proveedores</li>
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
                <a class="btn btn-primary" href="<?=BASE?>proveedor/nuevo">
                    <i class="fas fa-plus mr-2"></i>
                    Agregar Proveedor</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card card-success">
                    <div class="card-header">
                        <h3 class="card-title">Proveedores</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="div" style="overflow: auto;">
                            <table id="tabla-proveedor" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>RUC</th>
                                        <th>Razón Social</th>
                                        <th>Dirección</th>
                                        <th>Correo</th>
                                        <th>Teléfono</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr>
                                        <td class="pt-25">1</td>
                                        <td class="pt-25">24587988785001</td>
                                        <td class="pt-25">Hola Mundo S.A</td>
                                        <td class="pt-25">Guayaquil</td>
                                        <td class="pt-25">hola@yahoo.com</td>
                                        <td class="pt-25">03589874526</td>    
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
<div class="modal fade" id="actualizar-proveedor">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h4 class="modal-title">Actualizar Proveedor</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="update-cliente" method="post">
                        <input type="hidden" id="proveedor-id">
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">RUC</label>
                                <input id="upd-ruc" type="text" class="form-control numeros-vd">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Razón Social</label>
                                <input id="upd-razon-social" type="text" class="form-control letras-vd">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Correo</label>
                                <input id="upd-correo" type="email" class="form-control">
                            </div>
                            <div class="col-12 col-md-6 form-group">
                                <label for="">Teléfono</label>
                                <input id="upd-telefono" type="text" class="form-control numeros-vd">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="">Dirección</label>
                                <textarea id="upd-direccion" type="text" rows="2" class="form-control"></textarea>
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

<script src="<?=BASE?>views/dist/js/scripts/listaProveedor.js"></script>