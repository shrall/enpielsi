<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();
if ($page == 'add') {
  if ($_POST['stage01'] == 1) {
    $stage01 = $_POST['stage01'];
    $teamid = $_SESSION['teamid'];
    $stmt = $db->prepare("UPDATE stage01 SET playerone=? WHERE team_id=?");
    $stmt->bindParam(1, $stage01);
    $stmt->bindParam(2, $teamid);
    $stmt->execute();
  }
}
if ($page == 'checkanna01') {
  $result = $conn->query("SELECT * FROM stage01 WHERE team_id=" . $_SESSION['teamid']);
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $anna01counter = $row['anna01'];
    echo $anna01counter;
  }
}
if ($page == 'reiner01') {
  $stat = $_POST['stat'];
  $result = $conn->query("SELECT reiner01 FROM password WHERE id=1");
  if ($result->num_rows > 0) {
     $row = $result->fetch_assoc();
     $check = $row['reiner01'];
  }
  if ($stat == $check) {
     $check = "yes";
     echo $check;
  } else {
     $check = "no";
     echo $check;
  }
}
if ($page == 'reiner02') {
  $stat = $_POST['stat'];
  $result = $conn->query("SELECT reiner02 FROM password WHERE id=1");
  if ($result->num_rows > 0) {
     $row = $result->fetch_assoc();
     $check = $row['reiner02'];
  }
  if ($stat == $check) {
     $check = "yes";
     echo $check;
  } else {
     $check = "no";
     echo $check;
  }
}
if ($page == 'reiner03') {
  $stat = $_POST['stat'];
  $result = $conn->query("SELECT reiner03 FROM password WHERE id=1");
  if ($result->num_rows > 0) {
     $row = $result->fetch_assoc();
     $check = $row['reiner03'];
  }
  if ($stat == $check) {
     $check = "yes";
     echo $check;
  } else {
     $check = "no";
     echo $check;
  }
}
if ($page == 'reiner04') {
  $stat = $_POST['stat'];
  $result = $conn->query("SELECT reiner04 FROM password WHERE id=1");
  if ($result->num_rows > 0) {
     $row = $result->fetch_assoc();
     $check = $row['reiner04'];
  }
  if ($stat == $check) {
     $check = "yes";
     echo $check;
  } else {
     $check = "no";
     echo $check;
  }
}
if ($page == 'reiner05') {
  $stat = $_POST['stat'];
  $result = $conn->query("SELECT reiner05 FROM password WHERE id=1");
  if ($result->num_rows > 0) {
     $row = $result->fetch_assoc();
     $check = $row['reiner05'];
  }
  if ($stat == $check) {
     $check = "yes";
     echo $check;
  } else {
     $check = "no";
     echo $check;
  }
}