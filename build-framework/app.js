$('#login').click(function(){
  var g = G$('John', 'Doe', $('#lang').val());
  $('#logindiv').hide();
  g.HTMLGreeting($('#greeting'), true).log();
})