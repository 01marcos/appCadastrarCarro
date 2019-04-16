$(document).on('click','#cadastro',function(){
  var parametros = {
    "marca": $("#marca").val(),
    "modelo": $("#modelo").val(),
    "ano": $("#ano").val(),
    "cor": $("#cor").val(),
    "valor": $("#valor").val()
  }

  $.ajax({
    type:"post",
    url:"https://app-cadastro-carros-marcosvini001.c9users.io/cadastro.php",
    data:parametros,
    success:function(data){
      $("#marca").val("");
      $("#modelo").val("");
      $("#ano").val("");
      $("#cor").val("");
      $("#valor").val("");
      navigator.notification.alert(data);
    },
    error:function(data){
      navigator.notification.alert(data);
    }
  });
});