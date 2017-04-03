$(function() {
  console.log('responsive script on');
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
        // console.log('works');
        setColor(theme);
    });

    //image display option
    var imageOpt = $('label.image-setting').find('input');
    var pageImages = $('img, .is-image');
    var imgStatus = $('.image-status');


    imageOpt.change(function() {
      if (this.checked) {
        pageImages.css('display', 'block');
        imgStatus.text('On');

      } else {
        pageImages.css('display', 'none');
        imgStatus.text('Off');
      }
    });


    //
    // font changing
    var headerFontInput = $('.header-setup').find('input');
    var textFontInput = $('.text-setup').find('input');
    var headers = $('.header-font');
    var bodyText = $('.body-font');



    headerFontInput.change(function() {
      font = $(this).data('font');
      switch (font) {
        case 'sans':
          headers.removeClass('serif-font');
          headers.addClass('sans-font');
          break;
        case 'serif':
          headers.removeClass('sans-font');
          headers.addClass('serif-font');
          break;
      }
    });


      textFontInput.change(function() {
        font = $(this).data('font');
        switch (font) {
          case 'sans':
            bodyText.removeClass('serif-font');
            bodyText.addClass('sans-font');
            break;
          case 'serif':
            bodyText.removeClass('sans-font');
            bodyText.addClass('serif-font');
            break;
        }
    });


});
