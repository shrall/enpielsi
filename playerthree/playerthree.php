<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();
if ($page == 'add') {
   $stat = $_POST['stat'];
   $teamid = $_SESSION['teamid'];
   $stmt = $db->prepare("UPDATE stage01 SET playerthree=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $teamid);
   $stmt->execute();
}
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