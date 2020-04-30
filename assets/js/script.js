// recreated using https://css-tricks.com/css3-clock/
$(document).ready(function(){
  setInterval(function(){
    var seconds = new Date().getSeconds();
    var sdegree = seconds * 6;
    var srotate = "rotate(" + sdegree + "deg)";

    $("#second").css({ "-moz-transform": srotate, "-webkit-transform": srotate, "transform": srotate });
  }, 1000);

  setInterval(function(){
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var hdegree = hours * 30 + (minutes / 2);
    var hrotate = "rotate(" + hdegree + "deg)";

    $("#hour").css({ "-moz-transform": hrotate, "-webkit-transform" : hrotate, "transform": hrotate });
  }, 1000);

  setInterval(function(){
    var minutes = new Date().getMinutes();
    var mdegree = minutes * 6;
    var mrotate = "rotate(" + mdegree + "deg)";

    $("#minute").css({ "-moz-transform": mrotate, "-webkit-transform" : mrotate, "transform": mrotate });
  }, 1000);

});
