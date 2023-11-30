<?php 
	$db = new mysqli("localhost","alumno","alumno","julio");
	$sql  = "SELECT * FROM `tiempo`";
	$response = $db->query($sql);
	$array = $response->fetch_all();
	header("Content-Type: application/json");
	echo json_encode($array);
?>