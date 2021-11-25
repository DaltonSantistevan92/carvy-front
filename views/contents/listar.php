<style>
  .box-img-usuario{    
    width: 88px;
    height: 90px;
    overflow: hidden;
  }

  .box-img-usuario > img{
    width: 100% !important;
    height: 100% !important;
  }

  .pt-25{
    padding-top: 30px !important;
  }

</style>

<!-- Content Header (Page header) -->
<div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Listar Usuarios</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Gestión de Usuarios</a></li>
              <li class="breadcrumb-item active">Listar Usuarios</li>
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
                <a class="btn btn-primary" href="<?=BASE?>gestion/nuevo">
                    <i class="fas fa-plus mr-2"></i>
                    Agregar Usuario</a>
            </div>
        </div>
        <div class="row">
          <div class="col-12">
          <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Usuarios</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="div" style="overflow: auto;">
                <table id="tabla-usuario" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                            <th style="width: 10px">#</th>
                            <th>Imagen</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>     
                            <th>Usuario</th>
                            <th>Cargo</th>            
                            <th>Acciones</th>   
                  </tr>
                  </thead>
                  <tbody>
                  <!-- <tr>
                    <td class="pt-25">1</td>
                    <td class="pt-25">imagen.jpg</td>
                    <td class="pt-25">Burro</td>
                    <td class="pt-25">Hourse</td>
                    <td class="pt-25">Bu</td>
                    <td class="pt-25">Tuuu crees</td>    
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

  <script src="<?=BASE?>views/dist/js/scripts/listaUsuario.js"></script> 