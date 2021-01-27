<?php
include_once('connect.php');
session_start();
$_SESSION['status'] = "no";
$username = $_POST['usernameLogin'];
$password = $_POST['passwordLogin'];
$conn = conn();
$sql = "SELECT user_id, user_name, username, password, life, role, status, team_id FROM user WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc()) {
    $playerName = $row['user_name'];
    $teamID = $row['team_id'];
    $playerRole = $row['role'];
    $userid = $row['user_id'];
    $life = $row['life'];
    $status = $row['status'];
}
if ($status != 0){
    echo "<script>alert('Mohon maaf, tim kalian masih belum melakukan aktivasi kartu By.U. Silahkan hubungi panitia. Terima kasih.')</script>";
    echo "<script>location.href='index.html'</script>";
}
$sql1 = "UPDATE user SET is_login = 1 WHERE user_id='$userid'";
$conn->query($sql1);
$sql2 = "SELECT score FROM team WHERE team_id ='$teamID'";
$result2 = $conn->query($sql2);
while ($row1 = $result2->fetch_assoc()) {
    $_SESSION['score'] = $row1['score'];
}
if ($result->num_rows == 1) {
    $_SESSION['userid'] = $userid;
    $_SESSION['username'] = $username;
    $_SESSION['playername'] = $playerName;
    $_SESSION['teamid'] = $teamID;
    $_SESSION['role'] = $playerRole;
    $_SESSION['life'] = $life;
    $_SESSION['status'] = "login";
    if ($playerRole == 1) {
        echo "<script>location.href='playerone/playerone.html'</script>";
    } else if ($playerRole == 2) {
        echo "<script>location.href='playertwo/playertwo.html'</script>";
    } else if ($playerRole == 3) {
        echo "<script>location.href='playerthree/playerthree.html'</script>";
    }
} else {
    echo "<script>alert('login failed')</script>";
    echo "<script>location.href='index.html'</script>";
}
