$(document).ready(function(){
    $('.dropdownCaret').on({
        'click': function() {
             var src = ($(this).attr('src') === '../images/icon-arrow-down.svg')
                ? '.../images/icon-arrow-up.svg'
                : './images/icon-arrow-down.svg';
             $(this).attr('src', src);
        }
    });
})

$(document).ready(function(){
    $('.close-menu').removeClass('close-menu');
    var click = $('.navbar-toggler').click(function(){ 
        $('#ChangeToggle').toggleClass('navbar-toggler-icon close-menu')  
    });
});
