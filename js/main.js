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

$(document).keypress(function() {
  var entrer = touch.which
  if ( entrer == 13) {
   chat();
  }
});

function chat() {

$("#btn1").click(function(){
      var message =  $("#textArea").val();
      $(".chat-box").append("<div class='message-box'><div class='picture'><img src="img/mask.jpg" alt="anonymous"/></div><div class='message'><p>" + message + "</p></div></div>");
    })

setTimeout(function() {
  $(".chat-box").append("<div class='message-box left-img'><div class='picture'><img src="img/images.jpeg" alt="dewey"/></div><div class='message'><p>" + answers + "</p></div></div>");
} 2000);
}
