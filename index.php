<?php 
	require 'connect.php';
	$name=$_POST['name'];
	$mobile=$_POST['mobile'];  
	$email=$_POST['email'];
	$insti=$_POST['insti'];
	$yop=$_POST['yop'];
	$url=$_POST['url'];
	
	$stmt = $conn->prepare("INSERT INTO userinfo (name,email,mobile,insti,year_of_passing,link_of_the_video)
    VALUES ('".$name."' , '".$email."' , '".$mobile."' , '".$insti."' , '".$yop."' , '".$url."' )");

    $stmt->execute();
    echo "<script type='text/javascript'>alert('Registered Successfully');</script>";
    header('Location:http://localhost/wildfire/index.html#register');
 ?>

