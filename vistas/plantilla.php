<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title><?php echo COMPANY; ?></title>
    <?php include "./vistas/inc/Link.php" ?>
</head>

<body>
    <?php
    require_once "./controladores/vistasControlador.php";
    $IV = new VistasControlador();

    $vistas = $IV->obtener_vistas_controlador();

    if ($vistas == "principal") {
        $vistas = "./vistas/contenidos/principal.php";
    }
    ?>

    <!-- CONTEINER PRINCIPAL -->
    <main>
        <!-- HEADER -->
        <?php include "./vistas/inc/Header.php"; ?>

        <!-- CONTENIDO DE LA PAGINA-->
        <section>
            <?php
            include $vistas;
            ?>
        </section>
    </main>

    <?php
        include "./vistas/inc/Script.php";
    ?>

</body>

</html>