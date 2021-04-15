<?php
    $title = "AR School";
    $css = "css/teacher.css";
    $js ="js/main.js";
    include 'head.php';
    if(!isset($_SESSION['code'])) {
        header("Location: login.php");
        die();
    }
?>
    <body>
        <header><?php echo $_SESSION['role']; ?></header>
        <main></main>
        <footer><a href="logout.php">Log Out</a></footer>
        <script src="js/main.js" async defer></script>
    </body>
</html>