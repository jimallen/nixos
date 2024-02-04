var RobotsImg = (function(){

  var vendor = (navigator.userAgent.match(/(Chrome|Firefox)/) || [])[1];
  var icons = {};

  ['noindex', 'major', 'index'].map(function(left){
    ['nofollow', 'follow', 'canonical'].map(function(right){
      var key = left + '-' + right;
      icons[key] = new Image();
      var filename = key + '.png';
      if (vendor === 'Firefox') filename = 'ff-' + filename;
      icons[key].src = '/img/toolbar/' + filename;
    });
  });


  var generateCanvas = function( params ){
    var noindex = params.data.noindex;
    var majorIndex = params.data.majorIndex;
    var nofollow = params.data.nofollow;
    var relCan = params.data.relCan;

    var canvas = document.createElement("canvas");
    var size = parseInt( params.size );
    if (!size) size = 19; // 19px
    canvas.width = size;
    canvas.height = size;
    var context = canvas.getContext("2d");

    var left = 'index';
    var right = 'follow';
    if (noindex && majorIndex) left = 'major';
    else if (noindex) left = 'noindex';

    if (relCan) right = 'canonical';
    else if (nofollow) right = 'nofollow';

    var key = left + '-' + right;
    var img = icons[key];
    context.drawImage(img, 0, 0, size, size);

    return canvas;
  };


  var convertCanvasToImage = function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
  };


  var getImageData = function(params){
    var canvas = generateCanvas(params);
    var context = canvas.getContext("2d");
    return context.getImageData(0,0,params.size, params.size);
  };


  return {
    getImageData: getImageData
  };

})();
