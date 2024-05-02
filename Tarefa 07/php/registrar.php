<?php
header("Access-Control-Allow-Origin: *");

$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$correo = $_POST["correo"];
$usuario = $_POST["usuario"];
$clave = $_POST["clave"];
$telefono = $_POST["telefono"];

// Mostrar todos los datos recibidos
echo "Datos correctamente recibidos <br>";
echo "Nombre: " . $nombre . "<br>";
echo "Apellidos: " . $apellidos . "<br>";
echo "Correo: " . $correo . "<br>";
echo "Usuario: " . $usuario . "<br>";
echo "Clave: " . $clave . "<br>";
echo "Teléfono: " . $telefono . "<br>";
?>
