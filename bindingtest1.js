$("document").ready(function() {

    var paragraph = $("<p> Hello Section C </p>").prop("class", "p1");
    var paragraph1 = $("<p> Hello Section C </p>").prop("class", "p1");

    $("#buttonEnable").bind('click mouseover', function(event) {
        //alert("buttonEnable");
        $("#inner").addClass('alert-success');
        $("#inner").append(paragraph, paragraph1);
        $(".p1").show();

    })
    $('#buttonDisable').bind('click mouseout', function(event) {
        $(".p1").fadeOut();
    })
})