<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Listar Ventas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Ventas</a></li>
                    <li class="breadcrumb-item active">Listar Ventas</li>
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
                <a class="btn btn-primary" href="<?=BASE?>venta/nueva">
                    <i class="fas fa-plus mr-2"></i>
                    Nueva Venta</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 form-group">
                <label for="">Filtrar Ventas Por: </label>
                <select id="filtrar_venta" class="form-control">
                    <option value="hoy">Hoy</option>
                    <option value="ayer">Ayer</option>
                    <option value="semana">Semana</option>
                    <option value="mes">Mes</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card card-success">
                    <div class="card-header">
                        <h3 class="card-title">Ventas</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="div" style="overflow: auto;">
                            <table id="tabla-ventas" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>N Serie</th>
                                        <th>Cliente</th>
                                        <th>Total</th>
                                        <th>Fecha de Venta</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!--  <tr>
                                        <td class="pt-25">1</td>
                                        <td class="pt-25">0225285</td>
                                        <td class="pt-25">Mavesa</td>
                                        <td class="pt-25">$200</td>
                                        <td class="pt-25">12/25/2020</td>  
                                        <td class="pt-25">
                                                        <div>
                                                            <button class="btn btn-primary" onclick="ir_compra_factura(1)">
                                                                <i class="fas fa-eye"></i>
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

<script src="<?=BASE?>views/dist/js/scripts/listaVenta.js"></script>