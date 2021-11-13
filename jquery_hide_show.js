$(function() {

    var paragraph = $("<p> This is a paragraph</p>").prop("id", "p").addClass("displayNone");
    var btnShow = $("<button>Show</button>").prop("id", "show");

    $(".container").append(paragraph, btnShow);
    $("#show").click(function() {
        //alert("Show");
        $("#p").toggle().fadeOut();

    })




    // $("#container").append("<p >Paragraph</p>").prop("id", "p");
    //$("#container").append("<button >Show</button>").prop("id", "show");
    //$("#container").append("<button >Hide</button>").prop("id", "hide");



})


function btnToggle() {
    var btn = $("<button>Toggle</button>").prop("id", "toggle");
    var paragraph = $("<p> This is a toggle</p>").prop("id", "paragraph");
    $("btn");

}