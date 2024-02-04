function fade(el, v, time = 300) {
  el.style.opacity = v=='in' ? 0 : 1;
  el.style.display = v=='in' ? 'block' : 'none';
  var vv = v=='in' ? 1 : -1;
  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + vv * (new Date() - last) / time;
    last = +new Date();
    if ((+el.style.opacity < 1 && v=='in') || (+el.style.opacity > 0 && v=='out')) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}
document.querySelector( ".chooseBtn" ).onclick = function(event) {
	event.preventDefault();
	fade(document.querySelector('.selectSource'), 'in')
}
document.querySelector('.chooseBtn').addEventListener('blur', function(){
	setTimeout(()=>{fade(document.querySelector('.selectSource'), 'out')}, 100)
}, true)
document.querySelector('#searchInput').addEventListener('blur', function(){
	this.placeholder = "Enter your search query here"
}, true)
document.querySelector('#searchInput').addEventListener('focus', function(){
	this.placeholder = ""
}, true)
chrome.topSites.get(function(data){
	var topSitesHtml = ''
	data.forEach((e)=>{
		topSitesHtml += '<div class="siteItem">'+
							'<a href="'+e.url+'">'+
								'<div class="siteIcon">'+
									'<img src="https://www.google.com/s2/favicons?domain='+e.url+'">'+
								'</div>'+
								'<div class="siteName">'+
									'<a class="siteLink" href="'+e.url+'">'+e.title+'</a>'+
								'</div>'+
							'</a>'+
						'</div>'
	})
	if(topSitesHtml.length) {
		var topSitesBlock = document.createElement("div")
		topSitesBlock.setAttribute('class', 'topSitesBlock')
		topSitesBlock.innerHTML = topSitesHtml
		document.getElementById('containerLinks').appendChild(topSitesBlock)
	}
});
var search = {
	'yahoo': {'url': 'https://search.yahoo.com/search', 'param': 'p'},
	'bing': {'url': 'https://www.bing.com/search', 'param': 'q'},
	'google': {'url': 'https://www.google.com/search', 'param': 'q'}
}
document.querySelectorAll( ".selectSource p" ).forEach(function(e){
	e.onclick = function(event) {
		event.preventDefault();
		document.querySelectorAll( ".selectSource p" ).forEach(function(e){
			e.classList.remove("active")
		})
		e.classList.add('active')
		var source = e.dataset.source
		document.getElementById('searchForm').action = search[source].url
		document.getElementById('searchInput').name = search[source].param
	}
})