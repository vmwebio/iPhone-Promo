// Custom Select - Choices js
new Choices('#model', {
    searchEnabled: false,
    itemSelectText: '',
});

new Choices('#color', {
    searchEnabled: false,
    itemSelectText: '',
});

// Form Order - Jquery
$('#form-order').on('submit', function (event) {
    event.preventDefault();

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: '',
        dataType: 'html',
        data: $('#form-order').serialize(),
        success: function(data) {
            console.log(data);
            $('#form-order').html(`<div class="order__success_info"><h4>Ваш заказ отправлен!</h4></div>`);
            $('.order__submit').hide();
            $('#order').hide();
            $('.order__fields_info').hide();
        }
    })
});

