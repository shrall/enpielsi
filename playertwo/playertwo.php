<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();
if ($page == 'anna01') {
   $stat = $_POST['stat'];
   $teamid = $_SESSION['teamid'];
   $date = date("Y-m-d H:i:s");
   $stmt = $db->prepare("UPDATE team SET anna01=?, updated_at=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $date);
   $stmt->bindParam(3, $teamid);
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
      $stat = 1;
      $teamid = $_SESSION['teamid'];
      $date = date("Y-m-d H:i:s");
      $stmt = $db->prepare("UPDATE team SET byu=?, updated_at=? WHERE team_id=?");
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
      $date = date("Y-m-d H:i:s");
      $stmt = $db->prepare("UPDATE team SET gate05a=?, updated_at=? WHERE team_id=?");
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
      $date = date("Y-m-d H:i:s");
      $stmt = $db->prepare("UPDATE team SET gate05b=?, updated_at=? WHERE team_id=?");
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
      $date = date("Y-m-d H:i:s");
      $stmt = $db->prepare("UPDATE team SET gate05f=?, updated_at=? WHERE team_id=?");
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
      $date = date("Y-m-d H:i:s");
      $stmt = $db->prepare("UPDATE team SET gate05g=?, updated_at=? WHERE team_id=?");
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
      $date = date("Y-m-d H:i:s");
      $stmt = $db->prepare("UPDATE team SET gate05h=?, updated_at=? WHERE team_id=?");
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

if ($page == 'checkall') {
   $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $counter = 0;
      $counter += $row['anna01'];
      $counter += $row['gate05a'];
      $counter += $row['gate05b'];
      $counter += $row['gate05f'];
      $counter += $row['gate05g'];
      $counter += $row['gate05h'];
      $counter += $row['qrcode'];
      $counter += $row['byu'];
      echo $counter;
   }
}

if ($page == 'finalptwo') {
   $stat = 1;
   $teamid = $_SESSION['teamid'];
   $date = date("Y-m-d H:i:s");
   $stmt = $db->prepare("UPDATE team SET finalptwo=?, updated_at=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $date);
   $stmt->bindParam(3, $teamid);
   $stmt->execute();
}