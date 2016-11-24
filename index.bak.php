<?php
 $con=mysqli_connect("localhost","root","","pdetails");
//$con=mysqli_connect("mysql.hostinger.in","u460877898_bmw","81857845","u460877898_bmw");

if (mysqli_connect_errno())

{

echo "Failed to connect to MySQL: " . mysqli_connect_error();

}




$reg = $HTTP_RAW_POST_DATA;


$jagan = (array) json_decode($reg);
$fn = mysqli_real_escape_string($jagan["fn"]);
$ln = mysqli_real_escape_string($jagan["ln"]);
$dt = mysqli_real_escape_string($jagan["dt"]);
$age = mysqli_real_escape_string($jagan["age"]);
$gender = mysqli_real_escape_string($jagan["gender"]);
$phone1 = mysqli_real_escape_string($jagan["phone1"]);
$notes = mysqli_real_escape_string($jagan["notes"]);
//$img="defaul/default_pic.jpg";

	$query = mysqli_query($con,"INSERT INTO pdet VALUES (' ','$fn','$ln','$dt','$age','$gender','$phone1','$notes')"); 
	

mysqli_close($con);


?>