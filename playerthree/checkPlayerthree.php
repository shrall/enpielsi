<?php
session_start();
if ($_SESSION['status'] != "login"){
	echo "<script>alert('Please login first!')</script>";
	echo "<script>location.href='../index.html'</script>";	
  }else if ($_SESSION['role'] != 3){
	  echo "<script>alert('Please open your own webpage!')</script>";
	  if ($_SESSION['role'] == 1) {
		echo "<script>location.href='../playerone/playerone.html'</script>";
	} else if ($_SESSION['role'] == 2) {
		echo "<script>location.href='../playertwo/playertwo.html'</script>";
	}	
	}
    $playername = $_SESSION['playername'];
    echo $playername;
