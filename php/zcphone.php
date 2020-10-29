<?php
    header("Content-type:text/html;charset=utf-8");
    $userphone=$_GET["phone"];
    $password=$_GET["password"];
    $mail=$_GET["mail"];
    $conn = mysqli_connect("localhost","root","root","wzuser");
    $sql = "INSERT INTO huauser(user_id,user_phone,user_password,user_mail) VALUES('$userphone','$userphone','$password','$mail')";
    $result=mysqli_query($conn,$sql);
    //使用两个定义
    if($result == 1){
        echo "成功添加";
    }else{
        echo "不成功添加";
    }
?>