$('document').ready(function(){
    /* lightbox */
    /* baguetteBox.run('gallery', {
        animation: 'fadeIn',
        noScrollbars: true
    }); */

    /* simple lightbox */
    /* $('.gallery a').simpleLightbox(); */

    $('.slider').cycle();
    $('.slider').cycle({
        fx: 'scrollHorx',
        timeout: 3000,
        pause: 1
    });

    /* curtainX, blindX, cover, fade, fadeZoom, growX, scrollUp, slideX, toss, uncover, wipe, turnRight, scrollVertz */
});