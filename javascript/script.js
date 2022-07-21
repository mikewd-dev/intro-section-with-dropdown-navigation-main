$(document).ready(function(){
    $('img').on({
        'click': function() {
             var src = ($(this).attr('src') === '/images/icon-arrow-down.svg')
                ? '/images/icon-arrow-up.svg'
                : '/images/icon-arrow-down.svg';
             $(this).attr('src', src);
        }
    });
})
