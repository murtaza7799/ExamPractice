$("document").ready(function() {

    $('#btnClick').bind('click mouseover mouseout', function(event) {

        if (event.type == 'click') {
            console.log("click");

        } else if (event.type == 'mouseout') {
            $('#btnClick').removeClass('ButtonStyle');

        } else if (event.type == 'mouseover') {
            $('#btnClick').addClass('ButtonStyle');
            console.log("mouseover");

        } else {

            alert('No event Click');
        }


    })
    $('#btnEnable').bind('click', function(event) {
        $("#btnClick").bind('mouseover', function(event) {
            $("#btnClick").addClass('ButtonStyle');

        })

    })
    $('#btnDisable').bind('click', function(event) {
        $("#btnClick").off('mouseover');


    })

})