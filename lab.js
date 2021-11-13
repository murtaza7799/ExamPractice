$(document).ready(function() {
    $("ul").append("<li>NEw element</li>")
    $('ul ').on('click', 'li', function() {
        $(this).fadeOut();
    })
    var ele = $('<li>new element</li>')
    $('ul').append(ele);
})