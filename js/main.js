
var answers = ["oui", "je ne sais pas", "non", "pourquoi", "ah bon"];
var message;
var index = -1;

$(document).keypress(function(touche) {
  var entrer = touche.which
  if ( entrer == 13) {
   chat();
  }
});

$("#btn1").click(function(){
  chat();
})

function chat() {
index++
      var message =  $("#textArea").val();
      $(".chat-box").append("<div class='message-box'><div class='picture'><img src='img/mask.jpg' alt='anonymous'/></div><div class='message'><span>Me</span><p>" + message + "</p></div></div>");


setTimeout(function() {
  $(".chat-box").append("<div class='message-box left-img'><div class='picture'><img src='img/images.jpeg' alt='dewey'/></div><div class='message'><span>Him</span><p>" + answers[index] + "</p></div></div>");
}, 2000);

}
