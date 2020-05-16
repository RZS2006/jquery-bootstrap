$("#submit").click(function() {
    var inputval = ($("#input").val());
    if (inputval === "") {
        return
    } else {
        var listitem = '<li class="list-group-item">' + inputval + '<button class="close text-danger">&times;</button></li>';
        $("#list").append(listitem)
        $("#input").val("");
    }
})

$("ul").on('click', ".close", function() {
    $(this).parent().animate({width: "0px", opacity: "0"}, 500, function() {
        $(this).remove();
    });
    Event.stopPropagation();
})

$("ul").on('click', "li", function() {
    $(this).toggleClass("list-group-item-success");
})