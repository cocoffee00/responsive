

  var headBox =document.getElementById('headBox');
  var headBoxWrapper = document.querySelector('.head_box_wrapper');
  

  var searchBtnView = document.querySelector('.search_btn_view');

  var form = document.querySelector('form');
  var search = document.getElementById('search');

  var userPart = document.querySelector('.user_btn');
  var userDropDown = document.querySelector('.user_drop_down');
  var dropDownForm = document.querySelectorAll('form')[1];
  var cartPart = document.querySelector('.cart_part');
  var cartPartView = document.querySelector('.cart_part_view');

 
  
  var winWidth = $(window).width();
  
  
  var fnDeviceHeader = function(){
      searchBtnView.addEventListener('mouseover',function(){
        form.classList.add('action');
        searchBtnView.classList.add('off');
      })
      userPart.addEventListener('mouseover',function(){
        userDropDown.classList.add('action');
        cartPartView.style.display = 'none';
      })
      userDropDown.addEventListener('mouseover',function(){
        userDropDown.classList.add('action');
      })
      userDropDown.addEventListener('mouseout',function(){
        userDropDown.classList.remove('action');
      })
      search.addEventListener('mouseout',function(){
        form.classList.remove('action');
        searchBtnView.classList.remove('off');
      })

  }
  fnDeviceHeader();
