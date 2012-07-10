$(function() {
	new Gui().init();
});

var Gui = function() {
	this.init = function() {
		guiInit();
	}

	var guiInit = function() {
		$(".contentHistorySelectedItem").click(function(){
			$(this).parent().children().eq(1).show();
			var selectShow = true;
		});
		$(".contentHistorySelectList").hover(null,function(){
//			if (selectShow) return;
			$(".contentHistorySelectListContent").eq(0).hide();
		});
	}
}