<?php

    require_once "./config/APP.php";
    require_once "./controladores/vistasControlador.php";

    $controlador = new VistasControlador();
    $controlador->obtener_plantilla_controlador();