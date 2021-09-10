<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$code = $data['code'];
$monto = $data['monto'];

$db = new DB();

$query = "SELECT
        IFNULL(max(numeracion), 0) as numeracion
    FROM
        venta
    WHERE
        tipo = '$code'";

$res = $db->execute($query);

$numeracion = 0;

if ($row = $res->fetch_array()) {
    $numeracion = $row['numeracion'] + 1;
}

$query = "SELECT
        *
    FROM
        config
    LIMIT 1";

$res = $db->execute($query);

if ($row = $res->fetch_array()) {

    $data = [
        'apiKey'            => $row['apiKey'],
        'merchantId'        => $row['merchantId'],
        'accountId'         => $row['accountId'],
        'currency'          => $row['currency'],
        'responseUrl'       => $row['responseUrl'],
        'confirmationUrl'   => $row['confirmationUrl'],
        'monto'             => $monto,
    ];

    $data['referenceCode'] = $code . '_' . $numeracion;

    $data['key'] = implode('~', [
        $data['apiKey'],
        $data['merchantId'],
        $data['referenceCode'],
        $monto,
        $data['currency'],
    ]);

    $data['signature'] = md5($data['key']);

    $temp = explode('_', $code);

    switch($temp[0]) {
        case 'res':
            $name = "RESTAURANTES";
            break;
        case 'hot':
            $name = "HOTELES";
            break;
        case 'pos':
            $name = "POS";
            break;
        default:
            $name = 'NONE';
    }

    $data['description'] = implode(' ', [
        $name,
        mb_strtoupper($temp[1]),
    ]);

    echo json_encode([
        "ok" => true,
        "data" => $data
    ]);

}
