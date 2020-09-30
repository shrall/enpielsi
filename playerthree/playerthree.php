<?php
require("../functions.php");
if ($page == 'add') {
   $stat = $_POST['stat'];
   $teamid = $_SESSION['teamid'];
   $stmt = $db->prepare("UPDATE stage01 SET playerthree=? WHERE team_id=?");
   $stmt->bindParam(1, $stat);
   $stmt->bindParam(2, $teamid);
   $stmt->execute();
}
