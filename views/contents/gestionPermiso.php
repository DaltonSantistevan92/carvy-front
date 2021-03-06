<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Permisos</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Usuarios</a></li>
                    <li class="breadcrumb-item active">Permisos</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center form-group flex-column">
                <label for="">Rol</label>
                <select class="form-control" id="select-rol">
                    <!--  <option>option 1</option> -->
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Lista de Permisos</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>Menus</th>
                                    <th>Permisos</th>
                                </tr>
                            </thead>
                            <tbody id="body-menus">
                                <!-- <tr>
                                    <td class="border">
                                        <div class="custom-control custom-checkbox">
                                            <input class="custom-control-input" type="checkbox" id="customCheckbox1"
                                                value="option1">
                                            <label for="customCheckbox1" class="custom-control-label">Inicio</label>
                                        </div>
                                    </td>
                                    <td class="border">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox">
                                            <label class="form-check-label">Checkbox checked</label>
                                        </div>
                                    </td>
                                    <td class="border">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox">
                                            <label class="form-check-label">Checkbox checked</label>
                                        </div>
                                    </td>
                                    <td class="border">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox">
                                            <label class="form-check-label">Checkbox checked</label>
                                        </div>
                                    </td>
                                    <td class="border">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox">
                                            <label class="form-check-label">Checkbox checked</label>
                                        </div>
                                    </td>
                                </tr> -->
                            </tbody>
                        </table>
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

<script src="<?=BASE?>views/dist/js/scripts/gestionPermiso.js"></script>