/**
 * LRT API class
 */
var LRT = (function(){

  var exports = {};

  // var API_URL = 'https://plugin.linkresearchtools.com/api/api.php';
  // var _apiKey = '51a5240a0a983abdf0921f189269603c79d';
  var API_URL = 'https://plugin.linkresearchtools.com/v3.000/power_trust/api/api.php';
  var _apiKey = '6a8c1ddc779a8d760d7f4b209a89fc3361d';


  var init = function( apiUrl ){
    API_URL = apiUrl;
  };


  var setKey = function( key ){
    _apiKey = key;
  };


  var getMetrics = function( urls, onSuccess, onError ){
    if (!_apiKey) {
      onError('API key is not specified');
      return;
    }
    var url = API_URL + '?action=get&item=metrics&key=' + _apiKey;
    var params = {};
    urls.map(function(val, index){
      params[ 'url' + (index + 1) ]  = val;
    });
    params.urlcount = urls.length;
    request(url, params,
      {
        continueOnError: true,
        cache: true
      },
      onSuccess, onError);
  };


  var getPowerTrust = function( urls, onSuccess, onError ){
    if (!_apiKey) {
      onError('API key is not specified');
      return;
    }
    var url = API_URL + '?action=get&item=powertrust&key=' + _apiKey;
    var params = {};
    urls.map(function(val, index){
      params[ 'url' + (index + 1) ]  = val;
    });
    params.urlcount = urls.length;
    request(url, params,
      {
        continueOnError: true,
        cache: true
      },
      onSuccess, onError);
  };


  /**
   * @param  {array} data      [{url, anchortext, linktype}, ...]
   * @param  {[type]} onSuccess [description]
   * @param  {[type]} onError   [description]
   */
  var getDtoxRisk = function( arrLinks, onSuccess, onError ){
    if (!_apiKey) {
      onError('API key is not specified');
      return;
    }
    var url = API_URL + '?action=get&item=dtoxrisk&key=' + _apiKey;
    var params = {};
    arrLinks.map(function(link, index){
      params[ 'url' + (index + 1) ]  = link.url;
      params[ 'anchortext' + (index + 1) ]  = link.anchortext;
      params[ 'linktype' + (index + 1) ]  = link.linktype;
    });
    params.urlcount = arrLinks.length;
    request(url, params,
      {
        continueOnError: true,
        cache: true
      },
      onSuccess, onError);
  };


  var checkError = function( json, onError ){
    if (typeof json === 'object' && json.code === 200) return false;
    else if (typeof json === 'object' && json.message){
      onError(json.message);
      return true;
    }
    else {
      onError('An error has occured');
      return true;
    }
  };


  /**
   * Send request
   * @param  {obj} params    request params
   * @param  {obj} extra     extra flags
   * @param  {function} onSuccess
   * @param  {function} onError
   */
  var request = function( url, params, extra, onSuccess, onError){
    $(document).trigger('LRT:onBeforeRequestSent');
    var defer;
    var Cache = Cache;
    if (!Cache) Cache = chrome.extension.getBackgroundPage().Cache;
    var cacheKey = url + JSON.stringify(params);
    if (extra && extra.cache) {
      var cachedResponse = Cache.get( cacheKey );
      if (cachedResponse) {
        defer = $.Deferred();
        defer.resolve( cachedResponse );
      }
    }
    if (!defer) {
      defer = $.ajax({
        method: 'POST',
        url: url,
        dataType: 'json',
        data: params
      });
    }

    $.when( defer )
      .done(function(json){
        if (checkError( json, onError )) {
          if (!extra && !extra.continueOnError) return;
        }
        else {
          if (extra && extra.cache) Cache.set( cacheKey, json);
        }
        if (typeof onSuccess === 'function') onSuccess(json);
      })
      .fail(function( xhr,  textStatus, errorThrown){
        console.log(textStatus, errorThrown, xhr);
        if (typeof onError === 'function') onError( errorThrown, xhr );
      })
      .always(function(){
        $(document).trigger('LRT:onRequestComplete');
      });
  };


  var getUserData = function(){
    return {
      username: _username,
      apiKey: _apiKey
    };
  };


  // Public
  exports = {
    init: init,
    setKey: setKey,
    getPowerTrust: getPowerTrust,
    getMetrics: getMetrics,
    getDtoxRisk: getDtoxRisk
  };

  return exports;
})();
