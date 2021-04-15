<?php
    $title = "AR School";
    $css = "css/style.css";
    $js ="js/main.js";
    include 'head.php';
    if(!isset($_SESSION['role'])) {
        header("Location: login");
        die();
    } elseif ($_SESSION['role'] == "teacher") {
        header("Location: teacher");
        die();
    } elseif ($_SESSION['role'] == "student") {
        header("Location: student");
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