$(document).ready(function(){
  $("form#test").submit(function(event) {
    var president = parseInt($("select#president").val());
    var minimum = parseInt($("select#minimum").val());
    var abortion = parseInt($("select#abortion").val());
    var tax = parseInt($("select#tax").val());
    var score = president + minimum + abortion + tax;

    if (score > 12) {
      var persuasion = "conservative lunatic"
    } else if(score <= 12 && score > 8) {
      var persuasion = "conservative"
    } else if(score > 5 && score <= 8){
      var persuasion = "moderate"
    }
    else {
        var persuasion = "liberal"
    }

    $("#persuasion").text(persuasion);
    $("#results").show();
    event.preventDefault();
  });



});
