function ativaScrollSuvave(selector){
    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    });
}

ativaScrollSuvave('a[href*=panel-about]');
ativaScrollSuvave('a[href*=panel-speakers]');
ativaScrollSuvave('a[href*=panel-form]');