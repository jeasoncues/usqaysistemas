<?php

$file = fopen("archivo.txt", "a");

fwrite($file, json_encode($_POST) . PHP_EOL);

fclose($file);

$data = json_decode(file_get_contents('php://input'), true);

require_once 'db.php';

$email = $_POST['email_buyer'];
$fecha = $_POST['transaction_date'];
$metodo_pago = $_POST['payment_method_name'];
$transaccion_id = $_POST['transaction_id'];
$currency = $_POST['currency'];
$total = $_POST['value'];
$estado = $_POST['state_pol'];
$mensaje_pol = $_POST['response_message_pol'];
$description = $_POST['description'];
$reference = $_POST['reference_sale'];

$temp = explode('_', $reference);

$tipo = implode('_', [$temp[0], $temp[1]]);
$numeracion = $temp[2];

$db = new DB();

$query = "INSERT INTO venta (tipo, numeracion, description, reference, email, fecha, metodo_pago, transaccion_id, currency, total, estado, mensaje_pol) VALUES ";

$query .= "('$tipo', $numeracion, '$description', '$reference', '$email', '$fecha', '$metodo_pago', '$transaccion_id', '$currency', $total, '$estado', '$mensaje_pol')";


$res = $db->execute($query);

echo json_encode([
    "ok" => true,
    "msg" => "Venta registrada!"
]);
