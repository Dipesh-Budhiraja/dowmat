$(document).ready(function () {
    $("#login").on('click', function () {
        $('.tiny.modal.login')
            .modal('show')
            ;
    });

    $("#signup").on('click', function () {
        $('.tiny.modal.signup')
            .modal('show')
            ;
    });
});