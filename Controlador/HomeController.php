<?php
session_start();
//modelo
class HomeController 
{
    public function Index()
    {	
        $title = "Home";
        require_once "./Vista/Home/index.php";	
    }
    public function Proceso()
    {
        $title = "Home";
        require_once "./Vista/Home/proceso.php";
    }

    public function EnviarEmail()
    {
        $bl = true;

        if($bl)
        {
            //Exito
            $title = "Home";
            $msjAlert = "1";
            require_once "./Vista/Home/index.php";
        }else
        {
            $title = "Home";
            $msjAlert = "2";
            require_once "./Vista/Home/index.php";
        }


    }

}
