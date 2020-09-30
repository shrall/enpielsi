<?php
include("connect.php");
require("functions.php");
$conn = conn();
$page = isset($_GET['p']) ? $_GET['p'] : '';
if ($page == 'add') {
    if ($_POST['stage01'] == 1) {
        $result = $conn->query("SELECT * FROM stage01 WHERE team_id=" . $_SESSION['teamid']);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $s01counter = $row['playerone'];
        }
        if ($s01counter == 0) {        
        plusscore100($db, $score100);
        }
    }
}