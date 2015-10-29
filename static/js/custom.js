$('.skill_bg a[role="tab"]').on('click',function () {
    $('.skill_bg .col-md-4').removeClass('active');
    $(this).closest('.col-md-4').addClass('active');
});


$('.js-scroll-to-company').on('click',function(e){
    e.preventDefault();
    var elm_select = $(this).attr('href');
    $('body,html').animate({
        scrollTop: $(elm_select).offset().top - 108,
        }, 700
    );
});