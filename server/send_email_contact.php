<?php

error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$data = json_decode(file_get_contents('php://input'), true);

$email_user = "reportes@usqay-cloud.com";
$email_password = "qkghutdrsdakehqn";

require_once 'mailer/Exception.php';
require_once 'mailer/PHPMailer.php';
require_once 'mailer/SMTP.php';
require_once 'db.php';

$_nombre = $data['nombres'];
$_email = $data['email'];
$_telefono = $data['telefono'];
$_servicios = $data['servicios'];
$_mensaje = $data['mensaje'];
$__servicios = "";

$text_servicios = "";

if ($_servicios && is_array($_servicios)) {
    foreach ($_servicios as $s) {
        switch ($s) {
            case 'res':
                $text_servicios .= 'Restaurantes - ';
                break;
            case 'pos':
                $text_servicios .= 'POS - ';
                break;
            case 'hot':
                $text_servicios .= 'Hoteles - ';
                break;
        }
    } 

    $__servicios = implode(",", $_servicios);
}

$db = new DB();

$phpmailer = new PHPMailer\PHPMailer\PHPMailer();

$from_name = "Usqay Web";

// ---------- datos de la cuenta de Gmail -------------------------------
$phpmailer->Username = $email_user;
$phpmailer->Password = $email_password; 
//-----------------------------------------------------------------------
 $phpmailer->SMTPDebug = 1;

$phpmailer->SMTPSecure = 'ssl';
  $phpmailer->Host = 'smtp.gmail.com';
  $phpmailer->Port = '465';

// $phpmailer->IsSMTP(); // use SMTP
$phpmailer->SMTPAuth = true;

$phpmailer->setFrom($phpmailer->Username,$from_name);

// $phpmailer->AddAddress('ventas@sistemausqay.com');
// $phpmailer->AddAddress('administracion@sistemausqay.com');
$phpmailer->AddAddress('jansen.mr6@gmail.com');
// $phpmailer->AddAddress('enriqueventas@hotmail.com');

$phpmailer->Subject = 'Nuevo Solicitud de Contacto';	

$phpmailer->Body .= "

<h1>Nueva Solicitud de Contacto</h1>

<h4>{$_nombre}</h4>
<h4>Email: {$_email}</h4>
<h4>Tel: {$_telefono}</h4>
<h4>Interesado en: {$text_servicios}</h4>

<h4>${_mensaje}</h4>

";

$phpmailer->IsHTML(true);

if ($_nombre) {
    $now = date('Y-m-d');
    $query = "insert into prospecto (nombre, email, telefono, servicios, mensaje, created_at, estado) values ";
    $query .= "('$_nombre', '$_email', '$_telefono', '$__servicios', '$_mensaje', '$now', 1)";
    $db->execute($query);
}

if(!$phpmailer->send()) {
    echo json_encode(["ok" => false, "msg" => 'Mailer Error: ' . $phpmailer->ErrorInfo]);
    exit;
} else {
    echo json_encode(["ok" => true]);
}
