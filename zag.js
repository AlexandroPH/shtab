$(document).ready(function() {
    Core.preloader.queue(
        [
            'img/2/baby.jpg',
            'img/2/baby_backside.jpg',
            'img/2/check_mac-cover.jpg',
            'img/2/check_mac.jpg',
            'img/2/condom.png',
            'img/2/condom-cover.png',
            'img/2/credit_card.png',
            'img/2/credit_card-cover.png',
            'img/2/money.png',
            'img/2/money-cover.png',
            'img/2/visit_card-cover.png',
            'img/2/visit-card.png',
            'img/wood2.jpg',
            'img/portmone.png'
        ]).preload(function(ui)
        {
            if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
               // $("#SpinContainer").removeClass("spinner");
                $("#main").hide();
                $("#MSbug-id").addClass("in");
            }else{
           // $("#SpinContainer").removeClass("spinner");
            $("#main").addClass("in");
           // $("#helpModal").modal();
            }
        });)};