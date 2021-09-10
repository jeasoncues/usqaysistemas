<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Prospectos</title>
  </head>
  <body>

    <?php 
        include_once 'include/navbar.php';
        require_once '../db.php';

        $db = new DB();
    ?>


    <div class="container">
        <h1>Equipos</h1>
        <hr>
        <div class="card">
            <div class="card-body">
                <form action="ws/api_equipos.php" method="POST">
                    <input type="hidden" name="opcion" value="create">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="">Categoria</label>
                                <select name="categoria_id" id="" class="form-control" required>
                                    <?php 
                                        $query = "select * from categoria_equipo";

                                        $res = $db->execute($query);

                                        while($row = $res->fetch_array()):

                                    ?> 
                                    <option value="<?php echo $row['id'] ?>"><?php echo $row['nombre'] ?></option>
                                    <?php endwhile ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="">Nombre</label>
                                <input type="text" class="form-control" name="nombre" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <div class="form-group">
                                <label for="">Imagen</label>
                                <input type="text" class="form-control" name="img" required>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="form-group">
                                <label for="">Precio (S/)</label>
                                <input type="number" class="form-control" name="precio" required>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="form-group">
                                <label for="">Stock</label>
                                <input type="number" class="form-control" name="stock" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="">Descripción</label>
                                <input type="text" class="form-control" name="descripcion" required>
                            </div>
                        </div>
                    </div>
                    <div class="d-block text-center">
                        <button type="submit" class="btn btn-success">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <div class="container">
        
        <hr>
        <div class="table-responsive">

        <table id="table" class="table table-bordered">

            <thead>
                <th>Categoría</th>
                <th></th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th></th>
            </thead>

            <tbody>

            <?php

            $query = "SELECT equipo.*, categoria_equipo.nombre as categoria_nombre
                from equipo 
                left join categoria_equipo on categoria_equipo.id = equipo.categoria_id";

            $res = $db->execute($query);

            while($row = $res->fetch_array()):

            ?>

            <tr>
                <td><?php echo $row['categoria_nombre'] ?></td>
                <td>
                    <img src="<?php echo $row['img'] ?>" alt="" width="100" height="80">
                </td>
                <td><?php echo $row['nombre'] ?></td>
                <td><?php echo $row['descripcion'] ?></td>
                <td class="text-right">S/ <?php echo $row['precio'] ?></td>
                <td class="text-right"><?php echo $row['stock'] ?></td>
                <td class="text-center">
                    <i class="fa fa-edit text-warning"></i>
                    <i class="fa fa-trash text-danger"></i>
                </td>
            </tr>

            <?php endwhile ?>

            </tbody>
            </table>

        </div>

    </div>

    
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.css">
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.js"></script>

    <script>

        $(document).ready( function () {
            $('#table').DataTable();
        } );
    </script>

  </body>
</html>