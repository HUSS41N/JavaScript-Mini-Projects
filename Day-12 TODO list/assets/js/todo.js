
// ****one way of doing line-through and changing color
// $("li").click(function(){
// 	if($(this).css("color")==="rgb(128, 128, 128)"){
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	})
// 	}
// 	else{
// 	$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	})
// 	}
// });

//deleting elements by x
$("ul").on("click","li",function(){
	$(this).toggleClass("toggle")
})

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
		});
	event.stopPropagation();
})
//***adding new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoInput = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+ todoInput +"</li>")
	}

})
$("#span").click(function(){
	$("input[type='text']").fadeToggle()	
})