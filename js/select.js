$(function(){
	var _select = $(".select");
	var _view = _select.find(".view");
	var _ul = _select.find("ul");

	_select.removeClass("noscript");

	_view.on('click', function(){
		_ul.toggle();
	});
	_select.on('mouseleave', function() {
		_ul.hide();
	});

	_ul.on('click', _ul.find("li"),function(e){
		var option = e.target;
		_view.html(option.innerHTML);
	});
});