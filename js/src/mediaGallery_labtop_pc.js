
//json data 불러오기 - jquery

var mediaGallery = document.getElementById('mediaGallery');

var gallerySection1 = document.querySelector('.gallery_section1');

var modalWindow = document.querySelector('.modal_window');
var closeBtn = document.querySelector('.close_btn');



gallerySection1.addEventListener('click',function(e){
  e.preventDefault();
  console.log('hi');
  modalWindow.style.display = 'block';
});
closeBtn.addEventListener('click',function(e){
  e.preventDefault();
  modalWindow.style.display = 'none';
});


