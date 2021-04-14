<?php
    $title = "AR School";
    $css = "css/style.css";
    $js ="js/main.js";
    include 'head.php';
    if(!isset($_SESSION['userid'])) {
        header("Location: login.php");
        die();
    }
?>
<body>
        <header></header>
        <main></main>
        <footer></footer>
        <script src="js/main.js" async defer></script>
    </body>
</html>