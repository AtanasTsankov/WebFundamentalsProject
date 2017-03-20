/**
 * Created by Atanas on 20-Mar-17.
//  */
// var init = function() {
//     var carousel = document.getElementById('carousel'),
//         navButtons = document.querySelectorAll('#navigation button'),
//         panelCount = carousel.children.length,
//         transformProp = Modernizr.prefixed('transform'),
//         theta = 0,
//
//         onNavButtonClick = function( event ){
//             var increment = parseInt( event.target.getAttribute('data-increment') );
//             theta += ( 360 / panelCount ) * increment * -1;
//             carousel.style[ transformProp ] = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
//         };
//
//     for (var i=0; i < 2; i++) {
//         navButtons[i].addEventListener( 'click', onNavButtonClick, false);
//     }
//
// };

window.addEventListener( 'DOMContentLoaded', init, false);

function rotateCarousel(button){
    var carousel = document.getElementById('carousel');
    panelCount = carousel.children.length;
    transformProp = Modernizr.prefixed('transform');
    theta = 0;
    var increment = parseInt( button.getAttribute('data-increment') );
    theta += ( 360 / panelCount ) * increment * -1;
    carousel.style[ transformProp ] = 'translateZ( -288px ) rotateY(' + 1 + 'deg)';
}

