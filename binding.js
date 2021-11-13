$("document").ready(function() {

    var paragraph = $("<p> This is a paragraph</p>").prop("class", "p1");
    var paragraph1 = $("<p> This is a paragraph</p>").prop("class", "p1");
    var paragraph2 = $("<p> This is a paragraph</p>").prop("class", "p1");

    $('#btnEnable').bind('click mouseover ', function(event) {
        $("#container").addClass('alert-success');
        $("#container").append(paragraph, paragraph1, paragraph2);
        $(".p1").show();



    })
    $('#btnDisable').bind('click mouseout', function(event) {
        //$("#container").removeClass('p');
        $(".p1").fadeOut();

        //  $("#btnClick").off('mouseover');
    })
})