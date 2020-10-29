<?php
    header("Content-type:text/html;charset=utf-8");
    $conn = mysqli_connect("localhost","root","root","wzuser");
    //连接数据库
    $sql = "SELECT * FROM user WHERE username='赵六'";
    //因为赵六是主键，所以只需要一个条件，如果有相同的话，要加上其他条件
    //定义sql语句
    $result=mysqli_query($conn,$sql);
    //使用两个定义
    $backArr=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($backArr);
?>
