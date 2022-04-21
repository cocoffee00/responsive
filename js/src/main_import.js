
(function($){
  
  var win = $(window);
  var body = $('body');
  var headBox = $('#headBox');
  var mainTab = $('#mainTab');
  var mediaGallery = $('#mediaGallery');
  var brandPhilosophy = $('#brandPhilosophy');
  
  var baseUrl = "../page/";
  var importPage = ['head_Box.html','mainTab.html','mediaGallery.html','brandPhilosophy.html'];
  
  
  var tab = 1023;
  var winWidth = win.outerWidth();
  
  // 스마트폰+타블렛 / 랩탑+피씨 디자인이 크기 제외 같기 때문에 1023 기준으로 나눔
  // 새로고침 없이 outerWidth로 사이즈  스크립트 적용
  
  
  var winWidth = $(window).width();
    var nowDevice;
    var afterDevice;
    
    var fnDevice = function(device){
      device <= 1023 ? afterDevice = 'tablet' : afterDevice = 'pc';
      if( nowDevice !== afterDevice){
        nowDevice = afterDevice;
      }
    }//fnDevice()
    fnDevice(winWidth);
  
    var fnDeviceHeader = function(device){
      if( device === 'pc'){
        headBox.load(baseUrl+importPage[0],function(){
          body.append('<script src="../js/src/headBox_labtop_pc.js"></script>');
        });
        mainTab.load(baseUrl+importPage[1],function(){
          body.append('<script src="../js/src/mainTab_labtop_pc.js"></script>');
        });
        mediaGallery.load(baseUrl+importPage[2],function(){
          body.append('<script src="../js/src/mediaGallery_labtop_pc.js"></script>');
        });
        brandPhilosophy.load(baseUrl+importPage[3],function(){
          body.append('<script src="../js/src/brandPhilosophy_labtop_pc.js"></script>');
        });
      }else{
        headBox.load(baseUrl+importPage[0],function(){
          body.append('<script src="../js/src/headBox_tablet_phone.js"></script>');
        });
        mainTab.load(baseUrl+importPage[1],function(){
          body.append('<script src="../js/src/mainTab_tablet_phone.js"></script>');
        });
        mediaGallery.load(baseUrl+importPage[2],function(){
          body.append('<script src="../js/src//mediaGallery_tablet_phone.js"></script>');
        });
      }
    }//fnDeviceHeader()
  
    fnDeviceHeader(nowDevice);
  
  })(jQuery);