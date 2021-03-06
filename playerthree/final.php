<?php
include_once('../connect.php');
require("../functions.php");
$conn = conn();

if ($page == 'ponename') {
    $result = $conn->query("SELECT user_name FROM user WHERE role = 1 AND team_id =" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $check = $row['user_name'];
    }
    echo $check;
}
if ($page == 'ptwoname') {
    $result = $conn->query("SELECT user_name FROM user WHERE role = 2 AND team_id =" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $check = $row['user_name'];
    }
    echo $check;
}
if ($page == 'pthreename') {
    $result = $conn->query("SELECT user_name FROM user WHERE role = 3 AND team_id =" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $check = $row['user_name'];
    }
    echo $check;
}
if ($page == 'finalpone') {
    $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $p1final = $row['finalpone'];
        echo $p1final;
    }
}
if ($page == 'finalptwo') {
    $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $p2final = $row['finalptwo'];
        echo $p2final;
    }
}
if ($page == 'finalpthree') {
    $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $p3final = $row['finalpthree'];
        echo $p3final;
    }
}

if ($page == 'checkfinal') {
    $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $p1final = $row['finalpone'];
        $p2final = $row['finalptwo'];
        $p3final = $row['finalpthree'];
        $pfinal = $p1final . $p2final . $p3final;
        echo $pfinal;
    }
}

if ($page == 'finalchoice') {
    $stat = $_POST['stat'];
    $teamid = $_SESSION['teamid'];
    $date = date("Y-m-d H:i:s");
    $stmt = $db->prepare("UPDATE team SET pthreechoice=?, updated_at=? WHERE team_id=?");
    $stmt->bindParam(1, $stat);
    $stmt->bindParam(2, $date);
    $stmt->bindParam(3, $teamid);
    $stmt->execute();
}

if ($page == 'finalchoicepone') {
    $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $p1final = $row['ponechoice'];
        echo $p1final;
    }
}
if ($page == 'finalchoiceptwo') {
    $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $p2final = $row['ptwochoice'];
        echo $p2final;
    }
}
if ($page == 'finalchoicepthree') {
    $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $p3final = $row['pthreechoice'];
        echo $p3final;
    }
}

if ($page == 'checkfinalchoice') {
    $result = $conn->query("SELECT * FROM team WHERE team_id=" . $_SESSION['teamid']);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $p1final = $row['ponechoice'];
        $p2final = $row['ptwochoice'];
        $p3final = $row['pthreechoice'];
        $pfinal = $p1final . $p2final . $p3final;
        echo $pfinal;
    }
}

if ($page == 'endingresult') {
    $stat = $_POST['stat'];
    $teamid = $_SESSION['teamid'];
    $stmt = $db->prepare("UPDATE team SET endingresult=? WHERE team_id=?");
    $stmt->bindParam(1, $stat);
    $stmt->bindParam(2, $teamid);
    $stmt->execute();
}