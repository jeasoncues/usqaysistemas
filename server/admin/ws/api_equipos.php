<?php

include '../../db.php';

$opcion = $_REQUEST['opcion'];

$db = new DB();

switch ($opcion) {

    case 'getdata':

        $data = [];

        $query = "select * from categoria_equipo";
        $res = $db->execute($query);

        while($row = $res->fetch_array($res)) {

            // $query1 = "select * from equipo where categoria_id = ${row['id']}";
            // $res1 = $db->execute($query1);

            $equipos = [];
            // while ($row1 = $res1->fetch_array($res1)) {
            //     $equipos[] = $row1;
            // }

            $data[] = [
                'id' => $row['id'],
                'nombre' => $row['nombre'],
                'equipos' => $equipos
            ];
        }

        echo json_encode([
            'ok' => true,
            'data' => $data
        ]);

        break;
        
    case 'create':
        
        $categoria_id   = $_REQUEST['categoria_id'];
        $nombre         = $_REQUEST['nombre'];
        $img            = $_REQUEST['img'];
        $precio         = $_REQUEST['precio'];
        $descripcion    = $_REQUEST['descripcion'];
        $stock          = $_REQUEST['stock'];

        $query = "insert into equipo (categoria_id, nombre, img, descripcion, precio, stock, estado) ";
        $query .= " values ($categoria_id, '$nombre', '$img', '$descripcion', $precio, $stock, 1) ";
        $db->execute($query);

        header('Location: ' . $_SERVER['HTTP_REFERER']);
        break;

    case 'update':
        break;

}