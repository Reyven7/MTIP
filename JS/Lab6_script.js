$(document).ready(function() {
    $('#animateCircleButton').click(function() {
        $('#circle').css({
            width: '200px',
            height: '200px',
            backgroundColor: 'blue',
            opacity: 1,
            top: '50px',
            left: '200px'
        });

        $('#circle').css('background-color', 'red');

        // Крок 1: Зменшення розміру до R = 50 пікселів
        $('#circle').animate({
            width: '100px',
            height: '100px'
        }, 1000)

        // Крок 2: Рух у центр екрану
        .animate({
            top: '50%',
            left: '50%',
            marginLeft: '-50px', 
            marginTop: '-50px' 
        }, 1500)

        // Крок 3: Зміна прозорості до 0.8
        .animate({
            opacity: 0.8
        }, 1000)

        // Крок 4: Рух у верхній лівий кут і розчинення
        .animate({
            top: '0',
            left: '0',
            width: '50px',
            height: '50px',
            opacity: 0
        }, 2000);
    });
});