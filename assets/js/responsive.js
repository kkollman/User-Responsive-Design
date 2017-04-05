$(function() {
    console.log('responsive script on');

    //load base theme or cookie-defined
    var mainLoad = function() {
      var theme = Cookies.get('theme');
      var headers = Cookies.get('headers');
      var bodyText = Cookies.get('bodyText');
      var displayimages = Cookies.get('displayimages');
      console.log(theme);
    }

    mainLoad();

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


    imageOpt.change(function() {
        if (this.checked) {
            pageImages.css('display', 'block');
            Cookies.set('displayimages', 'on', { expires: 14 });
            imgStatus.text('On');
        } else {
            pageImages.css('display', 'none');
            Cookies.set('displayimages', 'off', { expires: 14 });
            imgStatus.text('Off');
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


});
