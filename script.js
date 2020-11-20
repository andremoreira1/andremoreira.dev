$(".fa-facebook").hover(function() {
  $("#talk-box").text("Let's be friends.");
});
$(".fa-twitter").hover(function() {
  $("#talk-box").text("Send a tweet my way.");
});
$(".fa-instagram").hover(function() {
  $("#talk-box").text("Pictures from my travels.");
});
$(".fa-tumblr").hover(function() {
  $("#talk-box").text("This is where I write things.");
});
$(".fa-linkedin").hover(function() {
  $("#talk-box").text("Link up with me.");
});
$(".fa-youtube").hover(function() {
  $("#talk-box").text("Subscribe!");
});
$(".fa-github").hover(function() {
  $("#talk-box").text("Git over here.");
});
$(".fa-fire").hover(function() {
  $("#talk-box").text("Great green globs of greasy grimy gopher guts.");
});
$(".fa-facebook").hover(function() {
  $("#talk-box").text("Let's be friends.");
});
$(".fa").mouseleave(function() {
  $("#talk-box").html("&nbsp;");
});