$(document).ready(function() {
    // Завдання 1: Заміна всіх заголовків H1 на H3
    $('.clickable-header').click(function() {
        $('.clickable-header').each(function() {
            var text = $(this).text(); 
            $(this).replaceWith('<h3 class="clickable-header">' + text + '</h3>'); 
        });
    });

    // Завдання 2: Рухомий блок
    $('#startAnimation').click(function() {
        $('#movingBlock').show().css({ left: '100%', top: '50%', width: '100px', height: '100px', fontSize: '20px', transform: 'translate(-50%, -50%)' }); 
        $('#movingBlock').animate({ left: '50%' }, 2000) 
            .animate({ width: '200px', height: '200px' }, 1000) 
            .animate({ fontSize: '10px' }, 500) 
            .animate({ left: '5%' }, 2000); 
    });

    // Завдання 3: Динамічна форма з чекбоксом
    $('#addKeywordCheckbox').change(function() {
        if ($(this).is(':checked')) {
            $('#keywordField').slideDown(); 
        } else {
            $('#keywordField').slideUp();
        }
    });
});
