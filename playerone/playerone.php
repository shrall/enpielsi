<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();
if ($page == 'checkanna01') {
  $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $anna01counter = $row['anna01'];
    echo $anna01counter;
  }
}
if ($page == 'bonuscamera') {
   $stat = $_POST['stat'];
   $teamid = $_SESSION['teamid'];
   $stmt = $db->prepare("UPDATE team SET bonuspoints=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $teamid);
   $stmt->execute();
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
if ($page == 'checkgate05a') {
   $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $gate05a = $row['gate05a'];
      echo $gate05a;
   }
}
if ($page == 'checkgate05b') {
   $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $gate05b = $row['gate05b'];
      echo $gate05b;
   }
}
if ($page == 'finalpone') {
   $stat = 1;
   $teamid = $_SESSION['teamid'];
   $date = date("Y-m-d H:i:s");
   $stmt = $db->prepare("UPDATE team SET finalpone=?, updated_at=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $date);
   $stmt->bindParam(3, $teamid);
   $stmt->execute();
}


if ($page == 'trial') {
   $stat = $_POST['stat'];
   $result = $conn->query("SELECT trial FROM password WHERE id=1");
   if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $check = $row['trial'];
   }
   if ($stat == $check) {
      $check = "yes";
      echo $check;
   } else {
      $check = "no";
      echo $check;
   }
 }