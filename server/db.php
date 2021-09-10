<?php 

error_reporting(0);

class DB {

    protected $mysqli;

    public function __construct() 
    {
        $this->mysqli = new mysqli("localhost", "root", "", "web_usqay");

        if ($this->mysqli->connect_errno) {
            printf("Conexión fallida: %s\n", $this->mysqli->connect_error);
            exit();
        }

        return $this->mysqli;
    }

    public function execute($sql)
    {
        $res = $this->mysqli->query($sql);

        if ($res === false) {

            echo json_encode([
                "ok" => false,
                "msg" => "Error al ejecutar: $sql"
            ]);

            return null;
        }

        return $res;
    }

}