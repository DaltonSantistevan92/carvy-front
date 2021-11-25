<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Orden Repuesto</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Ordenes de Trabajo</a></li>
                    <li class="breadcrumb-item active">En Proceso</li>
                    <li class="breadcrumb-item active">Orden Repuesto</li>
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
                    <a class="btn btn-danger" href="<?=BASE?>orden_trabajo/procesos">
                    <i class="fas fa-arrow-circle-left mr-2"></i>
                    Regresar</a>
                </div>
         </div>
        <div class="row">
            <div class="col-12 col-md-9 col-lg-12">
                <div class="card card-danger">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-tools mr-2"></i>
                            Repuesto
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
                                <div class="card card-danger">
                                    <div class="card-body">
                                        <div class="col-12 form-group d-flex justify-content-between"
                                            style="margin-bottom: 0px">
                                            <label>
                                                <i class="fas fa-dice-one mr-2"></i>
                                                <span>Orden</span></label>
                                            <span id="orden-id"> </span>
                                        </div>
                                        <div class="col-12 form-group d-flex justify-content-between"
                                            style="margin-bottom: 0px">
                                            <label>
                                                <i class="fas fa-key mr-2"></i>
                                                <span>Código</span></label>
                                            <span id="orden-codigo"> </span>
                                        </div>
                                        <div class="col-12 form-group d-flex justify-content-between"
                                            style="margin-bottom: 0px">
                                            <label>
                                                <i class="fas fa-calendar-day mr-2"></i>
                                                <span>Creado</span></label>
                                            <span id="orden-creado"> </span>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                            </div>
                        </div>
                        <div class="callout callout-danger">
                            <div class="row">
                                <div class="col-12 col-md-1 mr-2" style="margin-top: 10px;">
                                    <button class="btn btn-dark mb-2 ml-1" id="btn-modal-search-products"
                                        style="margin-top: 22px;"><i class="fas fa-search"></i></button>
                                    <input type="hidden" id="prod-id">
                                </div>
                                <div class="col-12 col-md-5 mb-2">
                                    <div class="form-group">
                                        <label for="">Código</label>
                                        <input id="prod-codigo" type="text" class="form-control" placeholder="Código">
                                    </div>
                                </div>
                                <div class="col-12 col-md-5 mb-2">
                                    <div class="form-group">
                                        <label for="">Nombre</label>
                                        <input id="prod-nombre" type="text" readOnly class="form-control"
                                            placeholder="Nombre">
                                    </div>
                                </div>

                            </div>

                            <div class="row">

                            </div>

                            <div class="row">

                                <div class="col-6 col-md-2 mb-2">
                                    <div class="form-group">
                                        <label for="">Cantidad</label>
                                        <input id="pro-cantidad" type="text" class="form-control numeros-vd"
                                            placeholder="Cantidad">
                                    </div>
                                </div>

                                <div class="col-6 col-md-2 mb-2">
                                    <div class="form-group">
                                        <label for="">Stock</label>
                                        <input id="pro-stock" readOnly type="text" class="form-control numeros-vd"
                                            placeholder="Stock">
                                    </div>
                                </div>

                                <div class="col-12 col-md-5 mb-2">
                                    <div class="form-group">
                                        <label for="">Precio de Venta</label>
                                        <input id="prod-precio-venta" type="text" class="form-control"
                                            placeholder="Precio de Venta" readOnly>
                                    </div>
                                </div>

                                <div class="col-12 col-md-2">
                                    <button id="item-agregar" class="btn btn-dark" style="margin-top: 30px;"><i
                                            class="fas fa-plus"></i></button>
                                    <button id="btn-borrar" class="btn btn-danger" style="margin-top: 30px;"><i
                                            class="fas fa-minus"></i></button>
                                </div>

                                <div class="col-12">
                                    <div class="tabla-item-productos" style="overflow: auto;">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th style="width: 10px">#</th>
                                                    <th>Descripción</th>
                                                    <th>Cantidad</th>
                                                    <th>Precio</th>
                                                    <th>Total</th>
                                                    <th>Borrar</th>
                                                    <th style="display:none;">Id</th>
                                                </tr>
                                            </thead>
                                            <tbody id="items-productos">
                                                <!-- <tr>
                                                <td><i class="fas fa-star-of-life"></i></td>
                                                <td>Aceite</td>
                                                <td>5</td>
                                                <td>$1.50</td>
                                                <td>10000</td>
                                                <th>
                                                  <div>
                                                      <button class="btn btn-outline-danger" onclick="borrar_item(1)">
                                                          <i class="fas fa-minus"></i>
                                                     </button>
                                                  </div>
                                                </th>
                                            </tr> -->
                                            </tbody>
                                        </table>
                                    </div>
                                    <button class="btn btn-primary" id="guardar_repuesto_orden">
                                        <i class="fas fa-save mr-2"></i>
                                        Guardar Datos
                                    </button>
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
<div class="modal fade" id="modal-producto" data-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h4 class="modal-title">Productos - Repuestos</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Producto</label>
                            <input id="buscar-prod" type="text" class="form-control"
                                placeholder="Ingrese codigo o nombre de un Producto">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-producto">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Stock</th>
                                        <th>OK</th>
                                        <th class="d-none">Precio de V</th>
                                    </tr>
                                </thead>
                                <tbody id="producto-body">
                                    <!-- <tr>
                                  <td>1</td>
                                  <td>1</td>
                                  <td>Mavesa S.A</td>
                                  <td>
                                    <div class="div">
                                      <button class="btn btn-danger btn-sm" onclick="seleccionar(1)">
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

<script src="<?=BASE?>views/dist/js/scripts/repuestoOrden.js?ver=1.1.2"></script>