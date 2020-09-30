<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();
//REALTIME
// $result = $conn->query("SELECT * FROM stage01 WHERE team_id=" . $_SESSION['teamid']);
// if ($result->num_rows > 0) {
//   $row = $result->fetch_assoc();
//   $p2counter = $row['playertwo'];
//   $p3counter = $row['playerthree'];
//   $p1counter = $p2counter . $p3counter;
//   echo $p1counter;
// }
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
if ($page == 'anna01') {
  $result = $conn->query("SELECT * FROM stage01 WHERE team_id=" . $_SESSION['teamid']);
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $anna01counter = $row['anna01'];
    echo $anna01counter;
  }
}