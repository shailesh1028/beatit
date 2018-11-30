<<?php 
	require 'connect.php';
	$name=$_POST['name'];
	$grpname=$_POST['grp-name'];
	$mobile=$_POST['mobile'];  
	$email=$_POST['email'];
	$insti=$_POST['insti'];
	$size=$_POST['size'];
	$city=$_POST['city'];
	$url=$_POST['url'];
	$n=$size;
	$member2=null;
	$mobile2=null;
	$member3=null;
	$mobile3=null;
	$member4=null;
	$mobile4=null;
	$member5=null;
	$mobile5=null;
	$member6=null;
	$mobile6=null;
	$member7=null;
	$mobile7=null;

	if($n>1){
		$member2=$_POST['member2'];
		$mobile2=$_POST['mobile2'];
	}
	if($n>2){
		$member3=$_POST['member3'];
		$mobile3=$_POST['mobile3'];
	}
	if($n>3){
		$member4=$_POST['member4'];
		$mobile4=$_POST['mobile4'];
	}
	if($n>4){
		$member5=$_POST['member5'];
		$mobile5=$_POST['mobile5'];
	}
	if($n>5){
		$member6=$_POST['member6'];
		$mobile6=$_POST['mobile6'];
	}
	if($n>6){
		$member7=$_POST['member7'];
		$mobile7=$_POST['mobile7'];
	}
	
	$stmt = $conn->prepare("INSERT INTO userinfo (name,grpname,email,mobile,insti,size,city,member2,mobile2,member3,mobile3,member4,mobile4,member5 ,mobile5 ,member6 ,mobile6,member7,mobile7 )
    VALUES ('".$name."' , '".$grpname."' , '".$email."' , '".$mobile."' , '".$insti."' , '".$size."' , '".$city."' , '".$url."' , '".$member2."' , '".$mobile2."' , '".$member3."' , '".$mobile3."' , '".$member4."' , '".$mobile4."' , '".$member5."' , '".$mobile5."' , '".$member6."' , '".$mobile6."' , '".$member7."' , '".$mobile7."')");

    $stmt->execute();
    echo "<script type='text/javascript'>alert('Registered Successfully');</script>";
    header('Location:http://localhost/wildfire/index.html#register');
 ?>

