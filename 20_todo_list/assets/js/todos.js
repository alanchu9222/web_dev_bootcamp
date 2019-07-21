$("li").click(function(){
		$(this).toggleClass("completed");
	}
)

$("span").click(function(){
		$(this).parent().fadeOut(500,function(){ $(this).remove()});
	}
)

$("input[type='text']").keypress(function(event){
  if(event.which===13){
 	  $("ul").append("<li><span>X</span> "+$("input").val()+"</li>");
 	  $("input").val(""); 	  
  }
})