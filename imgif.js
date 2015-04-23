(function ( $ ) {

  $.fn.imgif = (function(options) {
    var _this = this;

    var defaults = {
      autoStart       : true,
      showThumbnail   : false,
      customThumbnail : '',
      delay           : 0,
      speed           : 41.7,
      loops           : -1
    };
 
    var settings = $.extend( {}, defaults, options );
    
    var loops = 0;
    var index = 0;
    var frames = _this.children("img");
    var animater = false;
 
    var init = function(options) {
        if(settings.autoStart) {
          if(settings.delay>0) {
            setTimeout(function() {
              animater = setInterval(_animate, settings.speed);
            }, settings.delay);
          } else {
            animater = setInterval(_animate, settings.speed);
          }
        } else if(settings.showThumbnail) {
          if(settings.customThumbnail != '') {
            _this.prepend(frames.eq(0));
            frames.eq(0).addClass('imgifThumbnail');
            frames.eq(0).attr('src', settings.customThumbnail);
            frames.eq(0).show();
          } else {
            frames.eq(0).show();
          }
        }
    };

    var play = function() {
      if(animater) { return false; }
      $('.imgifThumbnail').remove();
      animater = setInterval(_animate, settings.speed);
    };

    var pause = function() {
      clearInterval(animater);
      animater = false;
    };

    var stop = function() {
      clearInterval(animater);
      animater = false;
      index = 0;
      loops = 0;
      frames.hide();
      if(settings.showThumbnail) {
        if(settings.customThumbnail) {
          _this.prepend(frames.eq(0));
          frames.eq(0).addClass('imgifThumbnail');
          frames.eq(0).attr('src', settings.customThumbnail);
          frames.eq(0).show();
        } else {
          frames.eq(0).show();
        }
      }
    };

    var hide = function() {
      pause();
      _this.hide();
    };

    var show = function() {
      play();
      _this.show();
    };

    var _animate = function() {
      frames.hide();
      frames.eq(index).show();
      index++;
      if(index == frames.length) { 
        index = 0;
        loops++;
      }
      if(loops == settings.loops) { 
        stop();
      }
    };

    //auto init
    init();
    return {
      play  : play,
      pause : pause,
      stop  : stop,
      hide  : hide,
      show  : show
    };
  
  });

}( jQuery ));