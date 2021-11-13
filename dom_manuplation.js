$(function() {
    //change any element to required element

    $("#inner").wrap("<h4 >Warp div to h3 tag</h4>").prop('id', 'btn');
    // replace tag with current tag
    $("<h2> replace h3 tag with h2 tag </h2>").replaceAll("#btn").prop('id', 'tag');
    // prepend function add element at the start of function
    $("#tag").prepend("<p> this is paragraph prepend function</p>");
    // append function add element at the start of element
    $("#tag").append("<p > this is paragraph append function</p>");

    // change element/tag text 
    //$("#tag").text("test");

    $("#tag").attr("class", "ButtonStyle");
})