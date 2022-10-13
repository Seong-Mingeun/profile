<?
    include("db.php");

    $sql = "SELECT * from member where userid='{$_POST['userid']}' and userpw='{$_POST['userpw']}'";

    $result = mysqli_query($con, $sql);

    $cnt = mysqli_num_rows($result);

    if($cnt){

        $info = mysqli_fetch_array($result);
        $_SESSION['userid'] = $info['userid'];
        $_SESSION['username'] = $info['username'];

        echo "<script>alert('".$_SESSION['username']."님 환영합니다!');</script>";
        echo "<script>location.href='../index.html';</script>";
    }else{

        echo "<script>alert('로그인 정보를 확인해주세요');</script>";
        echo "<script>history.go(-1);</script>";
    }
?>