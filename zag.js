$(document).ready(function() {
            if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
                $("#main").hide();
                $("#MSbug-id").addClass("in");
            }else{
                $("#main").addClass("in");
            }
        });