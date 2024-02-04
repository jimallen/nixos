var IP = (function(){

  var getInfo = function(ip, cbProcessResponse){
    var url = 'http://ip-api.com/json/' + ip;
    $.getJSON(url)
      .done(function(json){
        cbProcessResponse({
          error: false,
          data: json
        });
      })
      .fail(function(xhr, textStatus, errorThrown){
        cbProcessResponse({
          error: true,
          data: errorThrown
        });
      });
  };


  return {
    getInfo: getInfo
  };

})();
