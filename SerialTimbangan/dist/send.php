<?php
$berat = intval($_GET['berat']);

$con = mysqli_connect('localhost','root','');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="INSERT INTO `hasil_baca`(`Berat`) VALUES ('"$berat"')";
$result = mysqli_query($con,$sql);

mysqli_close($con);
?>