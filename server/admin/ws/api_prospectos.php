<?php

include '../../db.php';

$opcion = $_REQUEST['opcion'];

$db = new DB();

switch ($opcion) {

    case 'changeStatus':
        
        $id = $_REQUEST['id'];
        $estado = $_REQUEST['estado'];

        $query = "update prospecto set estado = $estado where id = $id";
        $db->execute($query);

        break;

}