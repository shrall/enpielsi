<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();
if ($page == 'anna01') {
   $stat = $_POST['stat'];
   $teamid = $_SESSION['teamid'];
   $stmt = $db->prepare("UPDATE team SET anna01=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $teamid);
   $stmt->execute();
}
if ($page == 'checkAnna01') {
   $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $anna01counter = $row['anna01'];
      echo $anna01counter;
   }
}
if ($page == 'panelpw') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT panelpw FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['panelpw'];
   }
   if ($stat == $check) {
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
}
if ($page == 'anna01pw') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT anna01pw FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['anna01pw'];
   }
   if ($stat == $check) {
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
}
if ($page == 'gate05a') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT gate05a FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['gate05a'];
   }
   if ($stat == $check) {
      $stat = 1;
      $teamid = $_SESSION['teamid'];
      $stmt = $db->prepare("UPDATE team SET gate05a=? WHERE team_id=?");
      $stmt->bindParam(1, $stat);
      $stmt->bindParam(2, $teamid);
      $stmt->execute();
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
}
if ($page == 'gate05b') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT gate05b FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['gate05b'];
   }
   if ($stat == $check) {
      $stat = 1;
      $teamid = $_SESSION['teamid'];
      $stmt = $db->prepare("UPDATE team SET gate05b=? WHERE team_id=?");
      $stmt->bindParam(1, $stat);
      $stmt->bindParam(2, $teamid);
      $stmt->execute();
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
}
if ($page == 'gate05f') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT gate05f FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['gate05f'];
   }
   if ($stat == $check) {
      $stat = 1;
      $teamid = $_SESSION['teamid'];
      $stmt = $db->prepare("UPDATE team SET gate05f=? WHERE team_id=?");
      $stmt->bindParam(1, $stat);
      $stmt->bindParam(2, $teamid);
      $stmt->execute();
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
}
if ($page == 'gate05g') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT gate05g FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['gate05g'];
   }
   if ($stat == $check) {
      $stat = 1;
      $teamid = $_SESSION['teamid'];
      $stmt = $db->prepare("UPDATE team SET gate05g=? WHERE team_id=?");
      $stmt->bindParam(1, $stat);
      $stmt->bindParam(2, $teamid);
      $stmt->execute();
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
}
if ($page == 'gate05h') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT gate05h FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['gate05h'];
   }
   if ($stat == $check) {
      $stat = 1;
      $teamid = $_SESSION['teamid'];
      $stmt = $db->prepare("UPDATE team SET gate05h=? WHERE team_id=?");
      $stmt->bindParam(1, $stat);
      $stmt->bindParam(2, $teamid);
      $stmt->execute();
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
}
