



  var mainTab = document.getElementById('mainTab');
  var contain = document.querySelector('.contain');
  var mainTabWrapper = document.querySelector('.main_tab_wrapper');

  var tabBtnWrap = document.querySelector('.tab_btn');
  var tabBtnIcon = document.querySelector('.fa-chevron-down');

  var mainTabInner = document.querySelector('.main_tab_inner');

  var tabMenu = mainTabInner.querySelectorAll('button');

  // y축으로 얼마나 스크롤(이동)되었는지 px좌표값을 반환
  var tabTop = window.pageYOffset;
  // console.log(tabTop);

  
  // mainTab.getBoundingClientRect().top = 현재 보이는 화면을 기준으로 #mainTab의 고정 좌표값
  var mainTabTop = window.pageYOffset + mainTab.getBoundingClientRect().top;
  // console.log(mainTabTop);

  // mainTab의 원래 시작점에서 이동한 만큼의 좌표값( mainTab(0) 보다 위로 올라가면 자연수값/ 내려가면 음수값 )
  var mainTabTopScroll = mainTab.getBoundingClientRect().top;
  // 화면 위치에 따라 값이 달라짐
  // console.log(mainTabTopScroll);
  



  //함수_____________________________________________________


  // 일정영역 이상 넘어갈 시 메인탭을 상단에 고정시키는 함수
  function tabFixedFn(){
    //스크롤값과 고정될 메뉴바 위치를 비교해서 고정시킬 class 적용 또는 해제 
    if ( window.pageYOffset >= mainTabTopScroll ) {
      mainTab.classList.add("fixed");
    } else {
      mainTab.classList.remove("fixed");
    };
  };//tabFixedFn()
  
  // 탭 메뉴 클릭시 mainTab article 영역 상단으로 이동한다.
  var scrollTopFn = function(){
    for(var i = 0; i < tabMenu.length; i++){
      tabMenu[i].addEventListener('click',function(){
          window.scrollTo({ top: 900, left: 0, behavior: 'smooth' });
          
      });
    };//for
  };//scrollTopFn()
  

  // 스크롤이 되면 실행될 함수 지정
  document.addEventListener('scroll',tabFixedFn);

  scrollTopFn();







  //==================================================test


//테스트중 ----------!!!


var artGallery = document.getElementById('artGallery');
var mediaGallery = document.getElementById('mediaGallery');
var brandPhilosophy = document.getElementById('brandPhilosophy');
var exhibition = document.getElementById('exhibition');



  function tabClickEventFn(v){

    brandPhilosophy.classList.add('off')
    exhibition.classList.add('off')

    tabMenu[v].addEventListener('click',function(){
      if(v==0){
        console.log('this is 0');
        artGallery.classList.remove('off')
        mediaGallery.classList.remove('off')
        brandPhilosophy.classList.add('off')
        exhibition.classList.add('off')
      }else if( v==1){
        console.log('this is 1');
        brandPhilosophy.classList.remove('off')
        artGallery.classList.add('off')
        mediaGallery.classList.add('off')
        exhibition.classList.add('off')
      }else if( v==2){
        console.log('this is 2');
        exhibition.classList.remove('off')
        artGallery.classList.add('off')
        mediaGallery.classList.add('off')
        brandPhilosophy.classList.add('off')
      }
    });
  };//tabClickEventFn

for(i=0;i<tabMenu.length;i++){
  tabClickEventFn(i)
};
 
