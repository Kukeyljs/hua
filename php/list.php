<?php
    $page=$_GET["page"];
    $num=$_GET["num"];

    $conn = mysqli_connect("localhost","root","root","wzuser");
    $skipNum=$page*$num;
    $sql = "SELECT * FROM huagoods limit $skipNum,$num";

    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) == 0) {
        echo json_encode(array("error" => 1, "data" => "没有数据了"));
    } else {
        $arr = mysqli_fetch_all($result, MYSQL_ASSOC);
        echo json_encode(array("error" => 0, "data" => $arr));
    }

?>