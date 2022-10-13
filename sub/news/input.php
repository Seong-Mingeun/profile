<?include("../../act/db.php");?>
<?
    $pn = str_replace('.php','',end(explode("/",$_SERVER["SCRIPT_FILENAME"])));

?>

<?

    if(empty($_SESSION['userid'])){
        print "<script>alert('로그인이 필요합니다.');</script>";
        print "<script>location.href='../sub14.php';</script>";
    }

?>

<?


    if(!empty($_POST['title']) && !empty($_FILES['image']['name'])){

        if($_FILES['image']['name']){
            $imageFullName = strtolower($_FILES['image']['name']);
            $imageNameSlice = explode(".",$imageFullName);
            $imageName = $imageNameSlice[0];
            $imageType = $imageNameSlice[1];
            $image_ext = array('jpg','jpeg','gif','png');
            if(array_search($imageType,$image_ext) === false){
                errMsg('jpg, jpeg, gif, png 확장자만 가능합니다.');
            }
            $dates = date("mdhis",time());
            $newImage = chr(rand(97,122)).chr(rand(97,122)).$dates.rand(1,9).".".$imageType;
            $dir = "image/";
            move_uploaded_file($_FILES['image']['tmp_name'],$dir.$newImage);
            chmod($dir.$newImage,0777);
         }

     
        $sql = "INSERT INTO board (title,writer,image) VALUES ('{$_POST['title']}','{$_SESSION['username']}','{$_FILES['image']['name']}')";

        $result = mysqli_query($con, $sql);



        if($result){
            $last_no = mysqli_insert_id($con);

        }


        print "<script>alert('글이 정상적으로 등록되었습니다.');</script>";
        print "<script>location.href='view.php?no=".$last_no."';</script>";
    }


?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>뉴스/공지</title>

    <link rel="shortcut icon" href="../../img/favicon_logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/input.css">



    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-ui.min.js"></script>
    <script src="../../js/index.js"></script>
    <script src="../js/top.js"></script>
</head>


<body>
    <header>
        <div class="header_inner clearfix">
            <h1>
                <a href="../../index.html" id="logo"><img src="../../img/Logo.png" alt="서울랜드 로고"></a>
            </h1>

            <nav>
                <ul class="gnb">
                    <li><a href="#">즐길거리</a></li>
                    <li><a href="#">요금/혜택</a></li>
                    <li><a href="#">예매/예약</a></li>
                    <li><a href="#">이용가이드</a></li>
                    <li><a href="#">소통서비스</a></li>
                </ul>
            </nav>

            <div class="utility">
            <?if(empty($_SESSION['userid'])){?>
                <form action="act/login_check.php" method="post">
                    <ul>
                        <li><a href="../login.php">로그인</a></li>
                        <li><a href="../register.php">회원가입</a></li>
                    </ul>
                </form>

                <?} else {?>

                <form action="logout.php" class="logInfo">
                    <ul>
                        <li><?=$_SESSION['username']?>님</li>
                        <li><a href="../logout.php">로그아웃</a></li>
                    </ul>

                </form>
                <?}?>
            </div>
        </div>

        <div class="sub">
            <div class="sub_inner">
                <div class="sub_wrap">
                    <ul class="submenu">
                        <li><a href="../sub1.html">어트랙션</a></li>
                        <li><a href="../sub2.html">공연이벤트</a></li>
                        <li><a href="../sub3.html">음식점 및 상점</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="../sub4.html">이용 요금</a></li>
                        <li><a href="../sub5.html">연간이용권</a></li>
                        <li><a href="../sub6.html">이달의 할인</a></li>
                        <li><a href="../sub7.html">제휴카드</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="../sub8.html">예매</a></li>
                        <li><a href="../sub9.html">예매내역</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="../sub10.html">오시는 길</a></li>
                        <li><a href="../sub11.html">운영/운휴</a></li>
                        <li><a href="../sub12.html">편의시설</a></li>
                        <li><a href="../sub13.html">단체 프로그램</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="../sub14.php">뉴스/공지</a></li>
                        <li><a href="../sub15.html">자주하는 질문</a></li>
                        <li><a href="../sub16.html">고객의 소리함</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </header>

    <main>
        <div class="main_inner">
            <div class="lnb">
                <ul class="location">
                    <li class="home"><a href="../../index.html"><img src="../img/sub1/home_icon.png" alt="홈"></a></li>
                    <li>소통서비스</li>
                    <li>뉴스/공지</li>
                </ul>
            </div>

            <div class="main_title">
                <h2>뉴스/공지</h2>
                <p>서울랜드의 <b>뉴스와 공지사항</b>을 확인하세요</p>
            </div>
        </div>

    </main>



    <section>
        <article class="input">

            <h2>글쓰기</h2>
            <div class="input_inner">
                <form name="input_form" method="post" enctype="multipart/form-data">
                    <div class="input_box">
                        <div class="input_wrap clearfix">

                            <div class="title ">
                                <p>제목</p>
                                <input type="text" name="title">
                            </div>

                            <div class="writer">
                                <p>작성자</p>
                                <input type="text" name="writer" value="<?=$_SESSION['username']?>" disabled>
                            </div>

                            <div class="content">
                                <p>내용</p>
                                <input type="file" name="image">
                            </div>

                        
                        </div>


                        <div class="btnGroup">
                                <a href="#" onclick="location.href='../sub14.php'; return false;">목록</a>
                                <input type="submit" value="등록">
                        </div>
                        
                           
                    </div>
                </form>
            </div>

        </article>
                <!--TOP버튼-->
            <button id="tbtn" onclick="$('html, body').stop().animate({
        scrollTop: 0
    }, 800, 'easeOutQuad');">TOP</button>
    </section>





    <footer>
        <div class="footer_inner">
            <div class="footer_top clearfix">
                <a href="#"><img src="../../img/footer_logo.png" alt="푸터 로고" class="flogo"></a>

                <ul class="footer_link">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">인재 채용</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li><a href="#">이메일 무단 수집 거부</a></li>
                    <li><a href="../sub16.html">제휴 문의</a></li>
                </ul>

                <ul class="fsns">
                    <li><a href="https://www.youtube.com/channel/UCAbIua3XTxwoJOw_toFg36Q" target="_blank"><img src="../../img/youtube_icon.png" alt="유튜브"></a></li>
                    <li><a href="https://www.instagram.com/today_seoulland/" target="_blank"><img src="../../img/insta_icon.png" alt="인스타그램"></a></li>
                    <li><a href="https://www.facebook.com/seoullandpark" target="_blank"><img src="../../img/facebook_icon.png" alt="페이스북"></a></li>
                </ul>

            </div>

            <div class="footer_bottom">
                <address>
                    주소 : 13829 경기도 과천시 광명로 181 (주)서울랜드 대표이사 :
                    김대중 개인정보관리 책임자 : 마케팅팀 전형준<br>
                    통신판매업신고번호 : 과천 제 137호 사업자등록번호 : 138-81-04654 안내전화 : 02-509-6000
                    운영자 이메일 : webmaster@seoulland.co.kr
                </address>
                <p class="copyright">Copyright &copy; Seoulland all rights reserved.</p>
            </div>

        </div>
    </footer>
</body></html>