$(document).ready(function () {
    //Magnefic Popup Video
    $(".featured_popup").magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },

            },

            srcAction: 'iframe_src',
        }
    });
});