var SearchEngines = (function(){

  var list = ['applebot', 'baiduspider', 'bingbot', 'googlebot', 'msnbot', 'naverbot', 'seznambot', 'slurp', 'teoma', 'yandex'];


  var hasOneOrMoreMajor = function( bots ){
    var res = false;
    for (var i = 0, len = bots.length; i < len; i++) {
      var bot = bots[i];
      bot = bot.toLowerCase();
      if (list.indexOf(bot) !== -1) return true;
    }
    return res;
  };


  var hasAllMajors = function( bots ){
    var botsStr = bots.join(' ').toLowerCase();
    for (var i = 0, len = list.length; i < len; i++) {
      var bot = list[i].toLowerCase();
      if (botsStr.indexOf(bot) === -1) return false;
    }
    return true;
  };


  return {
    hasAllMajors: hasAllMajors,
    hasOneOrMoreMajor: hasOneOrMoreMajor
  };

})();
