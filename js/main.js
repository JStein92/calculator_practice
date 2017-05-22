
var result;
var hasCalculated;
$('#calculate').click(function(){ //evaluate string
  var calcString = $('#calculations').val();
  //remove NANs
  while(isNaN(calcString[calcString.length-1]) && (calcString.length>0) ){
    calcString = calcString.substring(0,calcString.length-1)
  }
  $('#result').val(eval(calcString));
  $('#calculations').val(calcString);
});



var input = function(integer){ //add input

  var calcString = $('#calculations').val();
  if (calcString.length>0){
    if (!isNaN(calcString[calcString.length-1])){ //if the last character is a number
        $('#calculations').val($('#calculations').val()+integer);
    }
    else if (!isNaN(integer)){ //but you are just trying to add another number
        $('#calculations').val($('#calculations').val()+integer);
    }
  }
  else if (!isNaN(integer)){ // if nothing has been entered yet allow input always
      $('#calculations').val($('#calculations').val()+integer);
  }


}

$('.inputInt').click(function(){
  input($(this).text());
});
$('#add').click(function(){
  input('+');
});
$('#subtract').click(function(){
  input('-');
});
$('#multiply').click(function(){
  input('*');
});
$('#divide').click(function(){
  input('/');
});
$('#backspace').click(function(){
  var calcString = $('#calculations').val();
  if (calcString.length>0){
    calcString = calcString.substring(0,calcString.length-1)
    $('#calculations').val(calcString);
  }

});
$('#clear').click(function(){ //clear
  $('#result').val('');
  $('#calculations').val('');
});
