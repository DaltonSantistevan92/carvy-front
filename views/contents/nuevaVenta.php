<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nueva Venta</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Ventas</a></li>
                    <li class="breadcrumb-item active">Nueva Venta</li>
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
                <a class="btn btn-primary" href="<?=BASE?>venta/listar">
                    <i class="fas fa-list mr-2"></i>
                    Listar Ventas</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card card-dark">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-thumbtack mr-2 rt"></i>
                            Datos de Venta
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
                                <input type="hidden" id="venta-id">
                                <div class="col-12 col-md-6 mb-2">
                                    <div class="form-group">
                                        <label for="">Número de Serie</label>
                                        <input id="venta-serie" type="text" class="form-control"
                                            placeholder="Número de Serie">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 mb-2">
                                    <div class="form-group">
                                        <label for="">Fecha de Venta</label>
                                        <input id="venta-fecha" type="text" readOnly class="form-control"
                                            placeholder="Fecha de Compra" value="<?=date('d/m/Y')?>">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 mb-2">
                                    <div class="form-group">
                                        <label for="">Descuento</label>
                                        <input id="venta-descuento-input" type="text" class="form-control numeros-vd"
                                            placeholder="Descuento" data-mask data-inputmask='"mask":"9{1,5}.9{1,2}"'
                                            value="0.00">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 mb-2">
                                    <div class="form-group">
                                        <label for="">Usuario</label>
                                        <input type="text" readOnly id="venta-usuario-actual" class="form-control"
                                            placeholder="Usuario">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card card-danger">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-thumbtack mr-2 rt"></i>
                            Datos del Cliente
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
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <div class="col-10">
                                            <div class="form-group">
                                                <input type="hidden" id="venta-cliente-id">
                                                <label for="">Nombres</label>
                                                <input id="venta-cliente-nombre" type="text" readOnly
                                                    class="form-control" placeholder="Nombres">
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <button class="btn btn-dark" style="margin-top: 33px"
                                                id="buscar-cliente-venta" data-toggle="modal"
                                                data-target="#modal-clientes" data-backdrop="static"
                                                data-keyboard="false"><i class="fas fa-search"></i></button>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="">Apellidos</label>
                                                <input id="venta-cliente-apellido" type="text" readOnly
                                                    class="form-control" placeholder="Apellidos">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="">Dirección</label>
                                                <input id="venta-cliente-direccion" type="text" readOnly
                                                    class="form-control" placeholder="Dirección">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="">Teléfono</label>
                                                <input id="venta-cliente-telefono" type="text" readOnly
                                                    class="form-control" placeholder="Teléfono">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="row">
                                        <div class="col-12">
                                            <input type="hidden" id="vehiculo-oculto">
                                            <div class="form-group">
                                                <label for="">Vehículo</label>
                                                <select id="select-vehiculo-venta" class="form-control"
                                                    disabled='disabled'>
                                                    <option value="0">Seleccione una opción</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="">Marca</label>
                                                <input id="venta-vehiculo-marca" type="text" readOnly
                                                    class="form-control" placeholder="Marca">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="">Modelo</label>
                                                <input id="venta-vehiculo-modelo" type="text" readOnly
                                                    class="form-control" placeholder="Modelo">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="">Color</label>
                                                <input id="venta-vehiculo-color" type="text" readOnly
                                                    class="form-control" placeholder="Color">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" id="check-orden" type="checkbox"> 
                                            <label class="form-check-label" for="check-orden">Dispone de una
                                                Orden</label>
                                        </div>

                                        <button class="btn btn-dark btn-sm ml-2 d-none" id="btn-orden"
                                            data-toggle="modal" data-target="#modal-orden" data-backdrop="static"
                                            data-keyboard="false"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
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
                                        data-target="#modal-producto-venta" data-backdrop="static"
                                        data-keyboard="false"><i class="fas fa-search"></i></button>
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
                                <input type="hidden" id="prod-id">
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
                                                    <th style="display:none;">Es Orden</th>
                                                    <th style="display:none;">Orden ID</th>
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

                        <button class="btn btn-dark" id="guardar-venta"><i class="fas fa-save mr-2"></i>Guardar
                            Venta</button>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 col-md-3">
                <div class="small-box bg-white">
                    <div class="inner">
                        <h3 id="venta-subtotal">0</h3>

                        <p><strong>(+) </strong>Subtotal</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="small-box bg-white">
                    <div class="inner">
                        <h3 id="venta-iva">0</h3>

                        <p><strong>(+) </strong>IVA 12%</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="small-box bg-white">
                    <div class="inner">
                        <h3 id="venta-descuento">0</h3>

                        <p><strong>(-) </strong>Descuento</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="small-box bg-white">
                    <div class="inner">
                        <h3 id="venta-totalg">0</h3>

                        <p>Total</p>
                    </div>
                    <div class="icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!-- Modales -->
<div class="modal fade" id="modal-clientes">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h4 class="modal-title">Clientes</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Cliente</label>
                            <input id="buscar-cli" type="text" class="form-control"
                                placeholder="Ingrese cedula o apellido del Cliente">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-cliente">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Cédula</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th style="display: none">Teléfono</th>
                                        <th style="display: none">Correo</th>
                                        <th style="display: none">Dirección</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="cliente-body">
                                    <!-- <tr>
                                        <td>1</td>
                                        <td style="display: none">1</td>
                                        <td>2400487963</td>
                                        <td>Pedro</td>
                                        <td>Roca</td>
                                        <td>
                                            <div class="div">
                                                <button class="btn btn-danger btn-sm" onclick="seleccionar_cliente(1)">
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

<div class="modal fade" id="modal-orden">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h4 class="modal-title">Ordenes Atendidas</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-cliente">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Código de Orden</th>
                                        <th>Cliente</th>
                                        <th>Vehículo</th>
                                        <th>OK</th>
                                        <th style="display: none">Nombres</th>
                                        <th style="display: none">Apellidos</th>
                                        <th style="display: none">Dirección</th>
                                        <th style="display: none">Teléfono</th>
                                        <th style="display: none">Marca</th>
                                        <th style="display: none">Modelo</th>
                                        <th style="display: none">Color</th>
                                    </tr>
                                </thead>
                                <tbody id="orden-body">
                                    <!-- <tr>
                                        <td>1</td>
                                        <td style="display: none">1</td>
                                        <td>gfdgdfgfd</td>
                                        <td>Pedro Roca</td>
                                        <td>ABBC-124</td>
                                        <td>
                                            <div class="div">
                                                <button class="btn btn-danger btn-sm" onclick="seleccionar_cliente(1)">
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

<div class="modal fade" id="modal-producto-venta">
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
                                        <th style="display: none">Precio Venta</th>
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

<script src="<?=BASE?>views/dist/js/scripts/nuevaVenta.js?ver=1.1.1.2"></script>