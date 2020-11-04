<?php
    header("Content-type:text/html;charset=utf-8");
    $userphone=$_POST["phone"];
    $password=$_POST["password"];
    $conn = mysqli_connect("localhost","root","root","wzuser");
    $sql = "INSERT INTO huauser(user_id,user_phone,user_password) VALUES('$userphone','$userphone','$password')";
    $result=mysqli_query($conn,$sql);
    //使用两个定义
    if($result == 1){
        echo json_encode(array("error" => 0, "data" => '当前手机号已注册')); 
    }else{
        echo json_encode(array("error" => 1, "data" => '当前手机号已注册'));
    }
?>