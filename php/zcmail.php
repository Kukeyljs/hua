<?php
    header("Content-type:text/html;charset=utf-8");
    $usermail=$_POST["mail"];
    $password=$_POST["password"];
    $conn = mysqli_connect("localhost","root","root","wzuser");
    $sql = "INSERT INTO huauser(user_id,user_mail,user_password) VALUES('$usermail','$usermail','$password')";
    $result=mysqli_query($conn,$sql);
    //使用两个定义
    if($result == 1){
        echo json_encode(array("error" => 0, "data" => '当前手机号已注册')); 
    }else{
        echo json_encode(array("error" => 1, "data" => '当前手机号已注册'));
    }
?>