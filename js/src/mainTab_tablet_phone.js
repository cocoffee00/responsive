
  var mainTab = document.getElementById('mainTab');
  var mainTabWrapper = document.querySelector('.main_tab_wrapper');
  var tabBtnWrap = document.querySelector('.tab_btn');
  var tabBtnIcon = document.querySelector('.fa-chevron-down');
  var mainTabInner = document.querySelector('.main_tab_inner');


  var TopMenuPosition;
  TopMenuPosition = mainTab.offsetTop;
  function FnTabFixed(){
    // 스크롤되는 값과 고정될 메뉴바 위치를 비교해서 고정시킬 class 적용 또는 해제 한다.
    if ( window.pageYOffset >= TopMenuPosition ) {
      mainTab.classList.add("fixed");
    } else {
      mainTab.classList.remove("fixed");
    }
}
// 스크롤이 되면 실행될 함수 지정
document.addEventListener('scroll',FnTabFixed);



  
  tabBtnWrap.addEventListener('click',function(e){
    e.preventDefault();

    // mainTabWrapper.classList.toggle('action');
    mainTabInner.classList.toggle('action');
    tabBtnWrap.classList.toggle('action');

    
      if(tabBtnWrap.classList.contains('action') === true ){
        tabBtnIcon.style.transform = 'rotate(180deg)';
        tabBtnIcon.style.transition = '0.5s'
        console.log('1:'+ tabBtnWrap.classList.contains('action'));
      }else {
        tabBtnIcon.style.transform = 'rotate(1deg)';
        tabBtnIcon.style.transition = 'all ease 1s'
        console.log('2:'+ tabBtnWrap.classList.contains('action'));
      }
  });