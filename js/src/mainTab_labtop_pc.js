


  var mainTab = document.getElementById('mainTab');
  var contain = document.querySelector('.contain');
  var mainTabWrapper = document.querySelector('.main_tab_wrapper');

  var tabBtnWrap = document.querySelector('.tab_btn');
  var tabBtnIcon = document.querySelector('.fa-chevron-down');

  var mainTabInner = document.querySelector('.main_tab_inner');

  // mainTab.getBoundingClientRect().top = 현재 보이는 화면을 기준으로 #mainTab의 좌표값
  //
  var mainTabTop = window.pageYOffset + mainTab.getBoundingClientRect().top;

  // 화면 위치에 따라 값이 달라짐
  console.log( mainTab.getBoundingClientRect().top);

  function FnTabFixed(){
    // 스크롤되는 값과 고정될 메뉴바 위치를 비교해서 고정시킬 class 적용 또는 해제 한다.
    if ( window.pageYOffset >= mainTabTop ) {
      mainTab.classList.add("fixed");
    } else {
      mainTab.classList.remove("fixed");
    }
}
// 스크롤이 되면 실행될 함수 지정
document.addEventListener('scroll',FnTabFixed);