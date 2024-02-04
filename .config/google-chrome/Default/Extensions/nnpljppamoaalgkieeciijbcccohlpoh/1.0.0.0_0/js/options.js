var Options = (function(){

  var vendor = (navigator.userAgent.match(/(Chrome|Firefox)/) || [])[1];


  var init = function(){
    chrome.runtime.sendMessage({
      cmd: 'settings.get',
      data: {}
    }, function( settings ){
      initSettings(settings);
      initUI();
    });
  };


  var initSettings = function( settings ){
    for (var key in settings) {
      var id = '#input-' + key;
      $(id).prop('checked', settings[key]);
    }
  };


  var initUI = function(){
    if (vendor === 'Firefox') {
      $('a.rate-it-container').attr('href', 'http://lrt.li/rtsettingsratingff');
    }
    else {
      $('.analytics-row').removeClass('hidden');
      initAnalytics();
    }
    $('input[type=checkbox').change(function(e){
      if (this.id.indexOf('input-') !== 0) return;
      var key = this.id.replace('input-', '');
      setSetting( key, this.checked);
    });
    $('.btn-ok').click(function(e){
      e.preventDefault();
      document.location.href = '/html/popup.html';
    });
    initAnalytics();
  };


  var initAnalytics = function(){
    if (vendor !== 'Chrome') return;
    analytics.getService().getConfig().addCallback(function(config){
      var state = config.isTrackingPermitted();
      $('#analytics')
        .prop('checked', state)
        .change(function(e){
          config.setTrackingPermitted(this.checked);
        });
    });
  };


  var setSetting = function(key, value){
    chrome.runtime.sendMessage({
      cmd: 'settings.set',
      data: {
        key: key,
        value: value
      }
    });
  };


  return {
    init: init
  };

})();


Options.init();
