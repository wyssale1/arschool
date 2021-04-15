<?php
    include_once "connection.php";
    session_start();
    $input = json_decode(file_get_contents('php://input'), true);
    $function = $input['function'];

    function createNewQuestionTable($conn, $code) {
        $title = $code . "_questions";
        $sql = "create table $title (
            id int(11) not null PRIMARY KEY AUTO_INCREMENT,
            question varchar(250) not null,
            style int(2) not null
            );";
        if ($conn->query($sql) === TRUE) {
            return TRUE;
        } else {
            return "Error creating table: " . $conn->error;
        }
        $conn->close();
    }

    function createNewAnswerTable($conn, $code) {
        $title = $code . "_answers";
        $sql = "create table $title (
            id int(11) not null PRIMARY KEY AUTO_INCREMENT,
            student varchar(20) not null,
            question int(2) not null,
            answer int(2) not null
            );";
        if ($conn->query($sql) === TRUE) {
            return TRUE;
        } else {
            return "Error creating table: " . $conn->error;
        }
        $conn->close();
    }
    

    if ($function === "teacher-login") {
        $user = $input['name'];
        $success = false;
        while (!$success) {
            $rndInt = rand(0, pow(36, 6) - 1);
            $rndStr = base_convert ($rndInt, 10, 36);
            $rndStr = str_pad($rndStr , 6, "0", STR_PAD_LEFT);
            
            $select = "SELECT * FROM games WHERE code LIKE '$rndStr';";
            $result = mysqli_query($conn, $select);
            if (mysqli_num_rows($result) == 0) {
                $query = "INSERT INTO games (code, name) VALUES('$rndStr', '$user');";
                $end = mysqli_query($conn, $query);
                $success = true;
                $insert = "SELECT * FROM games WHERE code LIKE '$rndStr';";
                $result = mysqli_query($conn, $select);
                while ($teacher = mysqli_fetch_assoc($result)) {
                    if(createNewQuestionTable($conn, $teacher['code']) === TRUE && createNewAnswerTable($conn, $teacher['code']) === TRUE) {
                        $_SESSION['name'] = $teacher['name'];
                        $_SESSION['code'] = $teacher['code'];
                        $_SESSION['role'] = "teacher";
                        echo "success";
                    } else {
                        echo "SQL Failed";
                    }   
                }  
            }
        }
    } elseif ($function == "student-login") {
        $code = $input['code'];
        $select = "SELECT * FROM games WHERE code LIKE '$code';";
        $result = mysqli_query($conn, $select);
        if (mysqli_num_rows($result) == 1) {
            $game = mysqli_fetch_assoc($result);
            if ($game['code'] === $code) {
                $_SESSION['name'] = $input['name'];
                $_SESSION['code'] = $code;
                $_SESSION['role'] = "student";
                echo "success";
            } else {
                echo "failed";
            }
        }
    }
    
    $conn->close();
?>