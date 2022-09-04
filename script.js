$(document).on('click', '.box-1, .box-2, .box-3, .box-4',function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$(document).on('click', '.box-1',function(){
    $('.img-1').addClass('active-product').siblings('.img-2,.img-3,.img-4').removeClass('active-product');
});

$(document).on('click', '.box-2',function(){
    $('.img-2').addClass('active-product').siblings('.img-1,.img-3,.img-4').removeClass('active-product');
});

$(document).on('click', '.box-3',function(){
    $('.img-3').addClass('active-product').siblings('.img-2,.img-1,.img-4').removeClass('active-product');
});

$(document).on('click', '.box-4',function(){
    $('.img-4').addClass('active-product').siblings('.img-2,.img-3,.img-1').removeClass('active-product');
});