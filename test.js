$(function() {
        // $("#inner").wrap("<h2> this is wrap</h2>").prop('id', 'btn');
        // $("<h1>change h2 with h1</h1>").replaceAll("#btn").prop('id', 'tag');
        // $("#tag").prepend("<h3>It comes first</h3>");
        // $("#tag").append("<p>It comes in the end</p>");
        $("#btnClick").bind('click mouseover mouseout', function(event) {

            if (event.type == 'Click') {

            } else if (event.type == 'mouseover') {

                $("#btnClick").addClass('ButtonStyle');
            } else if (event.type == 'mouseout') {
                $("#btnClick").removeClass('ButtonStyle');

            } else {
                alert("hey");
            }


        })
        $("#btnEnable").bind('click', function(event) {
            $("#btnClick").bind('mouseover', function(event) {
                $("#btnClick").addClass('ButtonStyle');

            })

        })
        $("#btnDisable").bind('click', function(event) {

            $("#btnClick").off('mouseover');


        })

    }


)