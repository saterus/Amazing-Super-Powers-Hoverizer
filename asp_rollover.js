question = jQuery("img[src$='ASPeasteregg.png']");
bonus_url = question.parent().attr('href');

// http://www.amazingsuperpowers.com/ee/2007-12-06.jpg
// http://www.amazingsuperpowers.com/ee/2007-12-10.jpg
// http://www.amazingsuperpowers.com/ee/2007-11-12.jpg
question.css('opacity', '0');

jQuery("div.nav-random").after('<div id="bonus-button"></div>');
jQuery("div.nav-random").css('margin-left', '110px');
jQuery("div.nav-order").css('margin-left', '330px');

bonus_button = jQuery('#bonus-button');
bonus_button.css({
    "background-image": "url(http://www.amazingsuperpowers.com/ASPeasteregg.png)",
    "float": "left",
    "width": "35px",
    "height": "45px",
    "margin-left": "10px"
  })
  .attr('href', bonus_url);


comic_images = jQuery("table.comic > tbody > tr > td > img");
center = jQuery(jQuery.grep(comic_images, function(e,i){ return jQuery(e).attr('alt').length > 0; }));
orig_url = center.attr('src');

center.before('<img id="bonus-strip"></img>');
bonus = jQuery('#bonus-strip');
bonus.attr('src', bonus_url).css({
  "z-index": "100",
  "display": "none"
});



var timer;
open = false;
timeout = 500;
// if(timer) {
//   clearTimeout(timer);
//   timer = null
// }
// timer = setTimeout(function() {}, timeoutInSecs);


bonus_button.mouseover(function() {
  if(!open) {
    if(timer) {
      clearTimeout(timer);
      timer = null
    }
    timer = setTimeout(function() {
      bonus.slideDown();
      center.slideUp();
      open = true;
      console.log('Handler for .mouseover() called.');
    }, timeout);
  } else {
    bonus.stop(true, false);
    center.stop(true, false);
  }
});


bonus_button.mouseout(function() {
  if(open) {
    if(timer) {
      clearTimeout(timer);
      timer = null
    }
    timer = setTimeout(function() {
      open = false;
      bonus.slideUp();
      center.slideDown();

      console.log('Handler for .mouseout() called.');
    }, timeout);
  } else {
    // bonus.stop(true, false);
    // center.stop(true, false);
  }

});

