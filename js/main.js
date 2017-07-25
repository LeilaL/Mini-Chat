// $(function(){
//
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
//
// var yyyy = today.getFullYear();
// if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
//       });

var answers = ["oui", "je ne sais pas", "non"];
var message;


$("button").click(function(){
      var message =  $("input:text").val();
      document.getElementByClassName("chat-box").innerHTML+="<div>"
    });


    $("input").keypress(function (x) {
      if (x.which == 13) {
        setTimeout(function(){
          $("user").append($("input").val())
          $("input").val("");}, 200);
        popo()
      }
    })
