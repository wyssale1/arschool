<?php
    $title = "Login - AR School";
    $css = "css/login.css";
    $js = "js/login.js";
    include 'head.php';

    if(isset($_SESSION['role'])) {
        header("Location: /");
        die();
    }
?>

    <body>
        <header></header>
        <main>
            <div class="teacher">
                <h2>Lehrer:in</h2>
                <img src="img/teacher.svg" alt="Teacher">
            </div>
            <div class="student">
                <h2>Student:in</h2>
                <img src="img/students.svg" alt="Students">
            </div>
        </main>
        <footer></footer>
        <script src="js/main.js" async defer></script>
        <script src="<?php echo $js;?>" async defer></script>
        <template class="teacher">
            <div class="form login-teacher">
                <h3>Raum erstellen</h3>
                <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.31,9.85,33.16,25,48.31,40.15a5.77,5.77,0,1,1-8.16,8.16L25,33.16,9.85,48.31a5.77,5.77,0,1,1-8.16-8.16L16.84,25,1.69,9.85A5.77,5.77,0,0,1,9.85,1.69L25,16.84,40.15,1.69a5.77,5.77,0,1,1,8.16,8.16Z"/></svg>
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
                <label for="name">Passwort</label>
                <input type="password" name="name" id="name">
                <button id="create-room">Erstellen</button>
            </div>
        </template>
        <template class="student">
            <div class="form login-student">
                <h3>Beitretten</h3>
                <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.31,9.85,33.16,25,48.31,40.15a5.77,5.77,0,1,1-8.16,8.16L25,33.16,9.85,48.31a5.77,5.77,0,1,1-8.16-8.16L16.84,25,1.69,9.85A5.77,5.77,0,0,1,9.85,1.69L25,16.84,40.15,1.69a5.77,5.77,0,1,1,8.16,8.16Z"/></svg>
                <label for="code">Code</label>
                <input type="text" name="code" id="code" placeholder="XXXXXX">
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
                <button id="login">Anmelden</button>
            </div>
        </template>
    </body>

</html>