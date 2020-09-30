<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();
if ($page == 'add') {
   $stat = $_POST['stat'];
   $teamid = $_SESSION['teamid'];
   $stmt = $db->prepare("UPDATE stage01 SET playertwo=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $teamid);
   $stmt->execute();
} else if ($page == 'anna01') {
   $stat = $_POST['stat'];
   $teamid = $_SESSION['teamid'];
   $stmt = $db->prepare("UPDATE stage01 SET anna01=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $teamid);
   $stmt->execute();
} else if ($page == 'checkAnna01') {
   $result = $conn->query("SELECT * FROM stage01 WHERE team_id=" . $_SESSION['teamid']);
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $anna01counter = $row['anna01'];
      echo $anna01counter;
   }
}
