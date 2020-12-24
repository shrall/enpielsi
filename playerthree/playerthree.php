<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();
if ($page == 'androidipad') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT androidipad FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['androidipad'];
   }
   if ($stat == $check) {
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
}
if ($page == 'checkgate05f') {
   $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $gate05f = $row['gate05f'];
      echo $gate05f;
   }
}
