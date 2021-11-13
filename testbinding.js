$("document").ready(function() {
    var paragrapgh = $("<p> Me Eman</p>").prop('class', 'p2');
    var paragrapgh2 = $("<p> Go to hell</p>").prop('class', 'p2');

    $("#btnEnable").bind('click mouseover', function(event) {
        console.log(event.type);
        $("#inner").addClass('alert-success');
        $("#inner").append(paragrapgh, paragrapgh2);
        $(".p2").show();

    })
    $("#btnDisable").bind('click mouseout', function(event) {
        $(".p2").fadeOut()
        $("#inner").removeClass('alert-success');
    })
})