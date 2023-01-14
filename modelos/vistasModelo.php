<?php

    class VistasModelo{

        // MODELO OBTENER VISTAS
        protected static function obtener_vistas_modelo($vistas){
            $listaBlanca=[
                'principal'
            ];
            if(in_array($vistas, $listaBlanca)){
                if(is_file("./vistas/contenidos/" . $vistas . ".php")){
                    $contenido="./vistas/contenido/" . $vistas . ".php";
                }else{
                    $contenido = "404";
                }
            }elseif($vistas=="index"){
                $contenido="principal";
            }else{
                $contenido="404";
            }
            return $contenido;
        }
    }