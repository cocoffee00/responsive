


(function($){

  var artJsonData = $.getJSON('../data/ArtMedia.json');
  var luxJsonData = $.getJSON('../data/LuxuryMedia.json');
  var livingJsonData = $.getJSON('../data/livingMedia.json');

  artJsonData.done(function(aData){
    luxJsonData.done(function(lData){
      livingJsonData.done(function(liData){


        
  var artData = aData;
  var luxData = lData;
  var livingData = liData;
  var jsonDataArr = [artData,luxData,livingData];
  var dataLen = jsonDataArr.length;

  var mainGalleryWrapper = document.querySelector('.main_gallery_wrapper');

  var nextBtn = document.querySelector('.g_next_btn');
  var prevBtn = document.querySelector('.g_prev_btn');

  // mainGalleryWrapper.innerHTML = '<div class="gallery_section_area"><div class="section_title"><dl><dt class="dtTitle"></dt><dd class="ddTitle"></dd></dl></div><div class="gallery_section1 img_cover"><button type="button"><span class="blind">LG SIGNATURE</span></button></div></div><div class="gallery_section2 img_cover"><button type="button"><span class="blind">냉장고</span></button></div><div class="gallery_section3 img_cover"><button type="button"><span class="blind">세탁기</span></button></div>';
  
  var gallerySection1 = document.querySelector('.gallery_section1');
  var gallerySection2 = document.querySelector('.gallery_section2');
  var gallerySection3 = document.querySelector('.gallery_section3');

  var mediaBox = document.querySelectorAll('.img_cover');
  var bgCover = document.querySelectorAll('.bg_cover');

  var mediaDt = document.querySelector('.dtTitle');
  var mediaDd = document.querySelector('.ddTitle');

  var modalWindow = document.querySelector('.modal_window');
  var modalContent = document.querySelector('.modal_content');
  var closeBtn = document.querySelector('.close_btn');
  var modalBg = document.querySelector('.modal_bg');
  var startX, endX, sourceSet;

  var arturl = '../../image/gallery/art/';
  var luxurl = '../../image/gallery/lux/';
  var livingurl = '../../image/gallery/living/';




  // 함수 =================================================//

  //현재 선택된 미디어에 맞는 테이터를 보여줄 함수 
  var artMediaSetFn = function(n) {
    if ( n== 0){
      mainGalleryWrapper.classList.add('ART');
      mainGalleryWrapper.classList.remove('LUX');
      mainGalleryWrapper.classList.remove('LIV')
      mediaDt.innerText = 'Art & LG SIGNATURE';
      mediaDd.innerText = '기술이 예술의 경지에 오르면 작품이 됩니다.  가전, 작품이 되다';
      gallerySection1.style.backgroundImage = "url('"+arturl+artData[0].img+"')";
      gallerySection2.style.backgroundImage = "url('"+arturl+artData[1].img+"')";
      gallerySection3.style.backgroundImage = "url('"+arturl+artData[2].img+"')";
    }
    else if ( n== 1){
      mainGalleryWrapper.classList.add('LUX');
      mainGalleryWrapper.classList.remove('ART');
      mainGalleryWrapper.classList.remove('LIV');
      mediaDt.innerText = 'Luxury & LG SIGNATURE';
      mediaDd.innerText = '기술과 럭셔리함의 만남으로 공간의 품격이 한층 더 높아집니다.';
      gallerySection1.style.backgroundImage = "url('"+luxurl+luxData[0].img+"')";
      gallerySection2.style.backgroundImage = "url('"+luxurl+luxData[1].img+"')";
      gallerySection3.style.backgroundImage = "url('"+luxurl+luxData[2].img+"')";
    }
    else {
      mainGalleryWrapper.classList.add('LIV');
      mainGalleryWrapper.classList.remove('ART');
      mainGalleryWrapper.classList.remove('LUX');
      mediaDt.innerText = 'LIVING & LG SIGNATURE';
      mediaDd.innerText = '세상 가장 순수한 디자인을 만나보세요.';
      gallerySection1.style.backgroundImage = "url('"+livingurl+livingData[0].img+"')";
      gallerySection2.style.backgroundImage = "url('"+livingurl+livingData[1].img+"')";
      gallerySection3.style.backgroundImage = "url('"+livingurl+livingData[2].img+"')";
    }
  }; //mediaSetFn()

 // 모달에서 비디오 재생 함수 = contains()를 사용하여 불러올 데이터의 클래스를 구분하여 보여줄 영상 추가
  var mediaLinkSetFn = (n)=> {
    if (mainGalleryWrapper.classList.contains('ART')){
      modalContent.innerHTML = '<video class="video" controls loop><source src="'+arturl+artData[n].link+'" /></video>'
    }else if (mainGalleryWrapper.classList.contains('LUX')){
      modalContent.innerHTML = '<video class="video" controls loop><source src="'+luxurl+luxData[n].link+'" /></video>'
    }else if(mainGalleryWrapper.classList.contains('LIV')){
      modalContent.innerHTML = '<video class="video" controls loop><source src="'+livingurl+livingData[n].link+'" /></video>'
    };
    sourceSet = document.querySelector('.video');
    sourceSet.style.width = ' 100%';
    sourceSet.style.height = ' 100%';
    if (sourceSet.paused) {
      sourceSet.play();
    };
  }; //mediaLinkSetFn()
 
  // 비디오 정지
  function stopVideoFn(){
    sourceSet.pause();
  }; //function stopVideoFn()

    // 각 미디어의 contents 값 배치  ===== 중복 코드 다시 생각해보기
    var artContentsFn = function(){
      i = 0;
      for ( ; i<dataLen ; i+=1){
          contents = mediaBox[i].querySelector('.contents');
          var artInText = artData[i].contents;
          contents.innerText = artInText;
        }
    }; //artContentsFn()
    var luxContentsFn = function(){
      i = 0;
      for ( ; i<dataLen ; i+=1){
          contents = mediaBox[i].querySelector('.contents');
          var luxInText = luxData[i].contents;
          contents.innerText = luxInText;
        };
    };//luxContentsFn()
    var livContentsFn = function(){
      i = 0;
      for ( ; i<dataLen ; i+=1){
          contents = mediaBox[i].querySelector('.contents');
          var livInText = livingData[i].contents;
          contents.innerText = livInText;
        };
    };//livContentsFn()

  // 블라인드 적용된 contents의 블라인드 제거 및 css주가
  var removeBlindFn = function(n){
    contents = mediaBox[n].querySelector('.contents');
    contents.classList.remove('blind');

    contents.style.color = 'white';
    contents.style.fontSize = '150%';
    contents.style.textDecoration = 'none';
    
    bgCover[n].style.backgroundColor = "rgba(100, 100, 100, 0.5)%";
    bgCover[n].style.transition = "0.3s all";
    bgCover[n].style.opacity = "50";
  };
  

  artMediaSetFn(0);
  artContentsFn()

// __________________________________________________________

var galleryIndicator = document.querySelector('.gallery_indicator');
var indiUl = document.getElementsByTagName('ul')[2];
// var indiLi = indiUl.children;
var y = galleryIndicator.getElementsByTagName('li');



// y.addEventListener('click',e =>{
//   var indiLi = e.target.parentElement.parentElement.children;
//   // console.log(indiLi);
//   var tempArr = [];
//   for( i=0 ; i < indiLi.length ; i+=1){
//     indiLi[i].classList.remove('action')
//   }
//   // for (var i = 0; i < 3; i++) {
//   //       tempArr.push(indiLi[i]);
//   //     };
//   //     return tempArr.filter(function(e){ 
//   //       return e != y; 
//   //     });
//   //     console.log(tempArr);
// })

// function indiFn (n){
//   var tempArr = [];
//   for (var i = 0; i < indiLi.length; i++) {
//     tempArr.push(indiLi[i]);
//   };
//   console.log(n);
//   n=count;
//   tempArr[n].classList.add('action');
//   if( tempArr[n] )
// };

// next slide 함수
function slideNextFn(n){
    n = count;
    count++;
    artMediaSetFn(n);
    if(count >= dataLen){
      count= 0 ;
    };
    if(mainGalleryWrapper.classList.contains('ART')){
      artContentsFn()
    }else if(mainGalleryWrapper.classList.contains('LUX')){
      luxContentsFn()
    }else if(mainGalleryWrapper.classList.contains('LIV')){
      livContentsFn()
    };
}
// prev slide 함수
function slidePrevFn(n){
  n = count;
    count--;
    if( count == 0 ){
      artMediaSetFn(2);
      count = dataLen
    }else if(count == 2){
      artMediaSetFn(1);
    }else if(count == 1){
      artMediaSetFn(0);
    };
    if(mainGalleryWrapper.classList.contains('ART')){
      artContentsFn()
    }else if(mainGalleryWrapper.classList.contains('LUX')){
      luxContentsFn()
    }else if(mainGalleryWrapper.classList.contains('LIV')){
      livContentsFn()
    };
}


 // 이벤트=====================================================//

 // 타블렛 버튼============
  // next button 클릭
  count = 1;
  nextBtn.addEventListener('click',(n)=>{
    slideNextFn(n)
  });
// next button mouseover 버튼 백그라운드 컬러 변경
  nextBtn.addEventListener('mouseover',()=>{
    nextBtn.style.backgroundColor = '#eee7';
  })
  // next button mouseleave 버튼 백그라운드 제거
  nextBtn.addEventListener('mouseleave',()=>{
    nextBtn.style.backgroundColor = '';
  })

  // prev button 클릭
  prevBtn.addEventListener('click',(n)=>{
    slidePrevFn(n);
   });
   // prev button mouseover 버튼 백그라운드 컬러 변경
  prevBtn.addEventListener('mouseover',()=>{
    prevBtn.style.backgroundColor = '#eee7';
  })
   // prev button mouseleave 버튼 백그라운드 제거
   prevBtn.addEventListener('mouseleave',()=>{
    prevBtn.style.backgroundColor = '';
  })
  //======================

  // 스마트폰 인디케이터 이벤트===========
  
  mainGalleryWrapper.addEventListener('touchstart',function(e){
    startX = parseInt( e.changedTouches[0].clientX);
  });
  mainGalleryWrapper.addEventListener('touchend',function(e){
    endX = parseInt( e.changedTouches[0].clientX);
    var resultX = startX - endX;

    // indiFn(e)
    
    if ( resultX > 50){
      slideNextFn(e);
    }else if ( resultX < -50){
      slidePrevFn(e);
    }
  });







// 각 미디어 갤러리 클릭 시 모달창 활성화
gallerySection1.addEventListener('click',function(e){
  e.preventDefault();
  modalWindow.style.display = 'block';
  mediaLinkSetFn(0)
});
gallerySection2.addEventListener('click',function(e){
  e.preventDefault();
  modalWindow.style.display = 'block';
  mediaLinkSetFn(1)
});
gallerySection3.addEventListener('click',function(e){
  e.preventDefault();
  modalWindow.style.display = 'block';
  mediaLinkSetFn(2)
});


// 각 미디어 캘러리 mouseover css 적용
gallerySection1.addEventListener('mouseover',(n)=>{
  gallerySection1.style.backgroundSize = "200%";
  removeBlindFn(0);
});
gallerySection2.addEventListener('mouseover',(n)=>{
  gallerySection2.style.backgroundSize = "200%";
  removeBlindFn(1);
});
gallerySection3.addEventListener('mouseover',(n)=>{
  gallerySection3.style.backgroundSize = "200%";
  removeBlindFn(2);
});


// 각 미디어 캘러리 mouseleave css 해제
gallerySection1.addEventListener('mouseleave',()=>{
  gallerySection1.style.backgroundSize = "";
  bgCover[0].style.opacity = "0";
});
gallerySection2.addEventListener('mouseleave',()=>{
  gallerySection2.style.backgroundSize = "";
  bgCover[1].style.opacity = "0";
});
gallerySection3.addEventListener('mouseleave',()=>{
  gallerySection3.style.backgroundSize = "";
  bgCover[2].style.opacity = "0";
});



// 모달 닫기 버튼 클릭 - 재생중인 동영상 정지 및 모달 창 닫기
closeBtn.addEventListener('click',function(e){
  e.preventDefault();
  stopVideoFn()
  modalWindow.style.display = 'none';
}); //closeBtn

// 모달 이외의 바탕 클릭시 동영상 정지 및 모달 창 닫기
modalBg.addEventListener('click',()=>{
  stopVideoFn()
  modalWindow.style.display = 'none';
})



      })
    })
  })//jsonData.done
})(jQuery);