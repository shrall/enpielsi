<?php
include_once('connect.php');
session_start();
$conn = conn();
$userid = $_SESSION['userid'];
$sql1 = "UPDATE user SET is_login = 0 WHERE user_id='$userid'";
$conn->query($sql1);
session_destroy();

echo "<script>location.href='../index.html'</script>";