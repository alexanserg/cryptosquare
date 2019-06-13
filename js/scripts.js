


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var userInput = $("input:text[name=userInput]").val();
    var lowerCase = userInput.toLowerCase();
    var newArr = [];

    // var letterArray = lowerCase.split('').SOMEMETHODTHATFILTERSLETTERS()

    var firstSplit = lowerCase.split(" ")
    var firstJoin = firstSplit.join("");
    var secondSplit =firstJoin.split("'");
    var secondJoin = secondSplit.join("")
    var thirdSplit = secondJoin.split("")
    console.log(thirdSplit);


    var length = thirdSplit.length;
    var root = Math.sqrt(length);
    var round = Math.ceil(root);
    for (o=0;o<round;o++){
      for (i=o;i < length; i+=round)
      {console.log(i);
        if (newArr.length%5 === 4){
          //console.log(thirdSplit[i]+" ");
         newArr.push(thirdSplit[i]+" ");
       }else{

         newArr.push(thirdSplit[i])
       }
      }}
      $("#result").text(newArr.join(""));
    });
  });
