$(document).ready(function () {
    var formcontent = $("<div>").attr({
        "class": "container"
    });

    var form = $("<form>").attr({
        "method": "GET"
    })

    var button = $("<button>").attr({
        "type": "submit",
        "class": "btn btn-primary"
    }).html("Submit");

    for (let i = 1; i <= 3; i++) {
        var textLabel = $("<label>").attr({
            "for": "textBox" + i
        });
        var textBox = $("<input>").attr({
            "id": "textBox" + i,
            "type": "text",
        });

        var formDiv=$("<div>").attr({
            "class":"form-group"
        });
        $(textLabel,textBox).appendTo(formDiv);
        $(formDiv).appendTo(form);
    }

    $(button).appendTo(form);
    $(form).appendTo(formcontent);

    $("#submit").on("click",function(){
        // $(formcontent).appendTo("#mainContainer");
    })
})