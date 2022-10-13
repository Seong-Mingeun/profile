<?include("../act/db.php")?>



<?

    $sql = "SELECT * from board 
    where 
    title like '%".$_GET['search']."%' 
    or
    writer like '%".$_GET['search']."%'
    order by no desc";

    $result = mysqli_query($con, $sql);
?>

<?
  //한 페이지 당 데이터 개수
$list_num = 6;

//한 블럭 당 페이지 수
$page_num = 2;

//전체데이터
$total_record = mysqli_num_rows($result);

//현재 페이지
$page = isset($_GET["page"])? $_GET["page"] : 1;

//전체 페이지 수 = 전체 데이터 / 페이지당 데이터 개수
$total_page = ceil($total_record / $list_num);

//전체 블럭 수 = 전체 페이지 수 / 블럭 당 페이지 수 
$total_block = ceil($total_page / $page_num);

/* paging : 현재 블럭 번호 = 현재 페이지 번호 / 블럭 당 페이지 수 */
$now_block = ceil($page / $page_num);

/* paging : 블럭 당 시작 페이지 번호 = (해당 글의 블럭번호 - 1) * 블럭당 페이지 수 + 1 */
$s_pageNum = ($now_block - 1) * $page_num + 1;
// 데이터가 0개인 경우
if($s_pageNum <= 0){
    $s_pageNum = 1;
};

/* paging : 블럭 당 마지막 페이지 번호 = 현재 블럭 번호 * 블럭 당 페이지 수 */
$e_pageNum = $now_block * $page_num;
// 마지막 번호가 전체 페이지 수를 넘지 않도록
if($e_pageNum > $total_page){
    $e_pageNum = $total_page;
};

/* paging : 시작 번호 = (현재 페이지 번호 - 1) * 페이지 당 보여질 데이터 수 */
$start = ($page - 1) * $list_num;

/* paging : 쿼리 작성 - limit 몇번부터, 몇개 */
$sql1 = "select * from board order by no desc limit $start, $list_num;";

/* paging : 쿼리 전송 */
$result1 = mysqli_query($con, $sql1);

/* paging : 글번호 */
$cnt = $start + 1;

?>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>뉴스/공지</title>

   <link rel="shortcut icon" href="../img/favicon_logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/sub14.css">



    <script src="../js/jquery-1.12.4.min.js"></script>
    <script src="../js/jquery-ui.min.js"></script>
    <script src="../js/index.js"></script>
    <script src="js/top.js"></script>
</head>


<body>
    <header>
        <div class="header_inner clearfix">
            <h1>
                <a href="../index.html" id="logo"><img src="../img/Logo.png" alt="서울랜드 로고"></a>
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
                        <li><a href="sub1.html">어트랙션</a></li>
                        <li><a href="sub2.html">공연이벤트</a></li>
                        <li><a href="sub3.html">음식점 및 상점</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="sub4.html">이용 요금</a></li>
                        <li><a href="sub5.html">연간이용권</a></li>
                        <li><a href="sub6.html">이달의 할인</a></li>
                        <li><a href="sub7.html">제휴카드</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="sub8.html">예매</a></li>
                        <li><a href="sub9.html">예매내역</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="sub10.html">오시는 길</a></li>
                        <li><a href="sub11.html">운영/운휴</a></li>
                        <li><a href="sub12.html">편의시설</a></li>
                        <li><a href="sub13.html">단체 프로그램</a></li>
                    </ul>
                    <ul class="submenu">
                        <li><a href="sub14.php">뉴스/공지</a></li>
                        <li><a href="sub15.html">자주하는 질문</a></li>
                        <li><a href="sub16.html">고객의 소리함</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </header>

    <main>
        <div class="main_inner">
            <div class="lnb">
                <ul class="location">
                    <li class="home"><a href="../index.html"><img src="img/sub1/home_icon.png" alt="홈"></a></li>
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

        <article class="board">
            <h2>공지사항</h2>

            <form name="search">
                <div class="search_wrap clearfix">
                    <div class="search_box">

                        <select name="find">
                            <option value=''>전체</option>
                            <option value='title'>제목</option>
                            <option value='writer'>이름</option>
                        </select>

                        <input type="text" name="search" placeholder="검색하고자 하는 키워드를 입력해 주세요.">
                    </div>
                    <button>검색</button>
                </div>
            </form>


            <table>



                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr>

                <?
                while($info = mysqli_fetch_array($result)){
            ?>

                <tr>
                    <td><?=$info['no']?></td>
                    <td>
                        <a href="news/view.php?no=<?=$info['no']?>"><?=$info['title']?></a>
                    </td>
                    <td><?=$info['writer']?></td>
                    <td><?=$info['time']?></td>
                    <td><?=$info['view']?></td>
                </tr>


                <?}?>


            </table>

            <!--pagination-->
            <div class="pagination">

                <? 
/* pager : 페이지 번호 출력 */
for($print_page = $s_pageNum; $print_page <= $e_pageNum; $print_page++){
    if($print_page == $page) {
?>
<a class="pagination_num on"><? echo $print_page; ?></a>
<?} else {
    ?>
                <a href="sub14.php?page=<?echo $print_page; ?>" class="pagination_num">
                    <? echo $print_page; ?>
                </a>
                <? };?>
                <?};?>



            </div>


            <?
            if($_SESSION['userid'] === "seoulland") {
                       
        ?>
            <div class="write_btn clearfix"><button onclick="location.href='news/input.php'">글쓰기</button></div>
            <?
            }
        ?>

        </article>

        <!--TOP버튼-->
        <button id="tbtn" onclick="$('html, body').stop().animate({
        scrollTop: 0
    }, 800, 'easeOutQuad');">TOP</button>

    </section>

    <footer>
        <div class="footer_inner">
            <div class="footer_top clearfix">
                <a href="#"><img src="../img/footer_logo.png" alt="푸터 로고" class="flogo"></a>

                <ul class="footer_link">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">인재 채용</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li><a href="#">이메일 무단 수집 거부</a></li>
                    <li><a href="sub16.html">제휴 문의</a></li>
                </ul>

                <ul class="fsns">
                    <li><a href="https://www.youtube.com/channel/UCAbIua3XTxwoJOw_toFg36Q" target="_blank"><img src="../img/youtube_icon.png" alt="유튜브"></a></li>
                    <li><a href="https://www.instagram.com/today_seoulland/" target="_blank"><img src="../img/insta_icon.png" alt="인스타그램"></a></li>
                    <li><a href="https://www.facebook.com/seoullandpark" target="_blank"><img src="../img/facebook_icon.png" alt="페이스북"></a></li>
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