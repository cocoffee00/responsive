
//json data 불러오기 - jquery

(function($){

  var artJsonData = $.getJSON('../data/artMedia.json');
  var luxJsonData = $.getJSON('../data/LuxuryMedia.json');
  var livingJsonData = $.getJSON('../data/livingMedia.json');

  artJsonData.done(function(aData){
    luxJsonData.done(function(lData){
      livingJsonData.done(function(liData){
  
  var artData = aData;
  var luxData = lData;
  var livingData = liData;

  var mainGalleryWrapper = document.querySelector('.main_gallery_wrapper');

  var nextBtn = document.querySelector('.g_next_btn');
  // var prevBtn = document.querySelector('.g_prev_btn');

  var i = 0;
  
  mainGalleryWrapper.innerHTML = '<div class="gallery_section_area"><div class="section_title"><dl><dt class="dtTitle"></dt><dd class="ddTitle"></dd></dl></div><div class="gallery_section1 img_cover"><button type="button"><span class="blind">LG SIGNATURE</span></button></div></div><div class="gallery_section2 img_cover"><button type="button"><span class="blind">냉장고</span></button></div><div class="gallery_section3 img_cover"><button type="button"><span class="blind">세탁기</span></button></div>';
  
  var gallerySection1 = document.querySelector('.gallery_section1');
  var gallerySection2 = document.querySelector('.gallery_section2');
  var gallerySection3 = document.querySelector('.gallery_section3');

  var mediaDt = document.querySelector('.dtTitle');
  var mediaDd = document.querySelector('.ddTitle');
  
  var modalWindow = document.querySelector('.modal_window');
  var modalContent = document.querySelector('.modal_content');
  var closeBtn = document.querySelector('.close_btn');
  
  var arturl = '../../image/gallery/art/';
  var luxurl = '../../image/gallery/lux/';
  var livingurl = '../../image/gallery/living/';

  var artMediaSetFn = function(n) {
    if ( n== 0){
      mediaDt.innerText = 'Art & LG SIGNATURE';
      mediaDd.innerText = '기술이 예술의 경지에 오르면 작품이 됩니다.  가전, 작품이 되다';
      gallerySection1.style.backgroundImage = "url('"+arturl+artData[0].img+"')";
      gallerySection2.style.backgroundImage = "url('"+arturl+artData[1].img+"')";
      gallerySection3.style.backgroundImage = "url('"+arturl+artData[2].img+"')";
    }
    else if ( n== 1){
      mediaDt.innerText = 'Luxury & LG SIGNATURE';
      mediaDd.innerText = '기술과 럭셔리함의 만남으로 공간의 품격이 한층 더 높아집니다.';
      gallerySection1.style.backgroundImage = "url('"+luxurl+luxData[0].img+"')";
      gallerySection2.style.backgroundImage = "url('"+luxurl+luxData[1].img+"')";
      gallerySection3.style.backgroundImage = "url('"+luxurl+luxData[2].img+"')";
    }
    else {
      mediaDt.innerText = 'LIVING & LG SIGNATURE';
      mediaDd.innerText = '세상 가장 순수한 디자인을 만나보세요.';
      gallerySection1.style.backgroundImage = "url('"+livingurl+livingData[0].img+"')";
      gallerySection2.style.backgroundImage = "url('"+livingurl+livingData[1].img+"')";
      gallerySection3.style.backgroundImage = "url('"+livingurl+livingData[2].img+"')";
    }
  }; //mediaSetFn()

  // 모달에서 비디오 재생 하기 수정
  // var mediaLinkSetFn = (n)=> {
  //   modalContent.innerHTML = '<video class="video" controls loop><source src="'+arturl+artData[n].link+'" /></video>'
  //   var sourceSet = document.querySelector('.video');
  //   sourceSet.style.width = ' 100%';
  //   sourceSet.style.height = ' 100%';
  //   if (sourceSet.paused) {
  //     sourceSet.play();
  //   }
  // };
 
  artMediaSetFn(0);
  
  // next button 클릭 이벤트
  count = 1;
  nextBtn.addEventListener('click',(n)=>{
    n = count;
    ++count;
    artMediaSetFn(n);
    console.log(n);
    if(count >= 3){
      count= 0 ;
    }
  });

  // 각 미디어 갤러리 클릭 시 모달창 활성화
  gallerySection1.addEventListener('click',function(e){
    e.preventDefault();
    modalWindow.style.display = 'block';
    // mediaLinkSetFn(0)
  });
  gallerySection2.addEventListener('click',function(e){
    e.preventDefault();
    modalWindow.style.display = 'block';
    // mediaLinkSetFn(1)
  });
  gallerySection3.addEventListener('click',function(e){
    e.preventDefault();
    modalWindow.style.display = 'block';
    // mediaLinkSetFn(2)
  });

  closeBtn.addEventListener('click',function(e){
    e.preventDefault();
    modalWindow.style.display = 'none';
  });


      })
    })
  })//jsonData.done
})(jQuery);


