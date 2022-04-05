(function($){

  var headBox =$('#headBox');
  var headBoxWrapper = document.querySelector('.head_box_wrapper');
  
  // var userNavibar = document.querySelector('.user_navibar')

  var searchBtnView = document.querySelector('.search_btn_view');
  // var search_btn = document.querySelector('.search_btn');

  var form = document.querySelector('form');
  var search = document.getElementById('search');

  var userPart = document.querySelector('.user_btn');
  var userDropDown = document.querySelector('.user_drop_down');
  var dropDownForm = document.querySelectorAll('form')[1];
  var cartPart = document.querySelector('.cart_part');
  var cartPartView = document.querySelector('.cart_part_view');


  
  var winWidth = $(window).width();
  var nowDevice;
  var afterDevice;
  
  var fnDevice = function(device){
    device <= 1023 ? afterDevice = 'tablet' : afterDevice = 'pc';
    if( nowDevice !== afterDevice){
      nowDevice = afterDevice;
      // console.log(nowDevice);
    }
  }
  fnDevice(winWidth);
  
  
  
 
      userPart.addEventListener('mouseover',function(){
        userDropDown.classList.add('action');
        // form.classList.add('action');
        dropDownForm.style.display = 'block';
        cartPartView.style.display = 'block';
        // dropDownForm.style.display = 'block';
        
      })
      userDropDown.addEventListener('mouseover',function(){
        userDropDown.classList.add('action');
        // form.classList.add('action');
        // cartPart.classList.add('action');
      })
      userDropDown.addEventListener('mouseout',function(){
        userDropDown.classList.remove('action');
      })
    


})(jQuery);