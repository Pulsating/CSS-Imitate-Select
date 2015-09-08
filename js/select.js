$(function(){
	var _select = $(".select");
	var _view = _select.find(".view");
	var _ul = _select.find("ul");

	_select.removeClass("noscript");

	_view.on('click', function(){
		_ul.toggle();
	});

	_ul.on('click', 'li',function(e){
		var option = e.target;
		_view.html(option.innerHTML);
		_ul.fadeOut(200);
	});
	$(document).click(function (event) {
        if ($(event.target).parents('.select').length == 0) {
            _ul.fadeOut(200);
        }
    });
});