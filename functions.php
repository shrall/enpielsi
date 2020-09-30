<?php
session_start();
$score100 = 100;
$score50 = 50;
$damage = 1;
$db = new PDO('mysql:host=localhost;dbname=prototypenplc', 'root', '');
$page = isset($_GET['p']) ? $_GET['p'] : '';

function plusscore50($db, $score50){
    $_SESSION['score'] += $score50;
    $score = $_SESSION['score'];
    $teamid = $_SESSION['teamid'];
    $stmt = $db->prepare("UPDATE team SET score=? WHERE team_id=?");
    $stmt->bindParam(1, $score);
    $stmt->bindParam(2, $teamid);
    $stmt->execute();
}

function plusscore100($db, $score100){
    $_SESSION['score'] += $score100;
    $score = $_SESSION['score'];
    $teamid = $_SESSION['teamid'];
    $stmt = $db->prepare("UPDATE team SET score=? WHERE team_id=?");
    $stmt->bindParam(1, $score);
    $stmt->bindParam(2, $teamid);
    $stmt->execute();
}

function minuslife1($db, $damage){
    $_SESSION['life'] -= $damage;
    $life = $_SESSION['life'];
    $userid = $_SESSION['userid'];
    $stmt = $db->prepare("UPDATE user SET life=? WHERE user_id=?");
    $stmt->bindParam(1, $life);
    $stmt->bindParam(2, $userid);
    $stmt->execute();
}