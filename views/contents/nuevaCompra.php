<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nueva Compra</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Compras</a></li>
                    <li class="breadcrumb-item active">Nueva Compra</li>
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
                <a class="btn btn-primary" href="<?=BASE?>compra/listar">
                    <i class="fas fa-list mr-2"></i>
                    Listar Compras</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 col-lg-9">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-danger">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    Datos de Compra
                                </h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="callout callout-danger">
                                    <div class="row">

                                        <input type="hidden" id="compra-id">
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">Número de Serie</label>
                                                <input id="compra-serie" type="text" class="form-control"
                                                    placeholder="Número de Serie">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">Fecha de Compra</label>
                                                <input id="compra-fecha" type="text" readOnly class="form-control"
                                                    placeholder="Fecha de Compra" value="<?=date('d/m/Y')?>">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">Descuento</label>
                                                <input id="compra-descuento-input" type="text"
                                                    class="form-control numeros-vd" placeholder="Descuento" data-mask
                                                    data-inputmask='"mask":"9{1,5}.9{1,2}"' value="0.00">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">Usuario</label>
                                                <input type="text" readOnly id="compra-usuario-actual"
                                                    class="form-control" placeholder="Usuario">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card card-dark">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    Proveedor
                                </h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="callout callout-danger">
                                    <div class="row">
                                        <div class="col-12">
                                            <button class="btn btn-dark mb-2 ml-1" style="margin-top: 10px;"
                                                data-toggle="modal" data-target="#modal-proveedor"
                                                data-backdrop="static" data-keyboard="false"><i
                                                    class="fas fa-search"></i></button>
                                        </div>
                                        <input type="hidden" id="prov-id">
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">RUC</label>
                                                <input id="prov-ruc" type="text" readOnly class="form-control"
                                                    placeholder="RUC">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">Razón Social</label>
                                                <input id="prov-razon-social" type="text" readOnly class="form-control"
                                                    placeholder="Razón Social">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">Correo</label>
                                                <input id="prov-correo" type="text" readOnly class="form-control"
                                                    placeholder="Correo">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">Teléfono</label>
                                                <input id="prov-telefono" type="text" readOnly class="form-control"
                                                    placeholder="Teléfono">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card card-dark">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-thumbtack mr-2 rt"></i>
                                    Producto
                                </h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">

                                <div class="callout callout-danger">
                                    <div class="row">
                                        <div class="col-12 col-md-1 mr-2" style="margin-top: 10px;">
                                            <button class="btn btn-dark mb-2 ml-1" data-toggle="modal"
                                                data-target="#modal-producto" data-backdrop="static"
                                                data-keyboard="false"><i class="fas fa-search"></i></button>
                                            <input type="hidden" id="prod-id">
                                        </div>
                                        <div class="col-12 col-md-5 mb-2">
                                            <div class="d-flex" style="margin-top: 12px;">
                                                <label for="" style="margin-top: 5px;">Código</label>
                                                <input id="prod-codigo" type="text" class="form-control ml-2"
                                                    placeholder="Código">
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-12 col-md-5 mb-2">
                                            <div class="form-group">
                                                <label for="">Nombre</label>
                                                <input id="prod-nombre" type="text" readOnly class="form-control"
                                                    placeholder="Nombre">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 mb-2">
                                            <div class="form-group">
                                                <label for="">Stock</label>
                                                <input id="prod-stock" type="text" readOnly class="form-control"
                                                    placeholder="Stock">
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-5 mb-2">
                                            <div class="form-group">
                                                <label for="">Cantidad</label>
                                                <input id="pro-cantidad" type="text" class="form-control numeros-vd"
                                                    placeholder="Cantidad">
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-5 mb-2">
                                            <div class="form-group">
                                                <label for="">Precio de Compra</label>
                                                <input id="prod-precio-compra" type="text" class="form-control"
                                                    placeholder="Precio de Compra" data-mask
                                                    data-inputmask='"mask":"9{1,5}.9{1,2}"'>
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
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-4 col-lg-3">
                <div class="row">
                    <div class="col-12">
                        <div class="small-box bg-white">
                            <div class="inner">
                                <h3 id="compra-subtotal">0</h3>

                                <p><strong>(+) </strong>Subtotal</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="small-box bg-white">
                            <div class="inner">
                                <h3 id="compra-iva">0</h3>

                                <p><strong>(+) </strong>IVA 12%</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="small-box bg-white">
                            <div class="inner">
                                <h3 id="compra-descuento">0</h3>

                                <p><strong>(-) </strong>Descuento</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="small-box bg-white">
                            <div class="inner">
                                <h3 id="compra-totalg">0</h3>

                                <p>Total</p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <button id="guardar-comprar" class="btn btn-success" style="width: 100% !important;">
                            <i class="fas fa-save mr-2"></i>Comprar
                        </button>
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
<div class="modal fade" id="modal-proveedor">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h4 class="modal-title">Proveedores</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Proveedor</label>
                            <input id="buscar-prov" type="text" class="form-control"
                                placeholder="Ingrese codigo o nombre del Proveedor">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-prveedor">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th style="display: none">RUC</th>
                                        <th style="display: none">Correo</th>
                                        <th style="display: none">Teléfono</th>
                                        <th>Proveedor</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="proveedor-body">
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

<div class="modal fade" id="modal-producto">
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


<script src="<?=BASE?>views/dist/js/scripts/nuevaCompra.js?Ver=1.1.1.2"></script>