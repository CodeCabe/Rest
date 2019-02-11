$('body').on('click', '.nav-trigger', function() { /** jQuery */
    $(this).toggleClass('on');
    $('.nav-menu').fadeToggle(200);
    $(".title_ema").fadeToggle(200);
});

$('body').on('click', '.nav-trigger-dark', function() {
    $(this).toggleClass('on');
    $('.nav-menu').fadeToggle(200);
    
});

