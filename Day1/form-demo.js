$(document).ready(function () {
    $("#userName").on("focus", function () {
        $(this).css({ "background-color": "yellow" });
    });

    $("#submit").on("click", function () {
        var userName=$("#userName").val();
        if(userName.startsWith("an"))
        {
            $("#form").css("background-color","cyan");
            alert("Name starts with an");            
        }
    })
})