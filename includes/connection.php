<?php
    $dbServername = "localhost";
    $dbUser = "root";
    $dbPassword = "";
    $dbName = "arschool";

    $conn = new mysqli($dbServername, $dbUser, $dbPassword, $dbName);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>