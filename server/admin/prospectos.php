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

        $estados = [
            'VENTA REALIZADA',
            'EN PROCESO'
        ];
    ?>

    <!-- <div class="container">

        <div class="jumbotron">

            <h2 class="text-center">USQAY!</h2>

        </div>
    </div> -->
    
    <div class="container-fluid">
        <h1>Prospectos</h1>
        <hr>

        <div class="table-responsive">

        <table id="table" class="table table-bordered">

            <thead>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Mensaje</th>
                <th>Servicios</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th></th>
            </thead>

            <tbody>

            <?php

            require_once '../db.php';

            $db = new DB();

            $query = "select * from prospecto order by id desc";

            $res = $db->execute($query);

            while($row = $res->fetch_array()):

            ?>

            <tr>
                <td><?php echo $row['nombre'] ?></td>
                <td><?php echo $row['email'] ?></td>
                <td><?php echo $row['telefono'] ?></td>
                <td><?php echo $row['mensaje'] ?></td>
                <td><?php echo $row['servicios'] ?></td>
                <td><?php echo $row['created_at'] ?></td>
                <td><?php echo $estados[$row['estado']] ?></td>
                <td>
                    <button></button>
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