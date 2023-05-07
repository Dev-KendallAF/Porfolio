<?php

require_once './Core/RutaFija.php';
require_once './Core/Rutas.php';

require_once "./Controlador/HomeController.php";

$ruta=new Rutas();

if(isset($_REQUEST['controlador']))
{

    $controlador = $ruta->CargarControlador($_REQUEST['controlador']);
    if(isset($_REQUEST['accion']))
    {
        if(isset($_REQUEST['id']))
        {
            
            $ruta->CargarAccion($controlador, $_REQUEST['accion'],$_REQUEST['id']);
        } 
         else 
        {
            $ruta->CargarAccion($controlador, $_REQUEST['accion']);
        }
    } 
    else 
    {
        $ruta->CargarAccion($controlador, ACCION_PRINCIPAL);
    }
} 
else 
{
    $controlador = $ruta->CargarControlador(CONTROLADOR_PRINCIPAL);
    $accionTmp = ACCION_PRINCIPAL;
    $controlador->$accionTmp();
}
