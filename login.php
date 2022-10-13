<?
    include("act/db.php");
    //$pn = str_replace('.php','',end(explode("/",$_SERVER["SCRIPT_FILENAME"])));

    
?>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>로그인</title>

    <link rel="shortcut icon" href="img/favicon_logo.png">

    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/login.css">

    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/index.js"></script>
</head>

<body>
    <header>
        <div class="header_inner clearfix">
            <h1>
                <a href="index.html" id="logo"><img src="img/Logo.png" alt="서울랜드 로고"></a>
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
                        <li><a href="login.php">로그인</a></li>
                        <li><a href="register.php">회원가입</a></li>
                    </ul>
                </form>

                <?} else {?>

                <form action="logout.php" class="logInfo">
                    <ul>
                        <li><?=$_SESSION['username']?>님</li>
                        <li><a href="logout.php">로그아웃</a></li>
                    </ul>

                </form>
                <?}?>

            </div>
        </div>

        <div class="sub">
            <div class="sub_inner">
                <div class="sub_wrap">
                    <ul class="submenu">
                        <li><a href="sub/sub1.html">어트랙션</a></li>
                        <li><a href="sub/sub2.html">공연이벤트</a></li>
                        <li><a href="sub/sub3.html">음식점 및 상점</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="sub/sub4.html">이용 요금</a></li>
                        <li><a href="sub/sub5.html">연간이용권</a></li>
                        <li><a href="sub/sub6.html">이달의 할인</a></li>
                        <li><a href="sub/sub7.html">제휴카드</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="sub/sub8.html">예매</a></li>
                        <li><a href="sub/sub9.html">예매내역</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="sub/sub10.html">오시는 길</a></li>
                        <li><a href="sub/sub11.html">운영/운휴</a></li>
                        <li><a href="sub/sub12.html">편의시설</a></li>
                        <li><a href="sub/sub13.html">단체 프로그램</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="sub/sub14.php">뉴스/공지</a></li>
                        <li><a href="sub/sub15.html">자주하는 질문</a></li>
                        <li><a href="sub/sub16.html">고객의 소리함</a></li>
                    </ul>
                </div>
            </div>
        </div>


    </header>

    <section id="login">
        <div class="inner-section">
            <h2>로그인</h2>

         

            <div class="loginBox">

                <?if(empty($_SESSION['userid'])){?>
                <p class="welcome"><span>Welcome!</span> 꿈과 희망을 열어가는 서울랜드에 오신걸 환영합니다.</p>


                <form action="act/login_check.php" name="logform" method="post">
                    <div class="id"><input type="text" name="userid" placeholder="아이디를 입력해주세요."></div>
                    <div class="password"><input type="text" name="userpw" placeholder="비밀번호를 입력해주세요."></div>
                    <label><input type="checkbox" checked>아이디 저장</label>

                    <div class="btngrp">
                        <input type="submit" value="로그인" class="btn">
                        <input type="submit" value="회원가입" class="btn" onclick="location.href='register.php'; return false;">
                    </div>
                </form>

                <?} else {?>

                <form action="logout.php" method="post" class="sign">
                    <p><span class="user_name"><?=$_SESSION['username']?></span>님 환영합니다!</p>
                    <button>로그아웃</button>
                </form>

                <?}?>

            </div>
          

        </div>

    </section>



    <footer>
        <div class="footer_inner">
            <div class="footer_top clearfix">
                <a href="#"><img src="img/footer_logo.png" alt="푸터 로고" class="flogo"></a>

                <ul class="footer_link">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">인재 채용</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li><a href="#">이메일 무단 수집 거부</a></li>
                    <li><a href="sub/sub16.html">제휴 문의</a></li>
                </ul>

                <ul class="fsns">
                    <li><a href="https://www.youtube.com/channel/UCAbIua3XTxwoJOw_toFg36Q" target="_blank"><img src="img/youtube_icon.png" alt="유튜브"></a></li>
                    <li><a href="https://www.instagram.com/today_seoulland/" target="_blank"><img src="img/insta_icon.png" alt="인스타그램"></a></li>
                    <li><a href="https://www.facebook.com/seoullandpark" target="_blank"><img src="img/facebook_icon.png" alt="페이스북"></a></li>
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