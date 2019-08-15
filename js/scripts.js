$(document).ready(function(){
  $("#animalButton").click(function(event) {
    $('.animalbox').hide();

    if ($("#animal").val()==="armadillo lizard"){
      $(".armadillo").show();
    }
    else if($("#animal").val()==="Red Panda"){
      $(".redpanda").show();
    }
    else if($("#animal").val()==="Black Panther"){
      $(".blackpanther").show();
    }

    event.preventDefault();
  });
});
