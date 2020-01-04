$(document).ready(function () {
    var image=$("<img>").attr({
        "id":"img1",
        "class":"img-fluid",
        "src":"./images/lotus.jpg",
        "alt":"dynamic image"
       });
       $(image).prependTo(".container");
       $(image).hide();
    $("#btn1").on("click",function(){
       
       //$(image).prependTo(".container");       
       if($(this).html()=="Show")
       {
            $(this).html("Hide");
            image.show();
            $("<p>").attr({
                "class":"text-center"
            }).text("Selected text is "+$('input[name="radiogroup"]:checked').val()).appendTo(".container");
       }
       else{
        $(this).html("Show");
        $(image).hide();
        $("p").remove();
       }
      
       
    //    $(text).appendTo(".container");
    })

    
})