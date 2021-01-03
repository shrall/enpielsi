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
      $stat = 1;
      $teamid = $_SESSION['teamid'];
      $date = date("Y-m-d H:i:s");
      $stmt = $db->prepare("UPDATE team SET qrcode=?, updated_at=? WHERE team_id=?");
      $stmt->bindParam(1, $stat);
      $stmt->bindParam(2, $date);
      $stmt->bindParam(3, $teamid);
      $stmt->execute();
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
if ($page == 'checkgate05g') {
   $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $gate05g = $row['gate05g'];
      echo $gate05g;
   }
}
if ($page == 'checkgate05h') {
   $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $gate05h = $row['gate05h'];
      echo $gate05h;
   }
}

if ($page == 'finalpthree') {
   $stat = 1;
   $teamid = $_SESSION['teamid'];
   $date = date("Y-m-d H:i:s");
   $stmt = $db->prepare("UPDATE team SET finalpthree=?, updated_at=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $date);
   $stmt->bindParam(3, $teamid);
   $stmt->execute();
}
