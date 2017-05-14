# README #


### Путь до gulp lumserv: ###
```
/var/www/virtualhosts/dym.lumserv.ru/www
```

### На продакшене: ###

* Надо поправить пути в html файлах до js в bower_components (сборщик отказывается работать с ignorePath)

### Якоря:
```
    // якоря
    $('.anchor').on('click', function(event) {
        var link = $(this).attr('href');
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: $(link).offset().top }, 2000, 'easeInOutExpo');
        return false;
    });
```
