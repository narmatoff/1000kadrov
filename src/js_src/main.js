Pace.on('done', function() {
    console.log('main.js');

    var swiper_news = new Swiper('.news_slider', {
        //    pagination: '.swiper-pagination',
        nextButton: '.swiper_block_slider_nav_next',
        prevButton: '.swiper_block_slider_nav_prev',
        autoplay: 6000,
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 76
    });



    // This will create a single gallery from all elements that have class "gallery-item"

    $('.bigpic').magnificPopup({
        removalDelay: 800,
        mainClass: 'mfp-fade',
        type: 'image',
        gallery: {
            enabled: true
        }
    });





    $('.ajax_popup').magnificPopup({
        removalDelay: 100,
        mainClass: 'ajax-popup',
        type: 'ajax',
        ajax: {
            settings: null, // Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
            // For example:
            // settings: {cache:false, async:false}

            cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
            tError: '<a href="%url%">Контент</a> не может быть загружен.' //  Error message, can contain %curr% and %total% tags if gallery is enabled
        },
        callbacks: {
            parseAjax: function(mfpResponse) {
                // mfpResponse.data is a "data" object from ajax "success" callback
                // for simple HTML file, it will be just String
                // You may modify it to change contents of the popup
                // For example, to show just #some-element:
                // mfpResponse.data = $(mfpResponse.data).find('#some-element');

                // mfpResponse.data must be a String or a DOM (jQuery) element

                // console.log('Ajax content loaded:', mfpResponse);
                console.log('Ajax content loaded');
            },
            ajaxContentAdded: function() {
                // Ajax content is loaded and appended to DOM
                goodSliderGallery();

                // console.log(this.content);
            }
        }
    });





    // скрываем меню при скроле вниз
    if ($("header").is('.header_notmain')) {
        console.debug('is main');

    } else {

        console.debug('not is main');
    }


    // якоря
    $('.anchor').on('click', function(event) {
        var link = $(this).attr('href');
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: $(link).offset().top }, 2000, 'easeInOutExpo');
        return false;
    });


});
