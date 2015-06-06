(function ( $ ) {

  $.fn.imgif = (function(options) {
    var _this = this;

    var defaults = {
      loadImages        : false,
      baseURL           : '',
      numFrames         : 0,
      imageType         : 'jpg',
      autoStart         : false,
      thumbnail         : false,
      delay             : 0,
      speed             : 41.7,
      loops             : -1,
      customEventFrame  : -1
    };

    var settings = $.extend( {}, defaults, options );

    var loops = 0;
    var index = 0;
    var frames = _this.children("img");
    var animater = false;

    var init = function(options) {
      if(settings.loadImages) {
        // load all images from baseURL
        _preloadImages();
      } else {
        for(var i = 0; i<settings.numFrames; i++) {
          frames.eq(i).addClass('.imgif_'+i);
        }
        _startImgif();
      }
    };

    var play = function() {
      if(animater) { return false; }
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
    };

    var hide = function() {
      pause();
      _this.hide();
    };

    var show = function() {
      play();
      _this.show();
    };

    var _preloadImages = function() {
      var loaded = 0;
      var loaded_imgs = {};
      for(var i = 0; i<settings.numFrames; i++) {
          $('<img class="imgif_'+i+'" src="'+settings.baseURL+i+'.'+settings.imageType+'" style="display:none;">').load(function() {
            $(this).appendTo(_this);
            loaded++;
            if(loaded == settings.numFrames) {
              frames = _this.children("img");
              _startImgif();
              _this.trigger("loaded");
            }
          });
        }
    };

    var _startImgif = function() {
      if(settings.thumbnail) {
        frames.filter('.imgif_0').show();
      }

      if(settings.autoStart) {
        if(settings.delay>0) {
          setTimeout(function() {
            animater = setInterval(_animate, settings.speed);
          }, settings.delay);
        } else {
          animater = setInterval(_animate, settings.speed);
        }
      }
    }

    var _animate = function() {
      frames.hide();
      // frames.eq(index).show();
      frames.filter('.imgif_'+index).show();
      index++;
      if(index == settings.customEventFrame) {
        _this.trigger("custom");
      }
      if(index == frames.length) {
        index = 0;
        loops++;
        _this.trigger("loop");
      }
      if(loops == settings.loops) {
        _this.trigger("finish");
        pause();
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