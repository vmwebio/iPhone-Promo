// Form Select - Choices js
new Choices('#model', {
    searchEnabled: false,
    itemSelectText: '',
});

new Choices('#color', {
    searchEnabled: false,
    itemSelectText: '',
});

// Форма заказа
$('#form-order').on('submit', function (event) {
    event.preventDefault();

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: '',
        dataType: 'html',
        data: $('#form-order').serialize(),
        success: function(data) {
            $('#form-order').html(`<div class="order__success_info"><h4>Ваш заказ отправлен!</h4></div>`);
            $('.order__submit').hide();
            $('#order__title').hide();
            $('.order__fields_info').hide();
        }
    });
});