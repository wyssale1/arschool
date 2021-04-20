<?php
    session_start();
?>
<!DOCTYPE html>
 <html class="no-js" lang="de-CH">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?php echo $_SESSION['title']; ?></title>
        <meta name="description" content="AR School a app with helps to make interactive tasks">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
        <script src="js/init.js"></script>
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/play.css">
        <link rel="stylesheet" href="<?php echo $css; ?>">
        <link rel="icon" type="image/svg+xml" href="img/favicon.svg">
    </head>
<body>
        <header></header>
        <a-scene embedded arjs markers_start vr-mode-ui="enabled: false">
            <a-entity camera></a-entity>
        </a-scene>
        <footer></footer>
        <script src="js/main.js" async defer></script>
        <script src="js/play.js" defer></script>
        <template id="text-plane"><a-entity text="value: Hello World;"></a-entity></template>
        <template id="a-to-d-modal">
            <div class="modal a-to-d">
                <h3>Antwort geben:</h3>
                <button data-answer="a">A</button>
                <button data-answer="b">B</button>
                <button data-answer="c">C</button>
                <button data-answer="d">D</button>
            </div>
        </template>
    </body>
</html>