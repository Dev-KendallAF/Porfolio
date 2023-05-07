<?php

class Rutas {
    function CargarControlador($controlador)
    {
        $nombreControlador = ucwords($controlador)."Controller";
        $archivoControlador = './Controlador/'.ucwords($controlador).'Controller.php';
     
        if(!is_file($archivoControlador))
        {
            $archivoControlador='./Controlador/HomeController.php';
            $nombreControlador= 'HomeController';
        }
        
        
        require_once $archivoControlador;
        $control = new $nombreControlador();
        return $control;
    }
    
    function CargarAccion($controlador,$accion,$id=null)
    {
        if(isset($accion) && method_exists($controlador, $accion))
        {
            if($id == null)
            {
                $controlador->$accion();
            }
            
            else
            {
                $controlador->$accion($id);
            }
        } 
        else 
        {
            require_once "./Controlador/HomeController.php";
            $controlador = new HomeController();
            $controlador->Index();
        }	
    }
}
