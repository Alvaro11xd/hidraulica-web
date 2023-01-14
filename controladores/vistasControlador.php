<?php

    require_once "./modelos/vistasModelo.php";

    class VistasControlador extends VistasModelo{

        /* CONTROLADOR OBTENER PLANTILLA*/
        public function obtener_plantilla_controlador(){
            return require_once "./vistas/plantilla.php";
        }

        /* CONTROLADOR OBTENER VISTAS*/
        public function obtener_vistas_controlador(){
            if(isset($_GET['views'])){
                $ruta=explode("/",$_GET['views']);
                $respuesta=VistasModelo::obtener_vistas_modelo($ruta[0]);
            }else{
                $respuesta="principal";
            }

            return $respuesta;
        }
    }