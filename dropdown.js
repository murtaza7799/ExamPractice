$("document").ready(function() {

    var paragraph = $("<button>Link 1</button>").prop("id", "p1").addClass("");
    var paragraph1 = $("<button>Link 1</button>").prop("id", "p2");
    var paragraph2 = $("<button>Link 1</button>").prop("id", "p3");
    var paragraph3 = $("<button>Link 1</button>").prop("id", "p4");
    $("#col1").append(paragraph, paragraph1, paragraph2, paragraph3);

    $("#p1").click(function() {


    })


    // $("#overview").append(paragraph);
    //$("#p1").append("<br><a >Link 1</a><br>", "<a >Link 1</a><br>", "<a >Link 1</a>");



    $("#start").click(function() {
        $("#list").toggle();

    })

    $("#start1").click(function() {
        $("#col").toggle();



    })



})