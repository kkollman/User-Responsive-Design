$(function() {

    // color changing
    var colorLabel = $('label.color-theme');
    var colorChangers = $('.tocolor');
    var setColor = function(theme) {
        if (theme == 'dark') {
            colorChangers.removeClass('light');
            colorChangers.addClass('dark');

        } else if (theme == 'light') {
            colorChangers.removeClass('dark');
            colorChangers.addClass('light');
        }
    };

    colorLabel.on('click', function() {
        var theme = $(this).find('input').data('theme');
        setColor(theme);
    });

    //image display option
    var imageOpt = $('label.image-setting').find('input');
    var pageImages = $('img, .isImage');


    imageOpt.change(function() {
      if (this.checked) {
        pageImages.css('display', 'none');

      } else {
        pageImages.css('display', 'block');
      }
    });



    font changing
    var fontLabel = on('click', function() {

    })

})
