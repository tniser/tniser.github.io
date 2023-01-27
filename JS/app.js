
/* global $, jQuery, alert */
/*globals $:false */



$(function () {

    /*filter */
let filter=$("[data-filter]");
filter.on("click", function(event){
    event.preventDefault();
      let cat = $(this).data('filter');
    if (cat=='all'){
        $("[data-cat]").removeClass('hide');
    }else{$("[data-cat]").each(function(){

        let workCat = $(this).data('cat');
        if(workCat != cat){
            $(this).addClass('hide');
        }else {
            $(this).removeClass('hide');
        }
    });}

});
    const modalClose = $("[data-close]");
    const modalCall = $("[data-modal]");
    modalCall.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({transform: "rotateX(0)"});
        }, 200);
       $('#worksSlider').slick('setPosition');
    });

    modalClose.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        setTimeout(function(){
            $(modalParent).removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);


    });

    $(".modal").on("click", function(event){

        $(this).removeClass('show')
        $("body").removeClass('no-scroll');
    });
     $(".modal__dialog").on("click", function(event){
         event.stopPropagation();
    });

    /* SLiderr */
    $('#worksSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
    });
    /* Navigation */
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);

    });

});
