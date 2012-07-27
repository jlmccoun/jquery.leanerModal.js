
/**
 * @plugin leanModal
 * @description http://leanmodal.finelysliced.com.au/
 **/

(function($){
  $.fn.extend({ 
    leanModal: function(options) {
      var defaults = {
        overlay: 0.5,
        closeButton: '.modal_close'
      };
      var overlay = $('<div id="lean_overlay"></div>');      
      $('body').append(overlay);        
      options = $.extend(defaults, options);
      return this.each(function() {
        var _options = options;
        $(this).click(function(e) {
          var modal_id = _options.id;
          $('#lean_overlay').click(function() { 
            close_modal(modal_id);                    
          });
          $(_options.closeButton).click(function() { 
            close_modal(modal_id);                    
          });                  
          var modal_height = $(modal_id).outerHeight();
          var modal_width = $(modal_id).outerWidth();
          $('#lean_overlay').css({ 'display' : 'block', opacity : 0 });
          $('#lean_overlay').fadeTo(200, _options.overlay);
          $(modal_id).css({ 
            'display' : 'block',
            'position' : 'fixed',
            'opacity' : 0,
            'z-index': 11000,
            'left' : 50 + '%',
            'margin-left' : -(modal_width/2) + 'px',
            'top' : (($(window).height() / 2) - (modal_height / 2)) + 'px'          
          });
          $(modal_id).fadeTo(200, 1);
          e.preventDefault();          
        });     
      });
      function close_modal(modal_id){
        $('#lean_overlay').fadeOut();
        $(modal_id).css({ 'display' : 'none' });
      }
    }
  }); 
})(jQuery);

/* EOF */