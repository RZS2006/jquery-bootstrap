$("#submit").click(function() {
    var inputval = ($("#input").val());
    if (inputval === "") {
        return
    } else {
        var listitem = '<li class="list-group-item">' + inputval + '<button class="close text-danger">&times;</button></li>';
        $("#list").append(listitem)
        inputval = "";
    }
})

$("ul").on('click', ".close", function() {
    $(this).parent().fadeOut(500), function() {
        $(this).parent().remove();
    };
})

$("ul").on('click', "li", function() {
    $(this).toggleClass("list-group-item-success");
})