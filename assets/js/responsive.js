$(function() {
    console.log('responsive script on');

    // color changing
    var colorLabel = $('label.color-theme');
    var colorChangers = $('.tocolor');

    var setColor = function(theme) {
        if (theme == 'dark') {
            colorChangers.removeClass('light').addClass('dark');
            Cookies.set('theme', 'dark', { expires: 14 });
        }
        else {
            colorChangers.removeClass('dark');
            Cookies.set('theme', 'light', { expires: 14 });
            // colorChangers.addClass('light');
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

    var showImages = function() {
      pageImages.css('display', 'block');
      imgStatus.text('On');
    }

    var hideImages = function() {
      pageImages.css('display', 'none');
      imgStatus.text('Off');
    }

    imageOpt.change(function() {
        if (this.checked) {
            showImages();
            Cookies.set('displayimages', 'on', { expires: 14 });
        } else {
          hideImages();
          Cookies.set('displayimages', 'off', { expires: 14 });
        }
    });


    //
    // font changing
    var headerFontInput = $('.header-setup').find('input');
    var textFontInput = $('.text-setup').find('input');
    var headers = $('.header-font');
    var bodyText = $('.body-font');


    var fontSwitcher = function(element, font) {
        var elementToChange = "";
        cookieName = element;
        switch (element) {
            case 'bodyText':
                elementToChange = bodyText;
                break;

            case 'headers':
                elementToChange = headers;
                break;
        };
        switch (font) {
            case 'sans':
                elementToChange.removeClass('serif-font').addClass('sans-font');
                break;
            case 'serif':
                elementToChange.removeClass('sans-font').addClass('serif-font');
                break;
        };
        Cookies.set(element, font, { expires: 14 });
    }

    headerFontInput.change(function() {
        font = $(this).data('font');
        fontSwitcher('headers', font);
    });

    textFontInput.change(function() {
        font = $(this).data('font');
        fontSwitcher('bodyText', font);
    });


    //auto-load: base theme or cookie-defined
    var mainLoad = function() {
      var theme = Cookies.get('theme');
      var headers = Cookies.get('headers');
      var bodyText = Cookies.get('bodyText');
      var displayimages = Cookies.get('displayimages');


      if (theme.length > -1) {
        setColor(theme);
        if (theme == 'dark') {
          colorLabel.find('input[data-theme="dark"]').prop('checked', true);
          colorLabel.find('input[data-theme="light"]').prop('checked', false);
        } else if (theme == 'light') {
          colorLabel.find('input[data-theme="light"]').prop('checked', true);
          colorLabel.find('input[data-theme="dark"]').prop('checked', false);
        }
      }

      if (headers.length > -1) {
        fontSwitcher('headers', headers);
        if (headers == 'sans') {
          $('.header-setup').find('input[data-font="sans"]').prop('checked', true);
          $('.header-setup').find('input[data-font="serif"]').prop('checked', false);
        } else if (headers == 'serif') {
          $('.header-setup').find('input[data-font="serif"]').prop('checked', true);
          $('.header-setup').find('input[data-font="sans"]').prop('checked', false);
        }
      }

      if (bodyText.length > -1) {
        fontSwitcher('bodyText', bodyText);
        if (bodyText == 'sans') {
          $('.text-setup').find('input[data-font="sans"]').prop('checked', true);
          $('.text-setup').find('input[data-font="serif"]').prop('checked', false);
        } else if (bodyText == 'serif') {
          $('.text-setup').find('input[data-font="serif"]').prop('checked', true);
          $('.text-setup').find('input[data-font="sans"]').prop('checked', false);
        }
      }

      if (displayimages.length > -1) {
        if (displayimages == 'on') {
          showImages();
          imageOpt.prop('checked', true);
        }
        else if (displayimages == 'off') {
          hideImages();
          imageOpt.prop('checked', false);
        }
      };
    }

    mainLoad();

});
