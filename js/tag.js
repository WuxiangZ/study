$(function () {
    $('.ABE').show();
    $('.CPNA').hide();
    $('.tabulation .topbar li').click(function () {
        var index = $(this).index();
        $(this).addClass('activeN');
        $(this).siblings().removeClass('activeN');
        $(this).parent().siblings('div').eq(index).siblings('div').hide();
        $(this).parent().siblings('div').eq(index).show();
    });
    
});



