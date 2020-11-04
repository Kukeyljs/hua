<?php
    header("Content-type:text/html;charset=utf-8");
    $userid=$_POST["userid"];
    $password=$_POST["password"];
    

    $conn = mysqli_connect("localhost","root","root","wzuser");

    $sql = "SELECT * FROM huauser WHERE user_id='$userid' and user_password='$password'";

    $result = mysqli_query($conn, $sql);

    $num = mysqli_num_rows($result);

    // 判定
    if ($num == 0) {
        setcookie("name",123,time(),"/");
        echo json_encode(array("error" => 1, "data" => ''));
    } else {
        setcookie("name",123,time(),"/");
        echo json_encode(array("error" => 1, "data" => ''));
    }
?>