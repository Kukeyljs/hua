<?php
    header("Content-type:text/plain;charset=utf-8");
    $conn = mysqli_connect("localhost","root","root","wzuser");
    //连接数据库
    $sql = "INSERT INTO user(username,password,nicknames) VALUES('赵六','pw4','赵六1')";
    //定义sql语句
    $result=mysqli_query($conn,$sql);
    //使用两个定义
    if($result == 1){
        echo "成功添加";
    }else{
        echo "不成功添加";
    }
    //在页面上留下结果（1为添加成功，0为添加失败）
?>
