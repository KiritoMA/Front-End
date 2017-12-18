  //$(document).ready(funciton(){...});jQuery函数写在这里，页面加载后运行$
$(document).ready(function(){
	$("#hide").click(function(){
		$(".set").hide(1000,function(){
			alert("already hidden");
		});
	});
	$("#show").click(function(){
		$("p").show(1000);
	});
	$(".flip").click(function(){
		$(".panel").slideToggle("slow");
		// alert("yes");
	});
	$(".animate").click(function(){
		$(".animate").animate({left:"250px",opacity:"0.4"},2000);
		$(".animate").animate({left:"0px",opacity:"1"},2000);
	});
	$("#stop").click(function(){
		$(".animate").stop();
	});
	$("#append").click(function(){
		$("ol").append("<li>Added item</li>");//注意这里的标签是ol
	})
	$("#empty").click(function(){
		$("ol").empty();
	})
});
