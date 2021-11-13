//$(function() {
//$("#inner").wrap("<h4> Wrap div to h3 tag </h4>").prop('id', 'btn');

//$("<h2> replace h3 tag with h2 tag </h2>").replaceAll("#btn").prop('id', 'tag');

//$("#tag").prepend("<p> this paragraph is prepand function </p>");

//$("#tag").append("<p> this paragraph is append function </p>");

//console.log($('div').prop('yellowDiv'));

$("document").ready(function() {

    $('#buttonClick').bind('click mouseover mouseout', function(event) {
        if (event.type == 'click') {
            console.log(event.target)
        } else if (event.type == 'mouseover') {

            $("#buttonClick").addClass('ButtonStyle');
        } else if (event.type == 'mouseout') {
            $("#buttonClick").removeClass('ButtonStyle');

        }

    })
    $('#buttonEnable').bind('click', function(event) {
        $("#buttonClick").bind('mouseover', function(event) {
            $("#buttonClick").addClass('ButtonStyle');
        })
    })
    $('#buttonDisable').bind('click', function(event) {

        $("#buttonClick").off('mouseover');
    })
})