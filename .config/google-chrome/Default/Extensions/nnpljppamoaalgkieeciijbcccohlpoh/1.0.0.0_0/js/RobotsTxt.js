var RobotsTxt = (function(){

  var checkUrl = function( url, cbProcessResult ){
    var loc = getLocation(url);
    var robotsTxtUrl = loc.origin + '/robots.txt?' + Date.now();
    fetch(robotsTxtUrl, {credentials: 'omit'}).then(function(response){
      if (!response.ok) throw new Error(response.statusText);
      return response.text();
    }).then(function(text){
      var data = getFilters(text, loc.pathname);
      cbProcessResult(data);
    })
    .catch(function(error){
      cbProcessResult(false);
    });
  };


  var getLocation = function(href) {
      var l = document.createElement("a");
      l.href = href;
      return l;
  };


  var getFilters = function( txt, pathname ){
    var robots = parseFile(txt);
    var blocked = [];
    var allowed = [];
    for (var bot in robots) {
      var disallowed = false;
      var paths = robots[bot];
      paths.disallow.map(function(path){
        if (path === '') allowed.push(bot);
        else if (pathname.indexOf(path) === 0) {
          blocked.push(bot);
          disallowed = true;
        }
      });
      paths.allow.map(function(path){
        if (pathname.indexOf(path) === 0) allowed.push(bot);
      });
      // if robots has '*' and 'somebot', '*' rules doesn't affect on somebot
      if (bot !== '*' && !disallowed) {
        allowed.push(bot);
      }
    }
    if (!blocked.length && !allowed.length) return false;
    else {
      allowed = allowed.filter(function(item, pos) {return allowed.indexOf(item) == pos;});
      blocked = blocked.filter(function(item, pos) {return blocked.indexOf(item) == pos;});
      return {
        allowed: allowed,
        blocked: blocked
      };
    }
  };


  var parseFile = function( txt ){
    txt = txt.replace(/\r\n/g, '\n');
    txt = txt.replace(/^#.*?$/gm, '');
    txt = txt.replace(/\n\n+/gm, '\n\n');
    txt = $.trim(txt);
    var res = {};

    var sections = [];
    var section = '';
    var isPrevLineAgent = false;
    txt.split(/[\r\n]+/).map(function(line){
      if ($.trim(line).match(/^User-?agent/i)) {
        if (isPrevLineAgent) section += '\n' + line;
        else {
          if (section) sections.push(section);
          section = line;
        }
        isPrevLineAgent = true;
      }
      else {
        section += '\n' + line;
        isPrevLineAgent = false;
      }
    });
    sections.push(section);

    sections.map(function(section){
      var agents = section.match(/^User-?agent:.*?$/igm) || [];
      var disallow = section.match(/^Disallow:.*?$/igm) || [];
      var allow = section.match(/^Allow:.*?$/igm) || [];
      disallow = disallow.map(function(val){
        return val.replace(/^Disallow:\s*/i, '');
      });
      allow = allow.map(function(val){
        return val.replace(/^Allow:\s*/i, '');
      });
      agents = agents.map(function(val){
        var bot = val.replace(/^User-agent:\s*/i, '');
        if (!res[bot]) res[bot] = {
          allow: [],
          disallow: []
        };
        if (allow.length) res[bot].allow = res[bot].allow.concat(allow);
        if (disallow.length) res[bot].disallow = res[bot].disallow.concat(disallow);
      });
    });
    return res;
  };


  return {
    checkUrl: checkUrl
  };

})();

