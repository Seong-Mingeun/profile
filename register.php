<?
    include("act/db.php");

    //입력받은 데이터 처리하기 
    if(!empty($_POST['userid'])&&!empty($_POST['userpw'])&&!empty($_POST['username'])&&!empty($_POST['userphone'])&&!empty($_POST['useremail'])){

        
        $sql = "INSERT into member (userid, userpw,username,userphone,useremail,nickname,city) 
            values ('{$_POST['userid']}','{$_POST['userpw']}','{$_POST['username']}','{$_POST['userphone']}','{$_POST['useremail']}','{$_POST['nickname']}','{$_POST['city']}')";

            print "<script>alert('회원가입이 완료되었습니다.');</script>";
            echo "<script>location.href='index.html';</script>";
    }
    
    mysqli_query($con, $sql);


?>


<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title>회원가입</title>

    <link rel="shortcut icon" href="img/favicon_logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/register.css">

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
                <ul>
                    <li><a href="login.php">로그인</a></li>
                    <li><a href="register.php">회원가입</a></li>
                </ul>
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

    <section id="join">
        <div class="inner-section">
            <h2>회원가입</h2>

            <div class="joinBox">
                <div class="welcome">
                    <div class="imgBox"><img src="img/icon_arong1.png" alt="아롱이다롱이"></div>

                    <p><span class="title">Welcome! </span><span class="colortxt">꿈과 희망을 열어가는 서울랜드</span>에 오신걸 환영합니다.</p>
                </div>

                <form name="regfrm" method="post">
                    <fieldset class="required">
                        <legend>필수사항 입력</legend>

                        <table>
                            <tr>
                                <th>아이디</th>
                                <td>
                                    <input type="text" name="userid" size="50" placeholder="아이디를 입력해주세요." required>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td>
                                    <input type="password" name="userpw" size="50" placeholder="영문,숫자 혼합한 8~12자리 사이로 입력해주세요." required>
                                </td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td>
                                    <input type="text" name="username" size="35" required>
                                </td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>
                                    <input type="text" name="userphone" size="45" placeholder="번호만 입렵해주세요." required>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td><input type="email" name="useremail" size="50" required></td>
                            </tr>
                        </table>
                    </fieldset>

                    <fieldset class="optional">
                        <legend>선택사항 입력</legend>

                        <table>
                            <tr>
                                <th>닉네임</th>
                                <td>
                                    <input type="text" name="nickname" placeholder="한글 6자리 이내로 입력하세요.">
                                </td>
                            </tr>
                            <tr>
                                <th>지역</th>
                                <td>
                                    <input type="text" name="city">
                                </td>
                            </tr>
                        </table>

                        <p>* 선택항목은 입력하지 않거나 동의하지 않아도 회원가입이 가능합니다. </p>
                    </fieldset>

                    <div class="btngrp">
                        <input type="submit" value="가입하기" class="btn">
                        <input type="reset" value="취소하기" class="btn">
                    </div>
                </form>
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